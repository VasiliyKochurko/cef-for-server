import React from 'react';
import { useLocalObservable } from 'mobx-react-lite';
import EventManager from './utils/EventManager';

import Shop from './pages/Shop';
import ShopStore from './store/ShopStore';
import PlayerStore from './store/PlayerStore';
import Hud from "./componetns/hud";
import MainAuthorization from "./componetns/authorization/MainAuthorization";


const App = () => {

    return (
        <div className="cef">
            {/*<Hud/>*/}
            <MainAuthorization/>
        </div>
    );
}

export default App;
