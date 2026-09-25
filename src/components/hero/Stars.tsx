const stars = [
  // Large / noticeable stars
  {
    left: "8%",
    top: "12%",
    size: "h-1 w-1",
    color: "bg-cyan-200",
    duration: "13s",
    delay: "0s",
  },
  {
    left: "25%",
    top: "9%",
    size: "h-1 w-1",
    color: "bg-purple-200",
    duration: "16s",
    delay: "5s",
  },
  {
    left: "43%",
    top: "11%",
    size: "h-1 w-1",
    color: "bg-orange-200",
    duration: "14s",
    delay: "9s",
  },
  {
    left: "61%",
    top: "8%",
    size: "h-1 w-1",
    color: "bg-cyan-200",
    duration: "17s",
    delay: "3s",
  },
  {
    left: "79%",
    top: "10%",
    size: "h-1 w-1",
    color: "bg-pink-200",
    duration: "12s",
    delay: "12s",
  },
  {
    left: "94%",
    top: "13%",
    size: "h-1 w-1",
    color: "bg-orange-200",
    duration: "15s",
    delay: "7s",
  },

  // Small stars
  {
    left: "17%",
    top: "22%",
    size: "h-0.5 w-0.5",
    color: "bg-pink-200",
    duration: "14s",
    delay: "4s",
  },
  {
    left: "34%",
    top: "18%",
    size: "h-0.5 w-0.5",
    color: "bg-cyan-200",
    duration: "11s",
    delay: "11s",
  },
  {
    left: "52%",
    top: "23%",
    size: "h-0.5 w-0.5",
    color: "bg-pink-200",
    duration: "16s",
    delay: "6s",
  },
  {
    left: "70%",
    top: "17%",
    size: "h-0.5 w-0.5",
    color: "bg-purple-200",
    duration: "13s",
    delay: "13s",
  },
  {
    left: "88%",
    top: "24%",
    size: "h-0.5 w-0.5",
    color: "bg-cyan-200",
    duration: "17s",
    delay: "8s",
  },

  // Lower / atmospheric stars
  {
    left: "12%",
    top: "34%",
    size: "h-0.5 w-0.5",
    color: "bg-purple-200",
    duration: "15s",
    delay: "10s",
  },
  {
    left: "22%",
    top: "30%",
    size: "h-1 w-1",
    color: "bg-cyan-200",
    duration: "12s",
    delay: "2s",
  },
  {
    left: "31%",
    top: "38%",
    size: "h-0.5 w-0.5",
    color: "bg-pink-200",
    duration: "16s",
    delay: "14s",
  },
  {
    left: "67%",
    top: "34%",
    size: "h-1 w-1",
    color: "bg-cyan-200",
    duration: "14s",
    delay: "5s",
  },
  {
    left: "76%",
    top: "31%",
    size: "h-0.5 w-0.5",
    color: "bg-orange-200",
    duration: "11s",
    delay: "16s",
  },
  {
    left: "86%",
    top: "37%",
    size: "h-1 w-1",
    color: "bg-purple-200",
    duration: "17s",
    delay: "9s",
  },

  // Extra tiny stars
  {
    left: "5%",
    top: "27%",
    size: "h-0.5 w-0.5",
    color: "bg-purple-200",
    duration: "16s",
    delay: "12s",
  },
  {
    left: "40%",
    top: "29%",
    size: "h-0.5 w-0.5",
    color: "bg-cyan-200",
    duration: "13s",
    delay: "3s",
  },
  {
    left: "58%",
    top: "14%",
    size: "h-0.5 w-0.5",
    color: "bg-pink-200",
    duration: "15s",
    delay: "15s",
  },
  {
    left: "82%",
    top: "28%",
    size: "h-0.5 w-0.5",
    color: "bg-cyan-200",
    duration: "12s",
    delay: "6s",
  },
]



function Stars() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {stars.map((star, index) => (
        <div
          key={index}
          className={`twinkle absolute rounded-full ${star.size} ${star.color}`}
          style={{
            left: star.left,
            top: star.top,
            animationDuration: star.duration,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  )
}

export default Stars
