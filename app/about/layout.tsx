import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio website",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
