import React from 'react';
import { sendMessageAC, updateNewMessageBodyAC} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {RootStateType} from "../../redux/reduxStore";

type DialogsPropsType = {
    state: RootStateType
    dispatch: (action: any) => void
}

const DialogsContainer = (props: DialogsPropsType) => {

    let state = props.state.dialogsPages

    const onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }
    const onNewMessageChange = (body: string) => {
        props.dispatch(updateNewMessageBodyAC(body))
    }
    return <Dialogs dialogs={state.dialogs}
                    messages={state.messages}
                    newMessageBody={state.newMessageBody}
                    updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}/>
}
export default DialogsContainer