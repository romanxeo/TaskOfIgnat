import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    onKeyPressCallback: (e:KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, onKeyPressCallback, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    let inputClass = s.correct
    if (error !== '') {
        inputClass = s.error
    }

    return (
        <div>
            <input value={name} onChange={setNameCallback} onKeyPress={onKeyPressCallback} className={inputClass}/>
            <button onClick={addUser}>add</button>
            <span className={s.count}>{totalUsers}</span>
            <div className={s.textError}>{error}</div>
        </div>
    )
}

export default Greeting
