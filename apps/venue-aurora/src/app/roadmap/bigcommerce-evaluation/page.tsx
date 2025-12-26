import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import DocumentationLayout from '@/components/DocumentationLayout';
import { extractTOC } from '@/lib/markdown';
import { MarkdownContent } from '@/lib/docs-utils';

export const metadata: Metadata = {
  title: 'BigCommerce + Catalyst Evaluation | The Venue Aurora',
  description: 'Comprehensive evaluation of BigCommerce + Catalyst platform for venue requirements',
};

export default async function BigCommerceEvaluationPage() {
  const filePath = path.join(process.cwd(), 'docs', 'bigcommerce-catalyst-evaluation.md');
  const content = fs.readFileSync(filePath, 'utf-8');
  const toc = extractTOC(content);

  const lines = content.split('\n');
  // Find the first ## heading (skip the # title)
  const contentStart = lines.findIndex((line, index) => index > 0 && line.startsWith('## '));
  const mainContent = contentStart !== -1 ? lines.slice(contentStart).join('\n') : content;

  return (
    <DocumentationLayout
      title="BigCommerce + Catalyst Evaluation"
      date="December 23, 2025"
      version="1.0"
      toc={toc}
    >
      <MarkdownContent content={mainContent} />
    </DocumentationLayout>
  );
}
