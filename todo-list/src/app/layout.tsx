import "./globals.css";

import type { Metadata } from "next";
import { Asap } from "next/font/google";

const asap = Asap({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo List",
  description: "A todo list app created by Pavan Hutagi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={asap.className}>{children}</body>
    </html>
  );
}
