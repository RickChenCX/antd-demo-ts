import * as actionType from "../action/types/demo"
import {Demo } from "../store"
import {ADD_NAME} from "../action/demo"

let initState = {
    name:"无"
}
export function test(state: Demo = initState , action:ADD_NAME) {
    switch (action.type) {
        case actionType.ADD_NAME:           
            return {
                name: action.text
            }
        default:
            return state
    }
}