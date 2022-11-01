import React from 'react';
import {DialogReducerType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";

export type DialogsPagePropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    dialogsPage: DialogReducerType
}
type MapDispatchPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPages
    }
}
let mapDispatchToProps = (dispatch: Dispatch) : MapDispatchPropsType => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer