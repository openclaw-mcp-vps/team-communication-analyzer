import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Team Communication Analyzer",
  description: "Analyze team communication patterns for bottlenecks"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0c38372a-c3f2-4f82-bc01-5a4c49d90f59"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
