import { profile } from "../../data/profile"

function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-20 shrink-0 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <nav className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <a
          href="#top"
          className="
            font-mono
            text-2xl
            font-bold
            tracking-[0.2em]
            text-cyan-300
            uppercase
            transition-colors
            hover:text-cyan-200
            sm:text-3xl
            md:text-4xl
          "
        >
          {profile.name}
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 font-mono text-sm md:flex lg:gap-8">
          <a
            href="#projects"
            className="
              text-lg
              text-slate-300
              transition-colors
              hover:text-cyan-300
              lg:text-xl
            "
          >
            Projects
          </a>

          <a
            href="#blog"
            className="
              text-lg
              text-slate-300
              transition-colors
              hover:text-pink-400
              lg:text-xl
            "
          >
            Blog
          </a>

          <a
            href="#about"
            className="
              text-lg
              text-slate-300
              transition-colors
              hover:text-cyan-300
              lg:text-xl
            "
          >
            About
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-lg
              text-slate-300
              transition-colors
              hover:text-pink-400
              lg:text-xl
            "
          >
            GitHub ↗
          </a>

          <a
            href={profile.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-lg
              text-slate-300
              transition-colors
              hover:text-cyan-400
              lg:text-xl
            "
          >
            LinkedIn ↗
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar