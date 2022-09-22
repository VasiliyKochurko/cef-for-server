import React from 'react';
import { useLocalObservable } from 'mobx-react-lite';
import EventManager from './utils/EventManager';

import Shop from './pages/Shop';
import ShopStore from './store/ShopStore';
import PlayerStore from './store/PlayerStore';
import Hud from "./componetns/hud";


const App = () => {

    return (
        <div className="cef">
            <Hud/>
        </div>
    );
}

export default App;
