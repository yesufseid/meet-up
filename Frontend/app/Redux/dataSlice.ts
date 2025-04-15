
import { createSlice} from "@reduxjs/toolkit";

type activityProps={
  id:string
  title:string
  description:string
  phone:string,
  link:string,
  startTime:string,
  duration:string,
  expireTime:string,
  images:[] 

}
interface PlayerState {
  activiy:activityProps[];
  loading: boolean;
  error: boolean;
}

const initialState: PlayerState = {
  activiy: [],
  loading: false,
  error: false,
};
const  dataSlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    setActivity: (state, action) => {
      state.activiy= action.payload;
    },
    addActivity: (state, action) => {
      state.activiy.push(action.payload)
    },
  
    setLoading: (state, action) => {
      state.loading= state.loading=action.payload
    },
    setError: (state, action) => {
      state.error= state.error=action.payload
    },
  },
});

export const { addActivity,setActivity,setError,setLoading,} =dataSlice.actions;
export default dataSlice.reducer;
