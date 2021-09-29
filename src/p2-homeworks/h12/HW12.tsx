import React from "react";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../bll/store";
import {setThemeAC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {

  const theme = useSelector<AppRootStateType, string>(state => state.theme.theme)
  const dispatch = useDispatch()

  const onChangeOption = (val: string) => {
    dispatch(setThemeAC(val))
  }

  return (
    <div className={s[theme]}>
      <hr/>
      <div className={s[theme + '-text']}>
        homeworks 12
      </div>
      <SuperRadio name={'radio'}
                  options={themes}
                  value={theme}
                  onChangeOption={onChangeOption}
      />
      <hr/>
    </div>
  );
}

export default HW12;
