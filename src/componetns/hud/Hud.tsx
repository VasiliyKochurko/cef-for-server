import React, {useState} from 'react';
import './styles/Hud.scss';
import EventManager from "../../utils/EventManager";


const Hud = () => {
    const [dataHud, setHudData] = React.useState({
        show: true,
        cash: '543 436 643',
        bank: '436 443',
        micro: false,
        wantedLevel: 4,
        online: 634,
        playerId: 32523,
        greenZone: true
        });

    const [questList,setQuest] = useState([
        {
            id: 3523,
            name: 'Доставить груз',
            terms: 'Доставьте груз к месту назначения',
            active: true
        }
        ]);

    React.useEffect( () => {
        EventManager.addHandler( 'hud', ( valueData: any ) => {
            if(valueData.type === 'show'){
                setHudData({...dataHud, show: valueData.data});
                console.log(valueData.data.show);
            }
            else if(valueData.type === 'updateValue'){
                setHudData({...dataHud,
                    cash: valueData.data.cash,
                    bank: valueData.data.bank,
                    micro: valueData.data.micro,
                    wantedLevel: valueData.data.wantedLevel,
                    online: valueData.data.online,
                    playerId: valueData.data.playerId,
                    greenZone: valueData.data.greenZone})
            }
        } );
        return () => EventManager.removeHandler( 'hud' );
    }, [] )
    React.useEffect( () => {
        EventManager.addHandler( 'hud', ( valueData: any ) => {
            if(valueData.type === 'addQuest' && questList.length < 3){
                let copy = Object.assign([], questList);
                copy.push({id:valueData.data.id, name: valueData.data.name, terms: valueData.data.terms, active: valueData.data.active});
                setQuest(copy);
            }
            else return;
        } );
        return () => EventManager.removeHandler( 'hud' );
    }, )

    if(!dataHud.show) return null;
    return (
        <div className="cef-hud">
            <div className="cef-hud-main">
                {/* HUD TOP */}
                <div className="cef-hud-main-top">
                    <div className="cef-hud-main-top-wanted">
                        {dataHud.wantedLevel <= 4 ? <div className="cef-hud-main-top-wanted_star_off"></div> : <div className="cef-hud-main-top-wanted_star"></div> }
                        {dataHud.wantedLevel  <= 3 ? <div className="cef-hud-main-top-wanted_star_off"></div> : <div className="cef-hud-main-top-wanted_star"></div> }
                        {dataHud.wantedLevel  <= 2 ? <div className="cef-hud-main-top-wanted_star_off"></div> : <div className="cef-hud-main-top-wanted_star"></div> }
                        {dataHud.wantedLevel  <= 1 ? <div className="cef-hud-main-top-wanted_star_off"></div> : <div className="cef-hud-main-top-wanted_star"></div> }
                        {dataHud.wantedLevel  <= 0 ? <div className="cef-hud-main-top-wanted_star_off"></div> : <div className="cef-hud-main-top-wanted_star"></div> }
                    </div>
                    <div className="cef-hud-main-top-vertical_line"></div>
                    <div className="cef-hud-main-top-online">
                        <div className="cef-hud-main-top-online_img"></div>
                        <div className="cef-hud-main-top-online_text">{dataHud.online}</div>
                    </div>
                    <div className="cef-hud-main-top-vertical_line"></div>
                    <div className="cef-hud-main-top-id">ID: {dataHud.playerId}</div>
                    <div className="cef-hud-main-top-vertical_line"></div>
                    <div className="cef-hud-main-top-logo"></div>
                </div>
                {/* HUD MONEY */}
                <div className="cef-hud-main-money">
                    <div className="cef-hud-main-money-cash">
                        <div className="cef-hud-main-money-cash_text">{dataHud.cash}</div>
                        <div className="cef-hud-main-money-cash_img"></div>
                    </div>
                    <div className="cef-hud-main-money-bank">
                        <div className="cef-hud-main-money-bank_text">{dataHud.bank}</div>
                        <div className="cef-hud-main-money-bank_img"></div>
                    </div>
                </div>
                {/* HUD QUEST */}
                <div className="cef-hud-main-quest">
                    {questList.map((quest) => (
                        <div className="cef-hud-main-quest-list" key={quest.id}>
                            <div className="cef-hud-main-quest-list-text">
                                <div className="cef-hud-main-quest-list-text_name">{quest.name}</div>
                                <div className="cef-hud-main-quest-list-text_terms">{quest.terms}</div>
                            </div>
                            {quest.active ? <div className="cef-hud-main-quest_img-on"></div>: <div className="cef-hud-main-quest_img"></div>}
                        </div>
                    ))}
                </div>
            </div>

            <div className="cef-hud-second">
                {dataHud.greenZone ? <div className="cef-hud-second_gzone">
                    <div className="cef-hud-second_gzone_icons"></div>
                    <div className="cef-hud-second_gzone_text">GREEN ZONE</div>
                </div> : null}
            </div>
        </div>
    );
};

export default Hud;