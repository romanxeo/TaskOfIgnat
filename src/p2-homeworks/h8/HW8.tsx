import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './hw8.module.css'

export type StudentsType = {
    _id: number
    name: string
    age: number
}

export type UserType = Array<StudentsType>

const initialPeople: UserType = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<any>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: any) => (
        <div key={p._id}>
            <span className={s.spanName}>{p.name}</span><span>{p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sortUp'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sortDown'}))
    const sortCheck = () => setPeople(homeWorkReducer(initialPeople, {type: 'check'}))


    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            {finalPeople}

            <div><SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={sortCheck}>check 18</SuperButton>

            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
