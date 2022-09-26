import React, {useState} from 'react';
import EventManager from "../../../utils/EventManager";

const Authorization:React.FC<{setPageGlobal: any, rememberAccount: any}> = ({setPageGlobal, rememberAccount}) => {
    const [inputData, setInputData] = useState({
        login: '',
        password: ''
    }),
        [rememberData, setRememberData] = useState(false),
        [show, setShow] = useState(true);

    React.useEffect(() => {
        setInputData(rememberAccount);
        if (rememberAccount.login !== '' && rememberAccount.password !== '') setRememberData(true);
    },[rememberAccount])

    const dataInput = React.useCallback((e: any, type: any) => {
        switch (type) {
            default:
                setInputData({...inputData, [type]: e.target.value.replace(/[^A-Za-z0-9_.!@#$-]/, '')})
                break;
        }
    },[inputData])

    const acceptButton = React.useCallback(() => {
        if (inputData.login === '' ||  inputData.password === '') alert("Заполните поля")
        else {
            let data = {login: inputData.login, password: inputData.login, remember: rememberData}
            EventManager.trigger('authorization', 'login', data); // eslint-disable-line
        }
    },[inputData.login, inputData.password, rememberData])

    if(!show)return null;
    return (
        <div className="authorization">
            <div className="authorization-header">
                <div className="authorization-header_logo"></div>
                <div className="authorization-header_title">Авторизация</div>
                <div className="authorization-header_text">Мы рады видеть вас, войдите в аккаунт или пройдите <a onClick={() => setPageGlobal('registration')} className="authorization-header_text_link">регистрацию.</a></div>
            </div>
            <div className="authorization-inputs">
                <div className="authorization-inputs-login">
                    <div className="authorization-inputs-login_icon"></div>
                    <input value={inputData.login} onChange={(e) => dataInput(e, 'login')}
                           type="text"
                           placeholder="Введите логин"
                           className="authorization-inputs-login_inp"/>
                </div>
                <div className="authorization-inputs-password">
                    <div className="authorization-inputs-password_icon"></div>
                    <input value={inputData.password} onChange={(e) => dataInput(e, 'password')}
                           type="password"
                           placeholder="Введите пароль"
                           className="authorization-inputs-password_inp"/>
                </div>
            </div>
            <div className="authorization-buttons">
                <div className="authorization-buttons_auth" onClick={() => acceptButton()}>Войти</div>
            </div>
            <div className='authorization-save'>
                <div className="authorization-save_checkbox" onClick={() => setRememberData(!rememberData)}>
                    <div className={!rememberData ? 'authorization-save_checkbox_on':'authorization-save_checkbox_off'}></div>

                </div>
                <span>Запомнить меня</span>
            </div>
            <div className="authorization-help">
                <div className="authorization-help-recovery">Забыли пароль? <div className="authorization-help-recovery_link" onClick={() => setPageGlobal('recovery')}>Восстановить</div></div>
                <div className="authorization-help-line"></div>
                <div className="authorization-help-info">Мы заботимся о вашей безопасности и используем для входа SocialClub. Если вы используете другой SocialClub вам будет отправлен проверочный код на Email.</div>
            </div>
        </div>
    );
};

export default Authorization;