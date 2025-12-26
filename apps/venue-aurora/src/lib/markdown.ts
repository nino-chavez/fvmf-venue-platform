/**
 * Markdown parsing utilities for documentation pages
 */

export interface TOCItem {
  id: string;
  title: string;
  level: number;
}

/**
 * Parse markdown headings to generate table of contents
 */
export function extractTOC(markdown: string): TOCItem[] {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const toc: TOCItem[] = [];
  const seenIds = new Map<string, number>();
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const title = match[2].trim();

    // Skip h1 (document title)
    if (level === 1) continue;

    // Generate ID from title
    let id = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    // Handle duplicate IDs by appending a counter
    if (seenIds.has(id)) {
      const count = seenIds.get(id)! + 1;
      seenIds.set(id, count);
      id = `${id}-${count}`;
    } else {
      seenIds.set(id, 1);
    }

    toc.push({ id, title, level });
  }

  return toc;
}

/**
 * Convert markdown to HTML with proper heading IDs for anchor links
 */
export function markdownToHTML(markdown: string): string {
  let html = markdown;

  // Convert headings with IDs
  html = html.replace(/^(#{1,6})\s+(.+)$/gm, (match, hashes, title) => {
    const level = hashes.length;
    const id = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
    return `<h${level} id="${id}">${title}</h${level}>`;
  });

  // Convert bold
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  // Convert italic
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // Convert inline code
  html = html.replace(/`(.+?)`/g, '<code>$1</code>');

  // Convert code blocks
  html = html.replace(/```(\w+)?\n([\s\S]+?)```/g, (match, lang, code) => {
    return `<pre><code class="language-${lang || 'text'}">${escapeHtml(code.trim())}</code></pre>`;
  });

  // Convert links
  html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  // Convert lists
  html = html.replace(/^\s*[-*]\s+(.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');
  html = html.replace(/<\/li>\n?<li>/g, '</li><li>');

  // Convert numbered lists
  html = html.replace(/^\s*\d+\.\s+(.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, (match) => {
    if (!match.includes('<ul>')) {
      return `<ol>${match}</ol>`;
    }
    return match;
  });

  // Convert checkboxes
  html = html.replace(/\[ \]/g, '<input type="checkbox" disabled />');
  html = html.replace(/\[x\]/gi, '<input type="checkbox" checked disabled />');
  html = html.replace(/\[✅\]/g, '<input type="checkbox" checked disabled />');

  // Convert blockquotes
  html = html.replace(/^>\s+(.+)$/gm, '<blockquote>$1</blockquote>');

  // Convert horizontal rules
  html = html.replace(/^---$/gm, '<hr />');

  // Convert paragraphs (wrap text not already in tags)
  const lines = html.split('\n');
  const processed = lines.map(line => {
    const trimmed = line.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('<')) return line;
    return `<p>${line}</p>`;
  });
  html = processed.join('\n');

  // Clean up extra newlines
  html = html.replace(/\n{3,}/g, '\n\n');

  return html;
}

/**
 * Escape HTML special characters
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

/**
 * Parse markdown tables to HTML
 */
export function parseMarkdownTable(markdown: string): string {
  const tableRegex = /\|(.+)\|\n\|[-:\s|]+\|\n((?:\|.+\|\n?)+)/g;

  return markdown.replace(tableRegex, (match, header, body) => {
    const headers = header.split('|').map((h: string) => h.trim()).filter(Boolean);
    const rows = body.trim().split('\n').map((row: string) =>
      row.split('|').map((cell: string) => cell.trim()).filter(Boolean)
    );

    let html = '<table><thead><tr>';
    headers.forEach((h: string) => {
      html += `<th>${h}</th>`;
    });
    html += '</tr></thead><tbody>';

    rows.forEach((row: string[]) => {
      html += '<tr>';
      row.forEach((cell: string) => {
        html += `<td>${cell}</td>`;
      });
      html += '</tr>';
    });

    html += '</tbody></table>';
    return html;
  });
}
