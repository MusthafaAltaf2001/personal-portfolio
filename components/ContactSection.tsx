"use client";

import { useState } from "react";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/icons";
import { siteConfig, socials } from "@/lib/data";

const socialIcons = {
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
  Instagram: InstagramIcon,
} as const;

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "success"; text: string }
  | { kind: "error"; text: string };

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const sendMessage = async () => {
    if (email.trim() === "" || message.trim() === "") {
      setStatus({
        kind: "error",
        text: "Email and message fields cannot be left empty!",
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
          text: data?.error ?? "An unexpected server error occurred!",
        });
        return;
      }
      setName("");
      setEmail("");
      setMessage("");
      setStatus({ kind: "success", text: "Message Sent" });
    } catch {
      setStatus({
        kind: "error",
        text: "An unexpected server error occurred!",
      });
    }
  };

  return (
    <div
      id="footer"
      className="flex flex-col items-center mt-5 bg-[#111827] pt-16"
    >
      <span className="text-4xl font-bold text-[#EAB308] px-10 py-4 text-center">
        CONTACT ME
      </span>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-8">
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-row py-4">
            <span className="text-[#EAB308]">Address: </span>
            <span className="text-[#F3F4F6]">
              &nbsp;{siteConfig.contact.address}
            </span>
          </div>
          <div className="flex flex-row py-4">
            <span className="text-[#EAB308]">Phone: </span>
            <span className="text-[#F3F4F6]">
              &nbsp;{siteConfig.contact.phone}
            </span>
          </div>
          <div className="flex flex-row py-4">
            <span className="text-[#EAB308]">Email: </span>
            <span className="text-[#F3F4F6]">
              &nbsp;{siteConfig.contact.email}
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="bg-[#1F2937] text-[#F3F4F6] border-0 rounded p-2 w-[200px] xs:w-[240px] sm:w-[280px] md:w-[250px] m-2"
            type="text"
            name="name"
            placeholder="Name (Optional)"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="bg-[#1F2937] text-[#F3F4F6] border-0 rounded p-2 w-[200px] xs:w-[240px] sm:w-[280px] md:w-[250px] m-2"
            type="email"
            name="email"
            placeholder="Your email"
          />
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="bg-[#1F2937] text-[#F3F4F6] border-0 rounded px-2 pt-2 pb-[120px] w-[250px] xs:w-[300px] sm:w-[350px] md:w-[320px] m-2 text-justify flex-wrap"
            name="message"
            placeholder="Message"
          />
          <input
            onChange={(e) => setCompany(e.target.value)}
            value={company}
            className="hidden"
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <button
            onClick={sendMessage}
            disabled={status.kind === "sending"}
            className="w-40 h-1/12 rounded-md m-2 bg-[#EAB308] px-2 py-1 text-center items-center disabled:opacity-70"
          >
            <span className="text-[#000000]">
              {status.kind === "sending" ? "Sending..." : "Send Message"}
            </span>
          </button>
          <p
            role="status"
            className={`m-2 text-sm min-h-5 ${
              status.kind === "success" ? "text-[#EAB308]" : "text-red-400"
            }`}
          >
            {status.kind === "success" || status.kind === "error"
              ? status.text
              : ""}
          </p>
        </div>
      </div>
      <div className="flex flex-row py-8">
        {socials.map((social) => {
          const Icon = socialIcons[social.name as keyof typeof socialIcons];
          return (
            <div key={social.name} className="px-2">
              <a href={social.href} aria-label={social.name}>
                <Icon className="text-[#F3F4F6]" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
