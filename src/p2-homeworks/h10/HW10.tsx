import React from 'react'
import {useDispatch, useSelector } from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {AppRootStateType} from "../../p2-homeworks/bll/store";
import loader from "./loading/preloaderNew.svg"
import {loadingAC} from "./bll/loadingReducer";

function HW10() {

  let isLoad = useSelector<AppRootStateType, boolean>(state => state.loading.isLoad)
  const dispatch = useDispatch()

    const callback = (newIsLoad: boolean) => {
      dispatch(loadingAC(newIsLoad))
    }

    const setLoading = () => {
        callback(true)
        setTimeout(callback, 2000, false)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoad
                ? (
                    <div><img src={loader}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
