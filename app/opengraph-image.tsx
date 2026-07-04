import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const archivo = await readFile(
    path.join(process.cwd(), "assets/fonts/archivo-expanded-bold.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#080807",
          color: "#F4F3EF",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#A5A198",
            marginBottom: 32,
          }}
        >
          Full-Stack Developer · Colombo, Sri Lanka
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Archivo",
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
          }}
        >
          Musthafa Altaf<span style={{ color: "#EAB308" }}>.</span>
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#A5A198",
            marginTop: 32,
          }}
        >
          Web, mobile and AI systems — built with care.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Archivo", data: archivo, weight: 700, style: "normal" },
      ],
    },
  );
}
