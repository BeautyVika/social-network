import React from "react"
import s from "./Preloader.module.css"
import CircularProgress from "@mui/material/CircularProgress"

const Preloader = () => {
    return (
        <div className={s.preloader}>
            <CircularProgress color='secondary'
                              size='56px'/>
        </div>
    )
}
export default Preloader