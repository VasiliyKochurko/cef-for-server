import React, {useState} from 'react';
import EventManager from "../../../utils/EventManager";

const Registration:React.FC<{setPageGlobal: any}> = ({setPageGlobal}) => {
    const[inputData, setInputData] = useState({
        login:'',
        email: '',
        password: '',
        acceptPassword: ''
    }),
        [show, setShow] = useState(true);

    const dataInput = React.useCallback((e: any, type: any) => {
        switch (type) {
            case 'login':
                setInputData({...inputData, [type]: e.target.value.replace( /[^A-Za-z0-9_]/, '')});
                break;

            default:
                setInputData({...inputData, [type]: e.target.value.replace(/[^A-Za-z0-9_.!@#$-]/, '')});
                break;
        }
    },[inputData]);

    const acceptButton = React.useCallback(() => {
        if ((inputData.login === '' ||  inputData.password === '' || inputData.email === '') || inputData.password !== inputData.acceptPassword) alert("Заполните поля")
        else {
            let data = {login: inputData.login,email: inputData.email, password: inputData.login}
            EventManager.trigger('authorization', 'registration', data); // eslint-disable-line
        }
    },[inputData.login, inputData.password, inputData.email])

    if(!show)return null;

    return (
        <div className="registration">
            <div className="registration-header">
                <div className="registration-header_logo"></div>
                <div className="registration-header_title">Регистрация</div>
                <div className="registration-header_text">Мы рады видеть вас, зарегистрируйтесь или  <a onClick={() => setPageGlobal('authorization')} className="registration-header_text_link">авторизуйтесь.</a></div>
            </div>
            <div className="registration-inputs">
                <div className="registration-inputs-login">
                    <div className="registration-inputs-login_icon"></div>
                    <input value={inputData.login} onChange={(e) => dataInput(e, 'login')}
                           type="text"
                           placeholder="Введите логин"
                           className="registration-inputs-login_inp"/>
                </div>
                <div className="registration-inputs-email">
                    <div className="registration-inputs-email_icon"></div>
                    <input value={inputData.email} onChange={(e) => dataInput(e, 'email')}
                           type="email"
                           placeholder="Введите почту"
                           className="registration-inputs-email_inp"/>
                </div>
                <div className="registration-inputs-password">
                    <div className="registration-inputs-password_icon"></div>
                    <input value={inputData.password} onChange={(e) => dataInput(e, 'password')}
                           type="password"
                           placeholder="Введите пароль"
                           className="registration-inputs-password_inp"/>
                </div>
                <div className="registration-inputs-accept-password">
                    <div className="registration-inputs-accept-password_icon"></div>
                    <input value={inputData.acceptPassword} onChange={(e) => dataInput(e, 'acceptPassword')}
                           type="password"
                           placeholder="Повторите пароль"
                           className="registration-inputs-accept-password_inp"/>
                </div>
            </div>
            <div className="registration-buttons">
                <div className="registration-buttons_auth" onClick={() => acceptButton()}>Регистрация</div>
            </div>
            <div className="registration-help">
                <div className="registration-help-recovery">Забыли пароль? <div className="registration-help-recovery_link" onClick={() => setPageGlobal('recovery')}>Восстановить</div></div>
                <div className="registration-help-line"></div>
                <div className="registration-help-info">Мы заботимся о вашей безопасности и используем для входа SocialClub. Если вы используете другой SocialClub вам будет отправлен проверочный код на Email. Alpha Role Play ©2022</div>
            </div>
        </div>
    );
};

export default Registration;