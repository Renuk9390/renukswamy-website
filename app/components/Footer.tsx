import Link from "next/link"
import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  OrcidIcon,
  ScholarIcon,
} from "./Icons"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/demo", label: "Demo" },
  { href: "/teaching", label: "Teaching" },
  { href: "/publications", label: "Publications" },
  { href: "/consulting", label: "Consulting" },
  { href: "/collaborate", label: "Collaborate" },
]

const socials = [
  {
    href: "https://www.linkedin.com/in/renukswamy-chikkamath-6466493a/",
    label: "LinkedIn",
    Icon: LinkedInIcon,
  },
  {
    href: "https://scholar.google.com/citations?user=nbfWmvcAAAAJ&hl=en",
    label: "Google Scholar",
    Icon: ScholarIcon,
  },
  {
    href: "https://orcid.org/0000-0002-6010-670X",
    label: "ORCID",
    Icon: OrcidIcon,
  },
  {
    href: "https://github.com/Renuk9390",
    label: "GitHub",
    Icon: GitHubIcon,
  },
  {
    href: "mailto:renukswamy.chikkamath@hm.edu",
    label: "Email",
    Icon: EmailIcon,
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-paper/10 font-display text-sm font-semibold text-accent">
                RC
              </span>
              <span className="font-display text-base font-semibold tracking-tight">
                Renukswamy Chikkamath
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-paper/65">
              AI Researcher &middot; Information Retrieval Specialist &middot;
              Patent Intelligence Expert &middot; Builder of Domain-Specific
              AI Systems. PhD Candidate at Hochschule M&uuml;nchen.
            </p>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-paper/50">
              Navigate
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper/75 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-paper/50">
              Connect
            </p>
            <div className="mt-4 flex items-center gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                  aria-label={label}
                  className="text-paper/70 transition-colors hover:text-accent"
                >
                  <Icon className="h-7 w-7" />
                </a>
              ))}
            </div>
            <p className="mt-5 text-sm text-paper/50">Munich, Germany</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-paper/10 pt-6 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Renukswamy Chikkamath</p>
          <p>Germany &ndash; India Research Bridge</p>
        </div>
      </div>
    </footer>
  )
}
