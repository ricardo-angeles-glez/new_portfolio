import Link from "next/link";
import About  from "../about/page";

export default function Navbar() {
  return (
    <nav className="w-full py-6 mb-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link href="/" className="font-bold text-lg">
          RA
        </Link>
        <div className="space-x-8 text-neutral-700">
          <Link href=""><About />About</Link>
          <Link href="/work">Work</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
