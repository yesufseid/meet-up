
import { createSlice} from "@reduxjs/toolkit";

type activityProps={
  id:string
  title:string
  description:string
  phone:string,
  link:string,
  time:string,
  duration:string,
  location_lat:number,
  location_lng:number
  images:[] ,
  category:string

}
interface PlayerState {
  useractivity:activityProps[];
  activity:activityProps[];
  loading: boolean;
  error: boolean;
}

const initialState: PlayerState = {
  activity: [],
  useractivity:[],
  loading: false,
  error: false,
};
const  dataSlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    setActivity: (state, action) => {
      state.activity= action.payload;
    },
    addActivity: (state, action) => {
      state.activity.push(action.payload)
    },
    setuserActivity: (state, action) => {
      state.useractivity= action.payload;
    },
    adduserActivity: (state, action) => {
      state.useractivity.push(action.payload)
    },
  
    setLoading: (state, action) => {
      state.loading= state.loading=action.payload
    },
    setError: (state, action) => {
      state.error= state.error=action.payload
    },
  },
});

export const { addActivity,setActivity,setError,setLoading,adduserActivity,setuserActivity} =dataSlice.actions;
export default dataSlice.reducer;
