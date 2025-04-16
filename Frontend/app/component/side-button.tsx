"use client"
import { Button } from "@mui/material"
import { useState } from "react"

const text = ["Sport", "Study", "Chill", "port", "tudy", "hill"]

export default function Sidebutton() {
  const [active, setActive] = useState("Sport")

  return (
    <div className="relative w-full">
      {/* left fade */}
      <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      {/* right fade */}
      <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex justify-start items-center gap-3 overflow-x-auto whitespace-nowrap scrollbar-hide px-2 py-2">
        {text.map((t) => (
          <Button
            key={t}
            onClick={() => setActive(t)}
            sx={{
              backgroundColor: active === t ? "#1976d2" : "#e0e0e0",
              color: active === t ? "#fff" : "#000",
              "&:hover": {
                backgroundColor: active === t ? "#1565c0" : "#d5d5d5"
              },
              textTransform: "none",
              borderRadius: "20px",
              px: 3,
              whiteSpace: "nowrap"
            }}
          >
            {t}
          </Button>
        ))}
      </div>
    </div>
  )
}
