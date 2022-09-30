import React, {useState} from 'react';
import EventManager from "../../../utils/EventManager";

const Recover : React.FC<{setPageGlobal: any}> = ({setPageGlobal}) => {
    const[inputData, setInputData] = useState({
        code: ''
    })

    const dataInput = React.useCallback((e: any, type: any) => {
        switch (type) {

            default:
                setInputData({...inputData, [type]: e.target.value.replace(/[^A-Za-z0-9_.!@#$-]/, '')});
                break;
        }
    },[inputData]);
    const acceptButton = React.useCallback(() => {
        if (inputData.code === '') alert("Заполните поля")
        else {
            let data = {email: inputData.code}
            EventManager.trigger('authorization', 'recover', data); // eslint-disable-line
        }
    },[inputData.code])


    return (
        <div className="recovery">
            <div className="recovery-header">
                <div className="recovery-header_logo"></div>
                <div className="recovery-header_title">Восстановление пароля</div>
                <div className="recovery-header_text">Мы отправили код на ваш email, введите его в поле ниже или <a onClick={() => setPageGlobal('authorization')} className="recovery-header_text_link">авторизуйтесь.</a></div>
            </div>

            <div className="recovery-inputs">
                <div className="recovery-inputs-text">
                    <div className="recovery-inputs-text_icon">Код</div>
                    <input value={inputData.code} onChange={(e) => dataInput(e, 'code')}
                           type="number"
                           placeholder="Введите код"
                           className="recovery-inputs-text_inp"/>
                </div>
            </div>
            <div className="recovery-buttons">
                <div className="recovery-buttons_auth" onClick={() => acceptButton()}>Отправить</div>
            </div>
            <div className="recovery-help">
                <div className="recovery-help-recovery">Alpha Role Play ©2022</div>
                <div className="recovery-help-line"></div>
                <div className="recovery-help-info">Мы заботимся о вашей безопасности и используем для входа SocialClub. Если вы используете другой SocialClub вам будет отправлен проверочный код на Email. Alpha Role Play ©2022</div>
            </div>
        </div>
    );
};

export default Recover;