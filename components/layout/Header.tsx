import { links } from "../../data/data"
import Dropdown from "./Dropdown"

export default function Header() {
  return (
    <header className="relative bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-full px-8 sm:px-24">
        <div className="flex items-center justify-between py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <img 
                className="h-8 w-auto sm:h-10" 
                src="/logo.svg" 
                alt="DabAZ Logo" 
              />
            </a>
          </div>
          <nav className="hidden items-center justify-end md:flex md:flex-1 lg:w-0 gap-x-4">
            {links.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-base tracking-tight text-slate-500 hover:text-slate-900 transition duration-200"
              >
                {link.title}
              </a>
            ))}
          </nav>
          <Dropdown />
        </div>
      </div>
    </header>
  )
}