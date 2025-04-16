"use server"
import { createClient } from '@/utils/supabase/server';



const getActivity=async(location:any)=>{
  const supabase = await createClient();
  console.log(location);
  const { data, error } = await supabase
    .from("activities")
    .select("*")
    .lte("location_lat",location.nelat)
    .gte("location_lat",location.swlat)
    .lte("location_lng", location.nelng)
    .gte("location_lng",location.swlng);
    if (error) {
      console.error("Failed to get activity:", error.message);
      return error;
    }
    console.log(data);
    
    return data;
}



 const createActivity = async (activity: any) => {
  const supabase = await createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
  const { data, error } = await supabase.from("activities").insert({...activity,user_id:user?.id}).select();

  if (error) {
    console.error("Failed to insert activity:", error.message);
    return error;
  }
  return data;
};



export {createActivity,getActivity}