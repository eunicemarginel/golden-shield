import { RichText as LexicalRichText } from "@payloadcms/richtext-lexical/react";

export function RichText({
  data,
  className = "",
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  className?: string;
}) {
  if (!data) return null;

  return (
    <div
      className={`prose prose-neutral max-w-none prose-headings:font-semibold prose-a:text-gold prose-a:no-underline hover:prose-a:underline ${className}`}
    >
      <LexicalRichText data={data} />
    </div>
  );
}
