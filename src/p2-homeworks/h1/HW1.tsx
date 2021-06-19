import React from 'react'
import Message from './Message'
import AlternativeMessage from './AlternativeMessage'

const messageData = {
    avatar: 'https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-image_1263411.jpg',
    name: 'Roman',
    message: 'Здесь очень интересный текст. ты такое любишь. Здесь очень интересный текст. ты такое любишь. Здесь очень интересный текст. ты такое любишь',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <AlternativeMessage
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <hr/>

            <hr/>
        </div>
    )
}

export default HW1
