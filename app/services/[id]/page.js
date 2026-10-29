import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import Photo from "@/components/Photo";
import { services } from "@/lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ id: s.id }));
}

export function generateMetadata({ params }) {
  const s = services.find((x) => x.id === params.id);
  if (!s) return {};
  return { title: s.heading, description: s.paras[0].slice(0, 155) + "…" };
}

export default function ServiceDetail({ params }) {
  const i = services.findIndex((x) => x.id === params.id);
  if (i < 0) notFound();
  const s = services[i];
  const prev = services[(i - 1 + services.length) % services.length];
  const next = services[(i + 1) % services.length];

  return (
    <>
      <PageHero kicker={`Our services · ${String(i + 1).padStart(2, "0")} / ${String(services.length).padStart(2, "0")}`} title={s.heading} lead={s.text} image={s.img} />

      <section className="section">
        <div className="wrap sd-layout">
          <div className="sd-main">
            <Link href="/services" className="sd-back"><Icon name="left" size={14} sw={2} /> All services</Link>
            {s.paras.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}

            <h3 className="sd-sub">Scope of work</h3>
            <ul className="points two">{s.points.map((p) => <li key={p}>{p}</li>)}</ul>

            <div className="sd-pager">
              <Link href={`/services/${prev.id}`}><small>← Previous</small><b>{prev.title}</b></Link>
              <Link href={`/services/${next.id}`} className="r"><small>Next →</small><b>{next.title}</b></Link>
            </div>
          </div>

          <aside className="sd-side">
            <Photo src={[s.img, s.art]} icon={s.icon} className="sd-photo" />
            <div className="sd-card">
              <h3>Need this service?</h3>
              <p>Tell us about your site and requirements and our team will respond with a plan and quotation.</p>
              <Link href="/contact" className="btn gold-btn sm">Send an enquiry <Icon name="arrow" size={12} sw={2} /></Link>
            </div>
            <nav className="sd-card sd-list" aria-label="All services">
              <h3>All services</h3>
              {services.map((x) => (
                <Link key={x.id} href={`/services/${x.id}`} className={x.id === s.id ? "on" : ""}>{x.short}</Link>
              ))}
            </nav>
          </aside>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <h2>Planning a branch, office or site project?</h2>
          <Link className="btn gold-btn" href="/contact">Contact our team</Link>
        </div>
      </section>
    </>
  );
}
