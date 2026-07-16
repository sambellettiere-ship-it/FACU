// Renders one or more JSON-LD structured-data blocks into the page. Search
// engines read these to understand the business, its services, and FAQs, which
// unlocks rich results (star ratings, FAQ dropdowns, local map listings).
//
// Works in both server and client components — Next.js server-renders the tag
// into the initial HTML either way, so crawlers see it without running JS.
export function JsonLd({ data }: { data: object | object[] }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          // JSON.stringify output is safe to inline; there is no user input here.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
