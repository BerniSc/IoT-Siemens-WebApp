import SideBar from "./navigation/sidebar";
import TopBar from "./navigation/topbar";
import CameraContent from "./content/cameraContent";
import DataContent from "./content/dataContent";
import HomeContent from "./content/homeContent";
import StereoPiContent from "./content/stereopiContent";
import ControlContent from "./content/controlContent";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useEffect} from "react";
import {useSnapshot} from "valtio"

import {state} from "./state";


const App = () => {
    const snap = useSnapshot(state);

    const ws = new WebSocket('ws://192.168.178.12:1880/socket');

    let chg = 0;

    useEffect(() => {

        ws.onopen = () => {
            console.log('WebSocket Client Connected');
        };
        ws.onmessage = (message) => {
            //message = '{"msg_type": "update", "charge": 22.6, "lights": true}'
            let obj = JSON.parse(message)

            switch (obj.msg_type) {
                case "update":
                    snap.charge = obj.charge;
                    snap.lights = obj.lights;
                    break;
                default:
                    break;
            }

            console.log(message);
        }
    })


    return (
        <Router>
            <div className={`${snap.darkToggle ? '' : 'dark'}`}>
                <div className="flex h-screen m--  bg-white dark:bg-darkbg">
                    <div className="flex-1 flex flex-col overflow-hidden shadow">

                        <TopBar socket={ws} charge={chg}/>

                        <div className="flex h-full">
                            <SideBar/>
                            <Switch>
                                <Route path="/" exact component={HomeContent}/>
                                <Route path="/data" component={DataContent}/>
                                <Route path="/camera" component={CameraContent}/>
                                <Route path="/control">
                                    <ControlContent socket={ws}/>
                                </Route>
                                <Route path="/stereoPi" component={StereoPiContent}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
