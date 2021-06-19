import React from 'react'
import s from './Message.module.css'

type typeProps = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: typeProps) {
    return (
        <div className={s.received}>
            <img className={s.avatar} src={props.avatar}/>
            <div className={s.message}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>

        </div>
    )
}

export default Message
