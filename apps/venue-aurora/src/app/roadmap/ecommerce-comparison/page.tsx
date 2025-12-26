import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import DocumentationLayout from '@/components/DocumentationLayout';
import { extractTOC } from '@/lib/markdown';
import { MarkdownContent } from '@/lib/docs-utils';

export const metadata: Metadata = {
  title: 'E-Commerce Options Comparison | The Venue Aurora',
  description: 'Honest comparison of e-commerce platforms and recommendations for merchandise',
};

export default async function EcommerceComparisonPage() {
  const filePath = path.join(process.cwd(), 'docs', 'ecommerce-options-comparison.md');
  const content = fs.readFileSync(filePath, 'utf-8');
  const toc = extractTOC(content);

  const lines = content.split('\n');
  // Find the first ## heading (skip the # title)
  const contentStart = lines.findIndex((line, index) => index > 0 && line.startsWith('## '));
  const mainContent = contentStart !== -1 ? lines.slice(contentStart).join('\n') : content;

  return (
    <DocumentationLayout
      title="E-Commerce Options: Honest Comparison"
      date="December 23, 2025"
      version="1.0"
      toc={toc}
    >
      <MarkdownContent content={mainContent} />
    </DocumentationLayout>
  );
}
