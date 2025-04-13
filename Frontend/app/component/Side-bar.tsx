
import SimpleActivityCard from "./Card"
export default function Sidebar(){
    
  return (
      <div className="flex-col h-[550px] px-3 overflow-auto justify-center  items-center shadow-slate-400 shadow-2xl border-[1px] rounded-md  border-slate-400" >
            {[1,2,3,4].map((i)=><SimpleActivityCard  key={i}
  title="Coding Session"
  description="Let's study React together"
  time="2025-04-13T14:00:00Z"
  duration={90}
/>
)}       
        </div>
  )
}
