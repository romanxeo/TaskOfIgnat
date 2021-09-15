import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperDoubleRange.module.css'

// тип пропсов обычного инпута
/*
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
*/

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
/*type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
  onChangeRange?: (value: number) => void
};*/

/*const SuperRange: React.FC<SuperRangePropsType> = (
  {
    type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
    onChange, onChangeRange,
    className,

    ...restProps// все остальные пропсы попадут в объект restProps
  }
) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e) // сохраняем старую функциональность

    onChangeRange && onChangeRange(+e.currentTarget.value)
  }

  const finalRangeClassName = `${s.range} ${className ? className : ''}`

  return (
    <>
      <input
        type={'range'}
        onChange={onChangeCallback}
        className={finalRangeClassName}

        {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
      />
    </>
  )
}*/

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputType = {
  onChangeRange1?: (value: number) => void
  onChangeRange2?: (value: number) => void
  value1: number
  value2: number
}

type SuperRangePropsType = DefaultInputPropsType & InputType

const SuperDoubleRange = (props: SuperRangePropsType) => {
  const onChangeCallback1 = (e: ChangeEvent<HTMLInputElement>) => {
    /*onChange && onChange(e) // сохраняем старую функциональность*/

    props.onChangeRange1 && props.onChangeRange1(+e.currentTarget.value)
  }

  const onChangeCallback2 = (e: ChangeEvent<HTMLInputElement>) => {
    /*onChange && onChange(e) // сохраняем старую функциональность*/

    props.onChangeRange2 && props.onChangeRange2(+e.currentTarget.value)
  }


  return (
    <>
      <input
        className={s.input}
        type={'range'}
        onChange={onChangeCallback1}
        value={props.value1}
      />
      <input
        className={s.input}
        type={'range'}
        onChange={onChangeCallback2}
        value={props.value2}
      />
    </>
  )
}

export default SuperDoubleRange


/*import React from 'react'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    return (
        <>
            DoubleRange
        </>
    )
}

export default SuperDoubleRange*/
