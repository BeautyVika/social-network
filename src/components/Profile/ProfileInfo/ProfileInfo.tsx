import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://naked-science.ru/wp-content/uploads/2020/03/1024px-Grand_Anse_Beach_Grenada.jpg'/>
            </div>

            <div className={s.descriptionBlock}>
                ava + descriptions
            </div>
        </div>
    )
}
export default ProfileInfo