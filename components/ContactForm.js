"use client";
import { useState } from "react";
import { company } from "@/lib/data";

// Opens the visitor's email app with the message filled in.
// For server-side sending, replace onSubmit with a fetch() to an app/api/contact route.
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name: ${f.get("name")}\nOrganization: ${f.get("org")}\nPhone: ${f.get("phone")}\n\n${f.get("message")}`;
    window.location.href = `mailto:${company.emails[0]}?subject=${encodeURIComponent(f.get("subject") || "Website enquiry")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  return (
    <form className="form" onSubmit={onSubmit}>
      <label>Your name<input name="name" required /></label>
      <label>Organization<input name="org" /></label>
      <label>Phone<input name="phone" type="tel" /></label>
      <label>Subject<input name="subject" placeholder="e.g. Aircraft refueler enquiry" /></label>
      <label className="full">Message<textarea name="message" rows="5" required /></label>
      <button className="btn gold-btn" type="submit">Send enquiry</button>
      {sent && <p className="note">Your email app should open with the message ready to send.</p>}
    </form>
  );
}
