const backgroundBuildings = [
  { height: "h-[42%]", width: "w-[6%]", type: "flat" },
  { height: "h-[58%]", width: "w-[7%]", type: "antenna" },
  { height: "h-[35%]", width: "w-[5%]", type: "flat" },
  { height: "h-[68%]", width: "w-[8%]", type: "crown" },
  { height: "h-[48%]", width: "w-[6%]", type: "antenna" },
  { height: "h-[62%]", width: "w-[7%]", type: "flat" },
  { height: "h-[38%]", width: "w-[5%]", type: "crown" },
  { height: "h-[55%]", width: "w-[8%]", type: "antenna" },
  { height: "h-[44%]", width: "w-[6%]", type: "flat" },
  { height: "h-[72%]", width: "w-[7%]", type: "antenna" },
  { height: "h-[50%]", width: "w-[6%]", type: "crown" },
  { height: "h-[64%]", width: "w-[8%]", type: "flat" },
]

const buildingColors = [
  "bg-[#17142f]",
  "bg-[#1c1737]",
  "bg-[#211a40]",
  "bg-[#14122f]",
]

const windowColors = [
  "bg-cyan-300/40",
  "bg-pink-300/40",
  "bg-orange-300/40",
  "bg-purple-300/40",
]

function BackgroundBuildings() {
  return (
    <div className="absolute inset-x-0 bottom-0 flex h-[30%] items-end justify-center gap-[0.5%]">
      {backgroundBuildings.map((building, index) => {
        const buildingColor = buildingColors[index % buildingColors.length]

        return (
          <div
            key={index}
            className={`relative ${building.height} ${building.width} ${buildingColor}`}
          >
            {/* Rooftop architecture */}
            {building.type === "antenna" && (
              <div className="absolute -top-5 left-1/2 flex -translate-x-1/2 flex-col items-center">
                <div className="h-4 w-px bg-purple-300/20" />
                <div className="h-1 w-1 rounded-full bg-pink-300/30" />
              </div>
            )}

            {building.type === "crown" && (
              <div className="absolute -top-2 left-1/2 h-2 w-[65%] -translate-x-1/2 border-t border-x border-purple-300/20" />
            )}

            {/* Windows */}
            <div className="grid h-full grid-cols-2 gap-x-2 gap-y-3 p-2 opacity-40">
            {Array.from({ length: 12 }).map((_, windowIndex) => {
                const isWindowVisible =
                (windowIndex * 5 + index * 3) % 4 !== 0

                const color =
                windowColors[(index + windowIndex) % windowColors.length]

                return (
                <div
                    key={windowIndex}
                    className={`h-1 rounded-[1px] ${
                    isWindowVisible ? color : "bg-transparent"
                    }`}
                />
                )
            })}
            </div>

          </div>
        )
      })}
    </div>
  )
}

export default BackgroundBuildings
