"use client"
import SimpleActivityCard from "./Card"
import Search from "./side-Search"
import Sidebutton from "./side-button"
import {useSelector } from "react-redux";
import { RootState, AppDispatch } from "../Redux/store";
export default function Sidebar(){
     const {activity,loading,error} = useSelector((state: RootState) => state.activity);
  return (

      <div className="flex-col px-3 justify-center  items-center shadow-slate-400 shadow-2xl border-[1px] rounded-md  border-slate-400" >  
           <Search  />
           <Sidebutton/>
           <hr className="text-slate-400 w-full" />
           <div className="flex-col h-[500px] overflow-y-auto justify-center  items-center">
             {activity?.map((i)=><SimpleActivityCard  key={i.id}
  title={i.title}
  description={i.description}
  time={i.time}
  duration={i.duration}
/>
)}       
        {/* </div> */}
        </div>
        </div>
  )
}
