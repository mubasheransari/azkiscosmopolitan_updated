import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import Photo from "@/components/Photo";
import Link from "next/link";
import { categories } from "@/lib/data";

export const metadata = { title: "Products" };

export default function Products() {
  return (
    <>
      <PageHero kicker="Our products" title="Everything you can imagine in the defence sector" lead="Our product catalogue, organized by category. Can't find an item? We import and indent on request." image="/images/products.jpg" />
      <section className="section">
        <div className="wrap cat-layout">
          <nav className="cat-index" aria-label="Categories">
            {categories.map((c) => <Link key={c.id} href={`/products/${c.id}`}>{c.title}</Link>)}
          </nav>
          <div>
            {categories.map((c) => (
              <article key={c.id} id={c.id} className="cat">
                <div className="cat-head">
                  <span className="ico"><Icon name={c.icon} /></span>
                  <div><h2><Link href={`/products/${c.id}`}>{c.title}</Link></h2><p>{c.blurb}</p></div>
                  <Photo src={[c.img, c.art]} icon={c.icon} className="cat-thumb" />
                </div>
                <ul className="spec">
                  {c.items.map((i) => <li key={i.name}><b>{i.name}</b><span>{i.desc}</span></li>)}
                </ul>
                <Link href={`/products/${c.id}`} className="more">View details <Icon name="arrow" size={12} sw={2} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="wrap">
          <h2>Need a quotation or technical details?</h2>
          <Link className="btn gold-btn" href="/contact">Send an enquiry</Link>
        </div>
      </section>
    </>
  );
}
