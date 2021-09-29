import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from "../bll/store";
import {sendSuccesTC, setInputSuccessAC} from "./bll/requestReduser";

function HW13() {

  let success = useSelector<AppRootStateType, boolean>(state => state.request.success)
  let textMessage = useSelector<AppRootStateType, string>(state => state.request.textMessage)
  const dispatch = useDispatch()

  const inputClick = () => {
    dispatch(setInputSuccessAC(!success))
  }

  const sendSuccessButton = () => {
    dispatch(sendSuccesTC(success))
  }

  return (
    <div>
      <hr/>
      homeworks 13
      <div>
        <input type='checkbox' checked={success} onClick={inputClick}/>
        <button onClick={sendSuccessButton}>SEND SUCCESS</button>
        <div>{textMessage}</div>
      </div>
      <hr/>
      <hr/>
    </div>
  )
}

export default HW13