import React, {FC} from "react"
import s from "./Contact.module.css"

type ContactsPropsType = {
    title: string
    link?: any
}

const Contact: FC<ContactsPropsType> = ({link,title}) => {
    return (
        <div className={s.title}>
            {title}:
            <a href={link} className={s.link}>{link}</a>
        </div>
    )
}

export default Contact