"use server"
import { createClient } from '@/utils/supabase/server';



const getActivity=async()=>{
  const supabase = await createClient();
  const { data} = await supabase.from("instruments").select();
     console.log(data);
     
  return data
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