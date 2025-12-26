import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import DocumentationLayout from '@/components/DocumentationLayout';
import { extractTOC } from '@/lib/markdown';
import { MarkdownContent } from '@/lib/docs-utils';

export const metadata: Metadata = {
  title: 'Strategic Roadmap | The Venue Aurora',
  description: 'Comprehensive strategic roadmap and implementation plan for The Venue Aurora website redesign',
};

export default async function StrategicRoadmapPage() {
  // Read the markdown file
  const filePath = path.join(process.cwd(), 'docs', 'strategic-roadmap.md');
  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract TOC
  const toc = extractTOC(content);

  // Remove the title and metadata from content for rendering
  const lines = content.split('\n');
  // Find the first ## heading (skip the # title)
  const contentStart = lines.findIndex((line, index) => index > 0 && line.startsWith('## '));
  const mainContent = contentStart !== -1 ? lines.slice(contentStart).join('\n') : content;

  return (
    <DocumentationLayout
      title="Strategic Roadmap & Implementation Plan"
      date="December 23, 2025"
      version="1.0"
      toc={toc}
    >
      <MarkdownContent content={mainContent} />
    </DocumentationLayout>
  );
}
