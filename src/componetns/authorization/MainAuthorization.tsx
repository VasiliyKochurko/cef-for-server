import React, {useState} from 'react';


import Registration from "./pages/Registration";
import Recover from "./pages/Recover";
import ShopStore from "../../store/ShopStore";
import PlayerStore from "../../store/PlayerStore";
import Authorization from "./pages/Authorization";

import './styles/AuthorizationMain.scss';
import './styles/Authorization.scss'
import './styles/Registration.scss';
import './styles/Recovery.scss'

const MainAuthorization = () => {
    const[page, setPage] = useState('authorization'),
        [rememberAccount, setRememberAccount] = useState({login: '', password: ''}),
        [show, setShow] = useState(true);

    if(!show) return null;
    return (
        <div className="auth-main">
            {page === 'authorization' && <Authorization setPageGlobal={setPage} rememberAccount={rememberAccount}/>}
            {page === 'registration' && <Registration setPageGlobal={setPage}/>}
            {page === 'recovery' && <Recover setPageGlobal={setPage}/>}
        </div>
    );
};

export default MainAuthorization;