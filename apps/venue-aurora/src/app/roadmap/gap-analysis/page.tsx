import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import DocumentationLayout from '@/components/DocumentationLayout';
import { extractTOC } from '@/lib/markdown';
import { MarkdownContent } from '@/lib/docs-utils';

export const metadata: Metadata = {
  title: 'Requirements Gap Analysis | The Venue Aurora',
  description: 'Detailed gap analysis comparing original requirements against current implementation',
};

export default async function GapAnalysisPage() {
  const filePath = path.join(process.cwd(), 'docs', 'requirements-gap-analysis.md');
  const content = fs.readFileSync(filePath, 'utf-8');
  const toc = extractTOC(content);

  const lines = content.split('\n');
  // Find the first ## heading (skip the # title)
  const contentStart = lines.findIndex((line, index) => index > 0 && line.startsWith('## '));
  const mainContent = contentStart !== -1 ? lines.slice(contentStart).join('\n') : content;

  return (
    <DocumentationLayout
      title="Requirements Gap Analysis & Enhancement Plan"
      date="December 23, 2025"
      version="1.0"
      toc={toc}
    >
      <MarkdownContent content={mainContent} />
    </DocumentationLayout>
  );
}
