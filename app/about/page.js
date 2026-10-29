import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import { about, glance, team, clients, structure, company } from "@/lib/data";

export const metadata = { title: "About" };

export default function About() {
  return (
    <>
      <PageHero kicker="Who we are" title="About us" lead={about.intro} image="/images/about.jpg" />

      <section className="section">
        <div className="wrap split">
          <div className="prose">
            <h2 style={{ marginBottom: "1.2rem" }}>Established in {company.established}, registered in {company.registeredMod}</h2>
            {about.story.map((p) => <p key={p}>{p}</p>)}
          </div>
          <div>
            <h3 style={{ marginBottom: "1rem" }}>At a glance</h3>
            <ul className="glance">{glance.map((g) => <li key={g}>{g}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="grid g3">
            {about.pillars.map((p) => (
              <div className="card" key={p.title}><h3>{p.title}</h3><p>{p.text}</p></div>
            ))}
          </div>
          <p className="prose" style={{ marginTop: "2.4rem", maxWidth: "80ch" }}>{about.philosophy}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap mv">
          <div className="card big">
            <h2>Our mission</h2>
            <p style={{ margin: "1rem 0" }}>{about.mission.text}</p>
            <p>{about.mission.extra}</p>
            <div className="chips">{about.mission.values.map((v) => <span className="chip" key={v}>{v}</span>)}</div>
          </div>
          <div className="card big">
            <h2>Our vision</h2>
            <p style={{ margin: "1rem 0" }}>{about.vision.text}</p>
            <p>{about.vision.extra}</p>
            <div className="chips">{about.vision.values.map((v) => <span className="chip" key={v.title} title={v.text}>{v.title}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <div className="sec-head"><h2>Our team</h2><p>Project leadership, technical specialists and skilled site teams — every workstream coordinated and accountable.</p></div>
          <div className="grid g3">
            {team.map((t) => (
              <div className="card" key={t.title}><span className="ico"><Icon name={t.icon} /></span><h3>{t.title}</h3><p>{t.text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="industries" style={{ scrollMarginTop: "90px" }}>
        <div className="wrap">
          <div className="sec-head"><h2>Who we serve</h2><p>Organizations that need dependable infrastructure, professional site execution and coordinated delivery.</p></div>
          <div className="grid g3">
            {clients.map((c) => <div className="card" key={c.title}><h3>{c.title}</h3><p>{c.text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <div className="sec-head"><h2>Company structure</h2></div>
          <div className="org">
            <div className="org-top">{structure.top}</div>
            <div className="org-row">
              {structure.branches.map((b) => (
                <div className="org-col" key={b.head}>
                  <h4>{b.head}</h4>
                  <ul>{b.items.map((i) => <li key={i}>{i}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
