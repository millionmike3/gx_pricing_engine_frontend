import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen border-r border-gx-border bg-gx-bg-light p-6 flex flex-col gap-4">
      
      <h1 className="text-xl font-bold text-gx-accent-blue mb-4">
        GX Pricing Engine
      </h1>

      <nav className="flex flex-col gap-3 text-gx-text">
        <Link href="/" className="hover:text-gx-accent-blue transition">
          Home
        </Link>

        <Link href="/pricing" className="hover:text-gx-accent-blue transition">
          Pricing
        </Link>

        <Link href="/admin" className="hover:text-gx-accent-blue transition">
          Admin
        </Link>

        <Link href="/investor" className="hover:text-gx-accent-blue transition">
          Investor
        </Link>

        <Link href="/borrower" className="hover:text-gx-accent-blue transition">
          Borrower
        </Link>
      </nav>
    </aside>
  );
}
