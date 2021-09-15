import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './hw11.module.css'

function HW11() {
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(100)

  const onChangeRange = (val1: number) => {
    setValue1(val1)
  }

  const onChangeRange1 = (val1: number) => {
    if (val1 < value2) {
      setValue1(val1)
    }
    else {
      setValue1(value2-1)
    }



  }

  const onChangeRange2 = (val2: number) => {
    if (val2 > value1) {
      setValue2(val2)
    }
    else {
      setValue2(value1+1)
    }


  }

  return (
    <div>
      <hr/>
      homeworks 11

      {/*should work (должно работать)*/}
      <div>
        <div className={s.divIndex}>{value1}</div>
        <SuperRange
          onChangeRange={onChangeRange}
          value={value1}

        />
      </div>

      <div>
        <div className={s.divIndex}>{value1}</div>
        <SuperRange
          onChangeRange={onChangeRange}
          value={value1}
        />
      </div>

      <div>
        <div className={s.divIndex}>{value1}</div>
        <SuperDoubleRange
          onChangeRange1={onChangeRange1}
          onChangeRange2={onChangeRange2}
          value1={value1}
          value2={value2}
        />
        <span>{value2}</span>
      </div>

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperRange/>*/}
      {/*<AlternativeSuperDoubleRange/>*/}
      <hr/>
    </div>
  )
}

export default HW11
