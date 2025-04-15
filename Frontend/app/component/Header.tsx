
import {
  AppBar,
  Typography,
} from "@mui/material";
import Search from "./Search";
import AuthButton from "../../components/header-auth";
export default function Nav() {
   
  return (
  
     <div className="grid grid-cols-12 gap-5 h-20">
         <div className="col-span-3 flex justify-end items-center ">
            <Typography variant="h6" sx={{ fontWeight: "bold" ,width:200 }}>
                    MEET-UP
            </Typography>
         </div>
         <div className="col-span-9 flex justify-start gap-10  items-center" >
             <Search />
             <AuthButton />
         </div>
     </div>
   
  )
}
 