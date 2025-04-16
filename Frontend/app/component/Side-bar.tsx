
import SimpleActivityCard from "./Card"
import Search from "./side-Search"
import Sidebutton from "./side-button"
export default function Sidebar(){
    
  return (

      <div className="flex-col px-3 justify-center  items-center shadow-slate-400 shadow-2xl border-[1px] rounded-md  border-slate-400" >  
           <Search  />
           <Sidebutton/>
           <hr className="text-slate-400 w-full" />
           {/* <div   className="relative w-full">
            {/* left fade */}
      {/* <div className="absolute  top-0 w-full h-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" /> */}
      {/* right fade */}
      {/* <div className="absolute bottom-0 w-full h-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />  */}
      
           <div className="flex-col h-[500px] overflow-y-auto justify-center  items-center">
             {[1,2,3,4].map((i)=><SimpleActivityCard  key={i}
  title="Coding Session"
  description="Let's study React together"
  time="2025-04-13T14:00:00Z"
  duration={90}
/>
)}       
        {/* </div> */}
        </div>
        </div>
  )
}
