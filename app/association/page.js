import PageHero from "@/components/PageHero";
import { partners, approach } from "@/lib/data";

export const metadata = { title: "Association" };

export default function Association() {
  return (
    <>
      <PageHero kicker="Association" title="Partners & association" lead="Trusted local and international partnerships — and a base for foreign investors to promote their products in Pakistan." />
      <section className="section" id="partners">
        <div className="wrap">
          <div className="sec-head"><h2>Our partners</h2></div>
          {partners.length ? (
            <div className="grid g3">
              {partners.map((p) => (
                <a className="card" key={p.name} href={p.url} target="_blank" rel="noreferrer">
                  <h3>{p.name}</h3><p>{p.country}</p><p>{p.scope}</p>
                </a>
              ))}
            </div>
          ) : (
            <p className="empty">Partner list coming soon. Add partners in <code>lib/data.js</code> (the <code>partners</code> array).</p>
          )}
        </div>
      </section>
      <section className="section alt" id="approach">
        <div className="wrap">
          <div className="sec-head"><h2>How we work with principals</h2></div>
          <div className="grid g4 steps">
            {approach.map((a) => <div className="card" key={a.title}><h3>{a.title}</h3><p>{a.text}</p></div>)}
          </div>
        </div>
      </section>
    </>
  );
}
