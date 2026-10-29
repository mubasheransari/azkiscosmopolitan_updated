import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { company } from "@/lib/data";

export const metadata = { title: "Contact" };

export default function Contact() {
  return (
    <>
      <PageHero kicker="Get in touch" title="Contact us" lead={`For project enquiries, product requests and technical installations. Office hours: ${company.hours}.`} image="/images/contact.jpg" />
      <section className="section">
        <div className="wrap grid g2" style={{ alignItems: "start" }}>
          <div className="grid">
            {company.offices.map((o) => (
              <div className="office" key={o.city}>
                <span className="tag">{o.label}</span>
                <h3>{o.city}</h3>
                <p>{o.address.join(" ")}</p>
                <br />
                {o.phones.map((p) => <a key={p} href={`tel:${p.replace(/[^+\d]/g, "")}`}>{p}</a>)}
                <p>Fax: {o.fax}</p>
              </div>
            ))}
            <div className="office">
              <h3>Email</h3>
              {company.emails.map((e) => <a key={e} href={`mailto:${e}`}>{e}</a>)}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
