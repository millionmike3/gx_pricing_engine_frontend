"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gx-bg-light border-b border-gx-border px-6 py-4 flex items-center justify-between">
      
      {/* Left: Brand */}
      <div className="text-xl font-bold text-gx-accent-blue">
        GenXBaby OS
      </div>

      {/* Right: Navigation */}
      <div className="flex items-center gap-6 text-gx-text">
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
      </div>
    </nav>
  );
}
