import * as actionType from "./types/demo"

export interface ADD_NAME {
    type: actionType.ADD_NAME
    text:string
}

export function addName(id: string): ADD_NAME {
    console.log("action",id)
    return {
        type: actionType.ADD_NAME,
        text: id
    }
}