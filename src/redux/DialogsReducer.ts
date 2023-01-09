const SEND_MESSAGE = "SEND-MESSAGE"

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
type SendMessageACType ={
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessageAC = (newMessageBody: string) : SendMessageACType => {
    return {
        type: SEND_MESSAGE,
        newMessageBody: newMessageBody
    }as const
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Vika'},
        {id: 2, name: 'Maxim'},
        {id: 3, name: 'Lucy'},
        {id: 4, name: 'Mum'},
        {id: 5, name: 'Julia'},
        {id: 6, name: 'Anastasia'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your education?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: ''}
    ] as Array<MessageType>,
}
export type DialogReducerType = typeof initialState
type ActionType = SendMessageACType

 const dialogsReducer = (state = initialState, action: ActionType) : DialogReducerType => {

     switch(action.type) {
         case 'SEND-MESSAGE':
             let body = action.newMessageBody
         return {
                 ...state,
                 messages: [...state.messages, {id: 7, message: body}]
             }
         default:
             return state
     }
}
export default dialogsReducer