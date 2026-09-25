import CommitBuilding from "./CommitBuilding"
import BackgroundBuildings from "./BackgroundBuildings"
import Stars from "./Stars"
import Clouds from "./Clouds"
import { gitActivity } from "../../data/GitActivity"

const buildings = [
  { height: "h-[72%]", width: "w-[10%]" },
  { height: "h-[88%]", width: "w-[12%]" },
  { height: "h-[64%]", width: "w-[9%]" },
  { height: "h-[94%]", width: "w-[13%]" },
  { height: "h-[78%]", width: "w-[11%]" },
]

function CityBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* =========================================================
          BASE SKY
          ========================================================= */}

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0d0c24_0%,#171437_24%,#292047_44%,#452950_58%,#63345a_69%,#523052_80%,#17132f_100%)]" />


      {/* =========================================================
          STARS
          ========================================================= */}

      <Stars />

      {/* =========================================================
          ATMOSPHERIC GLOW
          ========================================================= */}

      {/* Very subtle upper pink atmosphere */}
      <div className="atmosphere-drift absolute -top-32 left-1/2 h-[65%] w-[75%] -translate-x-1/2 rounded-full bg-pink-400/5 blur-3xl" />

      {/* Very subtle left-side purple atmosphere */}
      <div className="atmosphere-drift-slow absolute top-[12%] left-[10%] h-[38%] w-[40%] rounded-full bg-purple-500/5 blur-3xl" />

      {/* Localized sunset halo */}
      <div className="sunset-pulse absolute bottom-[30%] left-1/2 h-56 w-[32rem] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(255,130,105,0.24)_0%,rgba(255,100,130,0.12)_35%,rgba(255,80,140,0.04)_60%,transparent_75%)] blur-2xl" />


      {/* =========================================================
          CLOUDS
          ========================================================= */}

      <Clouds />

      {/* =========================================================
          SUN
          ========================================================= */}

      <div className="absolute bottom-[32%] left-1/2 h-36 w-36 -translate-x-1/2 rounded-full bg-gradient-to-b from-orange-100 via-orange-300 to-pink-500 shadow-[0_0_100px_35px_rgba(255,105,135,0.38)] md:h-48 md:w-48">
        {/* Retro scanlines */}
        <div className="absolute inset-0 overflow-hidden rounded-full opacity-30 [background-image:repeating-linear-gradient(to_bottom,transparent_0,transparent_7px,rgba(255,255,255,0.35)_8px,transparent_9px)]" />
      </div>

      {/* =========================================================
          CITY ATMOSPHERE
          ========================================================= */}

      {/* Subtle purple glow behind the skyline */}
      <div className="absolute inset-x-0 bottom-0 h-[38%] bg-[radial-gradient(ellipse_at_center_bottom,#65366f_0%,transparent_65%)] opacity-35" />

      {/* =========================================================
          FAR CITY
          ========================================================= */}

      <div className="city-scroll-far absolute bottom-0 left-0 flex h-[24%] w-[200%]">
        {/* City copy A */}
        <div className="h-full w-1/2 shrink-0 opacity-50 blur-[1px]">
          <div className="flex h-full items-end justify-center gap-[0.25%]">
            {Array.from({ length: 22 }).map((_, index) => (
              <div
                key={`far-a-${index}`}
                className={`bg-[#110f2a] ${
                  index % 4 === 0
                    ? "h-[60%] w-[4%]"
                    : index % 3 === 0
                      ? "h-[45%] w-[3%]"
                      : "h-[35%] w-[3.5%]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* City copy B */}
        <div className="h-full w-1/2 shrink-0 opacity-50 blur-[1px]">
          <div className="flex h-full items-end justify-center gap-[0.25%]">
            {Array.from({ length: 22 }).map((_, index) => (
              <div
                key={`far-b-${index}`}
                className={`bg-[#110f2a] ${
                  index % 4 === 0
                    ? "h-[60%] w-[4%]"
                    : index % 3 === 0
                      ? "h-[45%] w-[3%]"
                      : "h-[35%] w-[3.5%]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================
          BACKGROUND CITY
          ========================================================= */}

      <div className="city-scroll-near absolute bottom-0 left-0 flex h-full w-[200%]">
        {/* City copy A */}
        <div className="h-full w-1/2 shrink-0">
          <BackgroundBuildings />
        </div>

        {/* City copy B */}
        <div className="h-full w-1/2 shrink-0">
          <BackgroundBuildings />
        </div>
      </div>

      {/* =========================================================
          LOWER ATMOSPHERIC FADE
          ========================================================= */}

      <div className="absolute inset-x-0 bottom-0 h-[22%] bg-gradient-to-t from-[#0b0a20]/80 via-[#0b0a20]/25 to-transparent" />

      {/* =========================================================
          COMMIT ACTIVITY SKYLINE
          ========================================================= */}

      <div className="absolute inset-x-0 bottom-0 flex h-[30%] items-end justify-center gap-[1.2%]">
        {gitActivity.weeks.map((week, index) => {
          const building = buildings[index % buildings.length]

          return (
            <div
              key={week.week}
              className={`${building.height} ${building.width}`}
            >
              <CommitBuilding
                commitDays={week.commitDays}
                variant={index}
              />
            </div>
          )
        })}

      </div>

      {/* =========================================================
          GROUNDING SHADOW
          ========================================================= */}

      <div className="absolute inset-x-0 bottom-0 h-[5%] bg-gradient-to-t from-[#080719]/70 to-transparent" />
    </div>
  )
}

export default CityBackground
