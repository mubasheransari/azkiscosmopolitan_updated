import Link from "next/link";
import { company, social } from "@/lib/data";
import Logo from "./Logo";
import Icon from "./Icon";
//info@azkis.com.pk
const quick = [
  ["Home", "/"], ["Products", "/products"],
  ["About Us", "/about"], ["Industries", "/about#industries"],
  ["Services", "/services"], ["Contact", "/contact"],
];

export default function Footer() {
  const links = social.filter((s) => s.url);
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div><Logo light /></div>
        <div>
          <h4>Quick Links</h4>
          <div className="quick">{quick.map(([l, h]) => <Link key={l} href={h}>{l}</Link>)}</div>
        </div>
        <div>
          <h4>Get In Touch</h4>
          <ul className="touch">
            <li><Icon name="phone" size={15} sw={1.8} /><span>{company.offices.map((o) => o.phones[0]).join("  ·  ")}</span></li>
            <li><Icon name="mail" size={15} sw={1.8} /><a href={`mailto:${company.emails[0]}`}>{company.emails[0]}</a></li>
            <li><Icon name="pin" size={15} sw={1.8} /><span>{company.offices.map((o) => o.city).join(" | ")}</span></li>
          </ul>
        </div>
        <div className="social">
          {links.map((s) => <a key={s.name} href={s.url} aria-label={s.name} target="_blank" rel="noreferrer">{s.short}</a>)}
        </div>
      </div>
      <div className="foot-base">
        <div className="wrap foot-base-in">
          <span>© {new Date().getFullYear()} AZKIS Cosmopolitan. All rights reserved. &nbsp;|&nbsp; Reliable Delivery. One Accountable Partner.</span>
          <span>Designed for a Smarter Tomorrow</span>
        </div>
      </div>
      {company.whatsapp && (
        <a className="wa" href={`https://wa.me/${company.whatsapp}`} aria-label="Chat on WhatsApp" target="_blank" rel="noreferrer">WhatsApp</a>
      )}
    </footer>
  );
}
