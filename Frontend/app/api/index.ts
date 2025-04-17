"use server"
import { createClient } from '@/utils/supabase/server';

const getActivity=async(location:any)=>{
  const supabase = await createClient();
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

const uploadImage = async (file: File) => {
  const supabase = await createClient();
  const filePath = `activity-${Date.now()}-${file.name}`;
  const { error } = await supabase.storage
    .from('activity-images') // Your bucket name
    .upload(filePath, file);

  if (error) {
    console.error('Upload error:', error.message);
    return null;
  }

  const { data: publicUrlData } = supabase.storage
    .from('activity-images')
    .getPublicUrl(filePath);

  return publicUrlData.publicUrl;
};


export {createActivity,getActivity,uploadImage}