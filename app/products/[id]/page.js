import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import Photo from "@/components/Photo";
import { categories, approach, company } from "@/lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ id: c.id }));
}

export function generateMetadata({ params }) {
  const c = categories.find((x) => x.id === params.id);
  if (!c) return {};
  return {
    title: c.title,
    description: `${c.blurb} Imported and indented by ${company.name} for the Ministry of Defence and other clients.`,
  };
}

export default function CategoryDetail({ params }) {
  const i = categories.findIndex((x) => x.id === params.id);
  if (i < 0) notFound();
  const c = categories[i];
  const prev = categories[(i - 1 + categories.length) % categories.length];
  const next = categories[(i + 1) % categories.length];

  return (
    <>
      <PageHero
        kicker={`Our products · ${String(i + 1).padStart(2, "0")} / ${String(categories.length).padStart(2, "0")}`}
        title={c.title}
        lead={c.blurb}
        image={c.img}
      />

      <section className="section">
        <div className="wrap sd-layout">
          <div className="sd-main">
            <Link href="/products" className="sd-back"><Icon name="left" size={14} sw={2} /> All products</Link>

            <p>
              {company.name} imports and indents {c.title.toLowerCase()} products for the Ministry of Defence,
              its allied establishments and other clients. {c.blurb} Can&apos;t see the exact item you need?
              We source and indent on request.
            </p>

            <h3 className="sd-sub">What we supply</h3>
            <div className="item-grid">
              {c.items.map((it) => (
                <div className="card" key={it.name}>
                  <h3>{it.name}</h3>
                  <p>{it.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="sd-sub">How we deliver</h3>
            <div className="item-grid steps">
              {approach.map((a) => (
                <div className="card" key={a.title}>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </div>
              ))}
            </div>

            <div className="sd-pager">
              <Link href={`/products/${prev.id}`}><small>← Previous</small><b>{prev.title}</b></Link>
              <Link href={`/products/${next.id}`} className="r"><small>Next →</small><b>{next.title}</b></Link>
            </div>
          </div>

          <aside className="sd-side">
            <Photo src={[c.img, c.art]} icon={c.icon} className="sd-photo" />
            <div className="sd-card">
              <h3>Need a quotation?</h3>
              <p>Tell us the item, quantity and end user and our team will respond with technical details and a quotation.</p>
              <Link href="/contact" className="btn gold-btn sm">Send an enquiry <Icon name="arrow" size={12} sw={2} /></Link>
            </div>
            <nav className="sd-card sd-list" aria-label="All product categories">
              <h3>All categories</h3>
              {categories.map((x) => (
                <Link key={x.id} href={`/products/${x.id}`} className={x.id === c.id ? "on" : ""}>{x.title}</Link>
              ))}
            </nav>
          </aside>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <h2>Need a quotation or technical details?</h2>
          <Link className="btn gold-btn" href="/contact">Contact our team</Link>
        </div>
      </section>
    </>
  );
}
