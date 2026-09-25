type CloudVariant = "wide" | "tall" | "broken" | "low" | "asymmetric"
type CloudDetail = "none" | "light" | "full"

function Cloud({
  className = "",
  color = "bg-[#d5c8f2]/20",
  variant = "wide",
  detail = "none",
}: {
  className?: string
  color?: string
  variant?: CloudVariant
  detail?: CloudDetail
}) {
  return (
    <div className={`absolute ${className}`}>
      {/* =========================================================
          WIDE CLOUD
          ========================================================= */}

      {variant === "wide" && (
        <>
          <div
            className={`absolute bottom-0 left-[8%] h-[42%] w-[84%] rounded-full ${color} blur-[2px]`}
          />

          <div
            className={`absolute bottom-[15%] left-0 h-[48%] w-[27%] rounded-full ${color} blur-[2px]`}
          />

          <div
            className={`absolute bottom-[20%] left-[25%] h-[72%] w-[38%] rounded-full ${color} blur-[2px]`}
          />

          <div
            className={`absolute bottom-[28%] left-[55%] h-[55%] w-[25%] rounded-full ${color} blur-[2px]`}
          />

          <div
            className={`absolute bottom-[10%] right-0 h-[44%] w-[30%] rounded-full ${color} blur-[2px]`}
          />
        </>
      )}

      {/* =========================================================
          TALL CLOUD
          ========================================================= */}

      {variant === "tall" && (
        <>
          <div
            className={`absolute bottom-0 left-[12%] h-[40%] w-[76%] rounded-full ${color} blur-[2px]`}
          />

          <div
            className={`absolute bottom-[20%] left-0 h-[42%] w-[25%] rounded-full ${color} blur-[2px]`}
          />

          <div
            className={`absolute bottom-[22%] left-[30%] h-[82%] w-[34%] rounded-full ${color} blur-[2px]`}
          />

          <div
            className={`absolute bottom-[58%] left-[48%] h-[32%] w-[25%] rounded-full ${color} blur-[2px]`}
          />

          <div
            className={`absolute bottom-[12%] right-0 h-[48%] w-[29%] rounded-full ${color} blur-[2px]`}
          />
        </>
      )}

      {/* =========================================================
          BROKEN CLOUD
          ========================================================= */}

      {variant === "broken" && (
        <>
          <div
            className={`absolute bottom-[8%] left-0 h-[38%] w-[38%] rounded-full ${color} blur-[2px]`}
          />

          <div
            className={`absolute bottom-[22%] left-[12%] h-[62%] w-[30%] rounded-full ${color} blur-[2px]`}
          />

          <div
            className={`absolute bottom-[10%] left-[39%] h-[48%] w-[27%] rounded-full ${color} blur-[2px]`}
          />

          <div
            className={`absolute bottom-[40%] left-[57%] h-[28%] w-[18%] rounded-full ${color} blur-[2px]`}
          />

          <div
            className={`absolute bottom-0 right-0 h-[35%] w-[32%] rounded-full ${color} blur-[2px]`}
          />
        </>
      )}

      {/* =========================================================
          LOW CLOUD
          ========================================================= */}

      {variant === "low" && (
        <>
          <div
            className={`absolute bottom-[5%] left-0 h-[38%] w-full rounded-full ${color} blur-[2px]`}
          />

          <div
            className={`absolute bottom-[20%] left-[5%] h-[40%] w-[28%] rounded-full ${color} blur-[2px]`}
          />

          <div
            className={`absolute bottom-[25%] left-[32%] h-[45%] w-[30%] rounded-full ${color} blur-[2px]`}
          />

          <div
            className={`absolute bottom-[18%] right-[5%] h-[38%] w-[25%] rounded-full ${color} blur-[2px]`}
          />
        </>
      )}

      {/* =========================================================
          ASYMMETRIC CLOUD
          ========================================================= */}

      {variant === "asymmetric" && (
        <>
          <div
            className={`absolute bottom-0 left-[8%] h-[43%] w-[82%] rounded-full ${color} blur-[2px]`}
          />

          <div
            className={`absolute bottom-[18%] left-0 h-[34%] w-[22%] rounded-full ${color} blur-[2px]`}
          />

          <div
            className={`absolute bottom-[20%] left-[20%] h-[70%] w-[35%] rounded-full ${color} blur-[2px]`}
          />

          <div
            className={`absolute bottom-[42%] left-[51%] h-[28%] w-[19%] rounded-full ${color} blur-[2px]`}
          />

          <div
            className={`absolute bottom-[12%] right-[2%] h-[58%] w-[34%] rounded-full ${color} blur-[2px]`}
          />
        </>
      )}

      {/* =========================================================
          OPTIONAL CLOUD DETAILS
          ========================================================= */}

      {detail === "light" && (
        <>
          <div
            className={`absolute bottom-[62%] left-[4%] h-[20%] w-[12%] rounded-full ${color} blur-[2px]`}
          />

          <div
            className={`absolute bottom-[30%] right-[-2%] h-[18%] w-[14%] rounded-full ${color} blur-[2px]`}
          />
        </>
      )}

      {detail === "full" && (
        <>
          <div
            className={`absolute bottom-[62%] left-[4%] h-[24%] w-[13%] rounded-full ${color} blur-[2px]`}
          />

          <div
            className={`absolute bottom-[72%] left-[58%] h-[18%] w-[11%] rounded-full ${color} blur-[2px]`}
          />

          <div
            className={`absolute bottom-[28%] right-[-3%] h-[20%] w-[14%] rounded-full ${color} blur-[2px]`}
          />
        </>
      )}
    </div>
  )
}

function Clouds() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* =========================================================
          SUNLIGHT THROUGH CLOUDS
          ========================================================= */}

      <div className="sunset-cloud-glow absolute bottom-[28%] left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[#ff9d9d]/10 blur-3xl" />

      <div className="absolute bottom-[32%] left-1/2 h-40 w-[28rem] -translate-x-1/2 rounded-full bg-[#ffd0a3]/10 blur-2xl" />

      {/* =========================================================
          PRIMARY CLOUD LAYER
          ========================================================= */}

      <div className="cloud-drift absolute inset-x-[-25%] inset-y-0">
        {/* High cloud */}
        <Cloud
          className="left-[6%] top-[10%] h-14 w-[22rem] md:h-20 md:w-[30rem]"
          color="bg-[#c7c0ed]/17"
          variant="wide"
          detail="light"
        />

        {/* Main mid-sky cloud */}
        <Cloud
          className="left-[42%] top-[29%] h-20 w-[28rem] md:h-28 md:w-[38rem]"
          color="bg-[#efb7d3]/21"
          variant="asymmetric"
          detail="full"
        />

        {/* Lower cloud */}
        <Cloud
          className="left-[76%] top-[57%] h-16 w-[22rem] md:h-24 md:w-[30rem]"
          color="bg-[#d8b9df]/18"
          variant="broken"
          detail="light"
        />
      </div>

      {/* =========================================================
          SECONDARY / DISTANT CLOUD LAYER
          ========================================================= */}

      <div className="cloud-drift-slow absolute inset-x-[-30%] inset-y-0">
        {/* Upper-right distant cloud */}
        <Cloud
          className="left-[72%] top-[19%] h-12 w-56 md:h-18 md:w-72"
          color="bg-[#b8d5df]/13"
          variant="low"
          detail="none"
        />

        {/* Lower-left distant cloud */}
        <Cloud
          className="left-[18%] top-[68%] h-12 w-64 md:h-18 md:w-80"
          color="bg-[#d5b8d8]/13"
          variant="wide"
          detail="none"
        />
      </div>
    </div>
  )
}

export default Clouds
