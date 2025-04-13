"use server"
import { createClient } from '@/utils/supabase/server';

const Instruments =async()=>{
  const supabase = await createClient();
  const { data: instruments } = await supabase.from("instruments").select();
     console.log(instruments);
     
  return instruments
}




export {Instruments}