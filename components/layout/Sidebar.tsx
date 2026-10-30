import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen border-r p-4 space-y-4">
      <Link href="/">Home</Link>
      <Link href="/pricing">Pricing</Link>
      <Link href="/admin">Admin</Link>
      <Link href="/investor">Investor</Link>
      <Link href="/borrower">Borrower</Link>
    </aside>
  );
}
