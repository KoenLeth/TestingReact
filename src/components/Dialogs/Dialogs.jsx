import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
    <div className={s.dialogs}>
        <div className = {s.dialogsItems}>
            <div className={s.dialog + ' ' + s.active}>
                Vlad
            </div>
        </div>
        <div className={s.messages}>
            <div className={s.message}>Приветули</div>
            <div className={s.message}>Привет</div>
            <div className={s.message}>Приветиксон</div>
        </div>
    </div>)
}

export default Dialogs;