
import { call, put, takeEvery } from "redux-saga/effects";
import {setActivity,setLoading,setError,addActivity} from "./dataSlice"
import { getActivity,createActivity} from "../api/index";


function* fetchActivity(action:any): Generator<any, void, any>{
  try {
    yield put(setError(false));
    yield put(setLoading(true));
     // Pass arguments to GetGraduates
     const response =yield call(getActivity,action.payload);
    yield put(setLoading(false));
    if(response.error){
      yield put(setError(true))
    }else{
      yield put(setActivity(response))
    }
  } catch (error) {
    console.error("Failed to fetch stats:", error);
  }
}
function* create(action:any): Generator<any, void, any>{
  try {
    yield put(setError(false));
    yield put(setLoading(true));
     // Pass arguments to GetGraduates
     const response =yield call(createActivity,action.payload);
    yield put(setLoading(false));
    if(response.error){
      yield put(setError(true))
    }else{
      yield put(addActivity(response))
    }
  } catch (error) {
    console.error("Failed to fetch stats:", error);
  }
}



export default function* GratuateSaga() {
  yield takeEvery("activity/fetchActivity",fetchActivity);
  yield takeEvery("activity/create",create);

}