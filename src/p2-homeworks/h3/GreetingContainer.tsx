import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'

type NameType = {
    _id: string
    name: string
}

type GreetingContainerPropsType = {
    users: Array<NameType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {
//function GreetingContainer(props: GreetingContainerPropsType) {
// более современный и удобный для про :)
// уровень локальной логики


const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов

    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix
    }

    const onKeyPressCallback = (e:KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addUser();
        }
    }

    const addUser = () => {
        if (name !== "") {
            addUserCallback(name)
            setError('')
            alert(`Hello, ${name}!`) // need to fix
            setName('')
        }
        else {
            setError('ERROR')
            setName('')
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            onKeyPressCallback={onKeyPressCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
