import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin · Anfragen",
  robots: { index: false, follow: false },
};

// Thin wrapper: each admin page renders its own chrome (the dashboard shows a
// header with logout; the login page is a standalone card). This layout only
// keeps the admin area out of the index.
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="relative z-10 flex-1">{children}</div>;
}
