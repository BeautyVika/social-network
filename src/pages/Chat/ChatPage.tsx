import React, {FC, useEffect, useState} from 'react';

const wsСhannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

const ChatPage = () => {
    return (
        <div>
            <Chat/>
        </div>
    );
};

export const Chat: FC = () => {
    return (
        <div style={{marginLeft: '10px'}}>
            <Messages/>
            <AddMessageForm />
        </div>
    )
}

export const Messages: FC = () => {
    const [messages, setMessages] = useState<ChatMessageType[]>([])
    useEffect(() => {
        wsСhannel.addEventListener('message', (e) => {
            let newMessage = JSON.parse(e.data)
            setMessages((prevState) => [...prevState, ...newMessage])
        })
    }, [])

    return (
        <div style={{overflow: 'auto', height: '400px'}}>
            <div>{messages.map((m, index)=> <Message key={index} message={m}/> )}</div>

        </div>
    )
}

type MessagePropsType = {
    message: ChatMessageType
}
export const Message: FC<MessagePropsType> = ({message}) => {

    return (
        <div>
            <img style={{width: '30px'}} src={message.photo}/> <b>{message.userName}</b>
            <br/>
            {message.message}

        </div>
    )
}

export const AddMessageForm: FC = () => {
    const [message, setMessage] = useState('')
    const sendMessage = () => {
        if(!message)return
        wsСhannel.send(message)
        setMessage('')
    }

    return (
        <div>
            <div>
                <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>

        </div>
    )
}

export default ChatPage;