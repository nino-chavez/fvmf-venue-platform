/**
 * Utility functions for rendering documentation pages
 */

export function formatMarkdown(text: string): string {
  let html = text;
  const seenIds = new Map<string, number>();

  const generateUniqueId = (title: string): string => {
    let id = title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');

    if (seenIds.has(id)) {
      const count = seenIds.get(id)! + 1;
      seenIds.set(id, count);
      id = `${id}-${count}`;
    } else {
      seenIds.set(id, 1);
    }

    return id;
  };

  // H3 headings
  html = html.replace(/^###\s+(.+)$/gm, (match, title) => {
    const id = generateUniqueId(title);
    return `<h3 id="${id}" class="text-2xl font-bold text-white mb-4 mt-8 scroll-mt-24">${title}</h3>`;
  });

  // H4 headings
  html = html.replace(/^####\s+(.+)$/gm, (match, title) => {
    const id = generateUniqueId(title);
    return `<h4 id="${id}" class="text-xl font-semibold text-neutral-200 mb-3 mt-6 scroll-mt-24">${title}</h4>`;
  });

  // H5 headings
  html = html.replace(/^#####\s+(.+)$/gm, '<h5 class="text-lg font-semibold text-neutral-300 mb-2 mt-4">$1</h5>');

  // Bold
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-white">$1</strong>');

  // Italic
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code class="rounded bg-neutral-800 px-2 py-1 text-sm text-orange-400">$1</code>');

  // Code blocks
  html = html.replace(/```(\w+)?\n([\s\S]+?)```/g, '<pre class="my-4 overflow-x-auto rounded-lg bg-neutral-900 p-4"><code class="text-sm text-neutral-300">$2</code></pre>');

  // Links
  html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-orange-500 hover:text-orange-400 underline" target="_blank" rel="noopener noreferrer">$1</a>');

  // Tables
  html = html.replace(/\|(.+)\|\n\|[-:\s|]+\|\n((?:\|.+\|\n?)+)/g, (match, header, body) => {
    const headers = header.split('|').map((h: string) => h.trim()).filter(Boolean);
    const rows = body.trim().split('\n').map((row: string) =>
      row.split('|').map((cell: string) => cell.trim()).filter(Boolean)
    );

    let table = '<div class="my-6 overflow-x-auto"><table class="w-full border-collapse"><thead class="bg-neutral-800"><tr>';
    headers.forEach((h: string) => {
      table += `<th class="border border-neutral-700 px-4 py-2 text-left font-semibold text-white">${h}</th>`;
    });
    table += '</tr></thead><tbody>';

    rows.forEach((row: string[], i: number) => {
      table += `<tr class="${i % 2 === 0 ? 'bg-neutral-900/50' : 'bg-neutral-900/30'}">`;
      row.forEach((cell: string) => {
        // Process markdown in cells
        let cellContent = cell;
        cellContent = cellContent.replace(/✅/g, '<span class="text-green-500">✅</span>');
        cellContent = cellContent.replace(/❌/g, '<span class="text-red-500">❌</span>');
        cellContent = cellContent.replace(/🟡/g, '<span class="text-yellow-500">🟡</span>');
        cellContent = cellContent.replace(/⚠️/g, '<span class="text-amber-500">⚠️</span>');
        cellContent = cellContent.replace(/🟢/g, '<span class="text-green-500">🟢</span>');
        cellContent = cellContent.replace(/🔴/g, '<span class="text-red-500">🔴</span>');
        table += `<td class="border border-neutral-700 px-4 py-2 text-neutral-300">${cellContent}</td>`;
      });
      table += '</tr>';
    });

    table += '</tbody></table></div>';
    return table;
  });

  // Unordered lists
  html = html.replace(/^[-*]\s+(.+)$/gm, '<li class="ml-6 text-neutral-300">$1</li>');
  html = html.replace(/(<li class="ml-6[^>]*>.*<\/li>\n?)+/g, '<ul class="my-4 list-disc space-y-2">$&</ul>');

  // Ordered lists
  html = html.replace(/^\d+\.\s+(.+)$/gm, '<li class="ml-6 text-neutral-300">$1</li>');
  html = html.replace(/(<li class="ml-6[^>]*>.*<\/li>\n?)+/g, (match) => {
    if (!match.includes('<ul')) {
      return `<ol class="my-4 list-decimal space-y-2">${match}</ol>`;
    }
    return match;
  });

  // Checkboxes
  html = html.replace(/\[ \]/g, '<input type="checkbox" disabled class="mr-2 align-middle" />');
  html = html.replace(/\[x\]/gi, '<input type="checkbox" checked disabled class="mr-2 align-middle" />');
  html = html.replace(/\[✅\]/g, '<input type="checkbox" checked disabled class="mr-2 align-middle" />');
  html = html.replace(/\[⬜\]/g, '<input type="checkbox" disabled class="mr-2 align-middle" />');

  // Blockquotes
  html = html.replace(/^>\s+(.+)$/gm, '<blockquote class="my-4 border-l-4 border-orange-500 pl-4 italic text-neutral-400">$1</blockquote>');

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr class="my-8 border-neutral-800" />');

  // Emoji enhancements
  html = html.replace(/✅/g, '<span class="text-green-500">✅</span>');
  html = html.replace(/❌/g, '<span class="text-red-500">❌</span>');
  html = html.replace(/🟡/g, '<span class="text-yellow-500">🟡</span>');
  html = html.replace(/⚠️/g, '<span class="text-amber-500">⚠️</span>');
  html = html.replace(/🟢/g, '<span class="text-green-500">🟢</span>');
  html = html.replace(/🔴/g, '<span class="text-red-500">🔴</span>');

  // Paragraphs
  const lines = html.split('\n');
  const processed = lines.map(line => {
    const trimmed = line.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('<')) return line;
    if (trimmed.match(/^[-*]\s/) || trimmed.match(/^\d+\.\s/)) return line;
    return `<p class="mb-4 leading-relaxed text-neutral-300">${line}</p>`;
  });

  return processed.join('\n').replace(/\n{3,}/g, '\n\n');
}

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  // Split by sections
  const sections = content.split(/(?=^## )/gm);
  const seenH2Ids = new Map<string, number>();

  return (
    <>
      {sections.map((section, index) => {
        const lines = section.trim().split('\n');
        const heading = lines[0];
        const body = lines.slice(1).join('\n');

        if (!heading) return null;

        // Extract heading text and create ID
        const headingMatch = heading.match(/^##\s+(.+)$/);
        if (!headingMatch) {
          return <div key={index} dangerouslySetInnerHTML={{ __html: formatMarkdown(section) }} />;
        }

        const headingText = headingMatch[1];
        let id = headingText
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-');

        // Handle duplicate H2 IDs
        if (seenH2Ids.has(id)) {
          const count = seenH2Ids.get(id)! + 1;
          seenH2Ids.set(id, count);
          id = `${id}-${count}`;
        } else {
          seenH2Ids.set(id, 1);
        }

        return (
          <section key={`${id}-${index}`} className="mb-12">
            <h2 id={id} className="mb-6 text-3xl font-bold text-white scroll-mt-24">
              {headingText}
            </h2>
            <div dangerouslySetInnerHTML={{ __html: formatMarkdown(body) }} />
          </section>
        );
      })}
    </>
  );
}
