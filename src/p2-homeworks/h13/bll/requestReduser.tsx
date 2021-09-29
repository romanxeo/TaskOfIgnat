import {Dispatch} from "redux";
import {requestsAPI} from "../api/RequestsAPI";

export const setInputSuccessAC = (inputSuccess: boolean) => {
  //debugger
  return {
    type: "SET-INPUT-SUCCESS",
    inputSuccess
  } as const
}

export const setTextMessageAC = (textMessage: string) => {
  return {
    type: "SET-TEXT-MESSAGE",
    textMessage
  } as const
}

export type setInputSuccessAT = ReturnType<typeof setInputSuccessAC>
export type setTextMessageAT = ReturnType<typeof setTextMessageAC>

export type actionType =
  setInputSuccessAT
  | setTextMessageAT

const initState = {
  success: false,
  textMessage: 'null'
};


type InitStateType = typeof initState

export const requestReducer = (state: InitStateType = initState, action: any): InitStateType => {
  //debugger
  switch (action.type) {
    case "SET-INPUT-SUCCESS": {
      //debugger
      let copyState = {...state};
      copyState.success = action.inputSuccess
      return copyState;
    }
    case "SET-TEXT-MESSAGE": {
      let copyState = {...state};
      copyState.textMessage = action.textMessage
      return copyState;
    }
    default:
      return state;
  }
};

export const sendSuccesTC = (success: boolean) => {
  //debugger
  return (dispatch: Dispatch<any>) => {
    //debugger
    requestsAPI.sendSuccess(success)
      .then(res => {
        //debugger
        dispatch(setTextMessageAC(res.data.errorText))
        console.log(res.data.errorText)
      })
      .catch(error => {
        //console.log( {...error} );
        //console.log( error.response ? error.response.data.errorText : error.message );
        error.response ?
          dispatch(setTextMessageAC(error.response.data.errorText))
          :
          dispatch(setTextMessageAC(error.message))
      })
  }
}