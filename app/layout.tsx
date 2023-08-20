import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Next App",
  description: "Application built with next js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
