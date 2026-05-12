import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b">
      <div className="font-bold text-lg">
        Renukswamy
      </div>

      <div className="flex gap-4 text-sm">
        <Link href="/">Home</Link>
        <Link href="/research">Research</Link>
        <Link href="/publications">Publications</Link>
        <Link href="/collaborate">Collaborate</Link>
      </div>
    </nav>
  )
}