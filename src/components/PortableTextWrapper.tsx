import React from 'react';
import { PortableText } from '@portabletext/react';

export default function PortableTextWrapper({ content }: { content: any }) {
  if (!content) return null;
  return <PortableText value={content} />;
}
