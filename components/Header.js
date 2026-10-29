"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/data";
import Logo from "./Logo";
import Icon from "./Icon";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const base = (h) => h.split("#")[0];
  const active = (h) => (h === "/" ? path === "/" : !h.includes("#") && path.startsWith(h));
  return (
    <header className="header">
      <div className="wrap header-in">
        <Link href="/" aria-label="AZKIS Cosmopolitan home" onClick={() => setOpen(false)}><Logo /></Link>
        <button className="burger" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav className={"nav" + (open ? " open" : "")}>
          {nav.map((n) => (
            <div key={n.label} className="nav-item">
              <Link href={n.href} className={(active(n.href) ? "on " : "") + (n.label === "Contact" ? "gold" : "")} onClick={() => setOpen(false)}>
                {n.label}{n.children && <Icon name="chevron" size={12} sw={2.2} />}
              </Link>
              {n.children && (
                <div className="drop">
                  {n.children.map((c) => <Link key={c.href} href={c.href} onClick={() => setOpen(false)}>{c.label}</Link>)}
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" className="btn gold-btn quote-btn" onClick={() => setOpen(false)}>
            <Icon name="mail" size={15} sw={1.8} /> Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
