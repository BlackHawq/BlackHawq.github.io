type CommitBuildingProps = {
  commitDays: number
  variant?: number
}

const windowColors = [
  "bg-cyan-200",
  "bg-cyan-300",
  "bg-pink-300",
  "bg-orange-200",
  "bg-purple-300",
]

const buildingStyles = [
  {
    body: "bg-[#15142b]",
    border: "border-purple-300/20",
  },
  {
    body: "bg-[#18152d]",
    border: "border-pink-300/15",
  },
  {
    body: "bg-[#14182d]",
    border: "border-cyan-300/15",
  },
  {
    body: "bg-[#1b162b]",
    border: "border-orange-300/15",
  },
  {
    body: "bg-[#16152a]",
    border: "border-indigo-300/20",
  },
]

function CommitBuilding({
  commitDays,
  variant = 0,
}: CommitBuildingProps) {
  const style =
    buildingStyles[variant % buildingStyles.length]

  /*
   * Every building has the same basic window architecture:
   *
   *     □ □ □ □ □
   *     □ □ □ □ □
   *     □ □ □ □ □
   *     □ □ □ □ □
   *     □ □ □ □ □
   *
   * Five windows per floor = Monday through Friday.
   *
   * The building itself can vary in height and rooftop shape,
   * but the commit visualization remains consistent.
   */

  const floors = Math.max(
    4,
    Math.min(8, 4 + Math.floor(commitDays / 2)),
  )

  const litDays = Math.max(
    0,
    Math.min(5, commitDays),
  )

  return (
    <div
      className={`
        relative
        h-full
        w-full
        overflow-visible
        border-x
        ${style.body}
        ${style.border}
      `}
    >
      {/* =========================================================
          ROOFTOP
          ========================================================= */}

      {variant % 5 === 0 && (
        <>
          <div className="absolute -top-1 left-0 right-0 h-1 bg-purple-300/10" />

          <div className="absolute -top-4 left-[38%] h-3 w-[24%] bg-[#211d3b]" />

          <div className="absolute -top-7 left-1/2 h-3 w-px -translate-x-1/2 bg-cyan-200/20" />
        </>
      )}

      {variant % 5 === 1 && (
        <>
          <div className="absolute -top-2 left-[8%] h-2 w-[62%] bg-[#211d3a]" />

          <div className="absolute -top-5 left-[25%] h-3 w-[30%] bg-[#262044]" />

          <div className="absolute -top-8 left-[40%] h-3 w-px bg-pink-300/20" />
        </>
      )}

      {variant % 5 === 2 && (
        <>
          <div className="absolute -top-2 left-[18%] right-[18%] h-2 bg-[#211c3b]" />

          <div className="absolute -top-7 left-1/2 h-5 w-px -translate-x-1/2 bg-cyan-300/20" />

          <div className="absolute -top-8 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan-300/45" />
        </>
      )}

      {variant % 5 === 3 && (
        <>
          <div className="absolute -top-2 left-[5%] right-[5%] h-2 bg-[#251b3c]" />

          <div className="absolute -top-2 left-[12%] right-[12%] h-px bg-pink-300/25" />

          <div className="absolute -top-6 right-[25%] h-4 w-px bg-purple-300/20" />
        </>
      )}

      {variant % 5 === 4 && (
        <>
          <div className="absolute -top-2 left-[10%] h-2 w-[80%] bg-[#211c39]" />

          <div className="absolute -top-5 left-[25%] h-3 w-[50%] bg-[#282044]" />

          <div className="absolute -top-7 left-[38%] h-2 w-[24%] bg-[#2e2450]" />
        </>
      )}

      {/* =========================================================
          SUBTLE FACADE EDGES
          ========================================================= */}

      <div className="absolute inset-y-0 left-[7%] w-px bg-white/[0.035]" />

      <div className="absolute inset-y-0 right-[7%] w-px bg-black/20" />

      {/* =========================================================
          UNIFORM WINDOW GRID
          ========================================================= */}

      <div
        className="
          absolute
          inset-x-[11%]
          top-[9%]
          bottom-[8%]
          flex
          flex-col
          justify-between
        "
      >
        {Array.from({ length: floors }).map(
          (_, floorIndex) => (
            <div
              key={floorIndex}
              className="grid grid-cols-5 gap-[10%]"
            >
              {Array.from({ length: 5 }).map(
                (_, windowIndex) => {
                  const isLit =
                    windowIndex < litDays

                  const color =
                    windowColors[
                      windowIndex
                    ]

                  return (
                    <div
                      key={windowIndex}
                      className={`
                        h-2
                        min-w-0
                        rounded-[1px]
                        border
                        transition-colors
                        ${
                          isLit
                            ? `${color} border-white/20`
                            : "border-white/[0.04] bg-[#080818]/80"
                        }
                      `}
                    >
                      {isLit && (
                        <div className="h-full w-full bg-white/10" />
                      )}
                    </div>
                  )
                },
              )}
            </div>
          ),
        )}
      </div>

      {/* =========================================================
          SUBTLE FLOOR SEPARATORS
          ========================================================= */}

      <div className="absolute left-[7%] right-[7%] top-[20%] h-px bg-black/10" />

      <div className="absolute left-[7%] right-[7%] top-[40%] h-px bg-black/10" />

      <div className="absolute left-[7%] right-[7%] top-[60%] h-px bg-black/10" />

      <div className="absolute left-[7%] right-[7%] top-[80%] h-px bg-black/10" />

      {/* =========================================================
          SUBTLE VERTICAL ARCHITECTURAL DETAIL
          ========================================================= */}

      {variant % 3 === 1 && (
        <div className="absolute inset-y-[12%] left-[24%] w-px bg-cyan-300/[0.05]" />
      )}

      {variant % 3 === 2 && (
        <div className="absolute inset-y-[12%] right-[24%] w-px bg-purple-300/[0.05]" />
      )}

      {/* =========================================================
          ROOFTOP LIGHT
          ========================================================= */}

      {variant % 3 !== 1 && (
        <div
          className={`
            absolute
            -top-2
            ${
              variant % 2 === 0
                ? "left-[28%]"
                : "right-[25%]"
            }
            h-1
            w-1
            rounded-full
            ${
              variant % 2 === 0
                ? "bg-pink-300/45"
                : "bg-cyan-300/45"
            }
          `}
        />
      )}
    </div>
  )
}

export default CommitBuilding
