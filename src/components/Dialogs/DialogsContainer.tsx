import React from 'react';
import {DialogReducerType, sendMessageAC} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

export type DialogsPagePropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    dialogsPage: DialogReducerType
}
type MapDispatchPropsType = {
    sendMessage: (newMessageBody: string) => void
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPages,
    }
}
let mapDispatchToProps = (dispatch: Dispatch) : MapDispatchPropsType => {
    return {
        sendMessage: (newMessageBody ) => {
            dispatch(sendMessageAC(newMessageBody))
        }
    }
}
export default compose <React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

