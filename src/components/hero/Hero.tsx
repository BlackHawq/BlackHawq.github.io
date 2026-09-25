import { profile } from "../../data/profile"
import CityBackground from "./CityBackground"

function Hero() {
  return (
    <section
      id="top"
      className="
        relative isolate
        h-[calc(100svh-5rem)]
        overflow-hidden
      "
    >
      <CityBackground />

      {/* =========================================================
          HERO CONTENT
          ========================================================= */}

      <div
        className="
          relative z-10 mx-auto h-full w-full max-w-7xl
          px-5 pt-7
          sm:px-8 sm:pt-9
          md:px-10 md:pt-10
          lg:px-12 lg:pt-12
        "
      >
        <div
          className="
            max-w-3xl
            lg:-translate-x-6
            xl:-translate-x-10
          "
        >
          {/* Welcome */}
          <p
            className="
              mb-2
              font-mono
              text-base
              tracking-[0.22em]
              text-cyan-300
              uppercase
              sm:text-lg
              md:mb-3 md:text-xl
              lg:text-2xl
            "
          >
            Welcome Friend,
          </p>

          {/* Title */}
          <h1
            className="
              text-4xl
              leading-[1.12]
              font-black
              tracking-tight
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            {profile.title}

            <span
              className="
                block
                bg-gradient-to-r
                from-cyan-300
                via-pink-400
                to-orange-300
                bg-clip-text
                text-transparent
              "
            >
              Stay Curious
            </span>
          </h1>

          {/* Tagline */}
          <p
            className="
              mt-4
              max-w-lg
              text-sm
              leading-relaxed
              text-slate-300
              sm:text-base
              md:mt-5 md:text-lg
              lg:text-xl
            "
          >
            {profile.tagline}
          </p>

          {/* Buttons */}
          <div
            className="
              mt-6
              flex flex-wrap gap-3
              sm:mt-7 sm:gap-4
            "
          >
            <a
              href="#projects"
              className="
                rounded-full
                bg-cyan-300
                px-5 py-2.5
                text-sm
                font-semibold
                text-[#080814]
                transition-transform
                hover:scale-105
                sm:px-6 sm:py-3 sm:text-base
              "
            >
              Ongoing Projects
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="
                rounded-full
                bg-cyan-300
                px-5 py-2.5
                text-sm
                font-semibold
                text-[#080814]
                transition-transform
                hover:scale-105
                sm:px-6 sm:py-3 sm:text-base
              "
            >
              GitHub ↗
            </a>

            <a
              href={profile.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="
                rounded-full
                bg-cyan-300
                px-5 py-2.5
                text-sm
                font-semibold
                text-[#080814]
                transition-transform
                hover:scale-105
                sm:px-6 sm:py-3 sm:text-base
              "
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero