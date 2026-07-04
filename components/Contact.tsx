"use client";

import { useState } from "react";
import { Magnetic } from "@/components/Magnetic";
import { Reveal } from "@/components/Reveal";
import { siteConfig, socials } from "@/lib/data";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "success"; text: string }
  | { kind: "error"; text: string };

const inputClasses =
  "w-full rounded-lg border border-ink-muted/60 bg-transparent px-4 py-3 text-ink placeholder:text-ink-muted transition-colors focus:border-gold focus:outline-none";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const sendMessage = async () => {
    if (email.trim() === "" || message.trim() === "") {
      setStatus({
        kind: "error",
        text: "Email and message fields cannot be left empty.",
      });
      return;
    }
    setStatus({ kind: "sending" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, company }),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setStatus({
          kind: "error",
          text: data?.error ?? "Something went wrong — please try again.",
        });
        return;
      }
      setName("");
      setEmail("");
      setMessage("");
      setCompany("");
      setStatus({ kind: "success", text: "Message sent — I'll be in touch." });
    } catch {
      setStatus({
        kind: "error",
        text: "Something went wrong — please try again.",
      });
    }
  };

  return (
    <section id="contact" className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="label mb-4 border-b border-gold-soft pb-3 w-fit">
            Contact
          </p>
          <h2 className="display text-[clamp(2.2rem,6vw,4.5rem)] text-ink">
            Say hello<span className="text-gold">.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-14 md:grid-cols-2">
          <Reveal delay={0.08}>
            <p className="max-w-md text-lg text-ink-muted">
              Whether it&apos;s a role, a project, or just a good idea — my
              inbox is open.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="link-draw mt-8 inline-block pb-1 text-lg text-ink"
            >
              {siteConfig.email}
            </a>
            <ul className="mt-10 flex gap-6">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="label link-draw pb-1 transition-colors hover:text-ink"
                  >
                    {social.name} ↗
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.16}>
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
            >
              <label className="sr-only" htmlFor="contact-name">
                Name
              </label>
              <input
                id="contact-name"
                className={inputClasses}
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                placeholder="Name (optional)"
              />
              <label className="sr-only" htmlFor="contact-email">
                Email
              </label>
              <input
                id="contact-email"
                className={inputClasses}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="Your email"
              />
              <label className="sr-only" htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                className={`${inputClasses} min-h-36 resize-y`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                placeholder="Message"
              />
              <input
                className="hidden"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                type="text"
                name="contact_extra_7f3a"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <div>
                <Magnetic>
                  <button
                    type="submit"
                    disabled={status.kind === "sending"}
                    className="rounded-full bg-gold px-7 py-3.5 font-medium text-ground transition-transform hover:scale-[1.03] disabled:opacity-60"
                  >
                    {status.kind === "sending" ? "Sending…" : "Send message"}
                  </button>
                </Magnetic>
              </div>
              <p
                role="status"
                className={`min-h-6 text-sm ${
                  status.kind === "error" ? "text-red-400" : "text-gold"
                }`}
              >
                {status.kind === "success" || status.kind === "error"
                  ? status.text
                  : ""}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
