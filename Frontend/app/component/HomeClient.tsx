"use client"

import PollutionMap from "./Map";
import Sidebar from "./Side-bar";
export default function HomeClient() {
  return (
    <div className="grid grid-cols-12 gap-5 h-20">
    <div className="col-span-3">
         <Sidebar />
    </div>
    <div className="col-span-9 flex justify-start  items-center shadow-slate-400 shadow-2xl border-[1px] rounded-md  border-slate-400" >
        
         <PollutionMap />
         
    </div>
</div>
  );
}
