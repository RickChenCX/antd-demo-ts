import {call, put, all,  take, fork} from "redux-saga/effects";
import * as actionType from "./action/types/demo"
import * as actions from "./action/demo";


// export function* getName(action:any) {
//     console.log(action);
//     const ac = yield take("ADD_NAME")
//     yield put({type: "ADD_NAME", text: action.id})
//     debugger
// }

export function* watchGetName() {
    while(true) {
        const ac = yield take("ADD_NAME")
        console.log(ac)
        yield put({type: "ADD_NAME", text: ac.id})
    }
   
}


export default function* rootSaga() {
    yield all([
        fork(watchGetName)
    ])
    
  }