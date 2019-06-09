import {test} from "../reduxs/reducers/demo"
import { connect } from 'react-redux'
import App  from "../models/App"
import {addName} from "../reduxs/action/demo"
// import {Demo } from "../reduxs/store"
// import * as actionType from "../reduxs/action/types/demo"



const mapStateToProps = (state:any) => {
    return {
      name: test(state, {type: "ADD_NAME",text:state.demo.name})
    }
  }
const mapDispatchToProps = (dispatch:any) => {
    return {
        handelName: (id:any) => {
            dispatch(addName(id))
        }
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(App)
  
 