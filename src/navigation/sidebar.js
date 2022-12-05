import {IoGameController, IoHome, IoStatsChart, IoVideocam, IoApertureOutline} from 'react-icons/io5';
import React from "react"
import {Link} from "react-router-dom"
import {useSnapshot} from "valtio"
import {state} from "../state.js";


export default function Home() {

    const snap = useSnapshot(state);

    if (snap.sbExtended === true) {

        return (
            <div className="transform w-0 transition-all duration-300 ease-linear">
                <nav className="sidebar w-0">
                    <div className="w-full flex mx-auto flex-col hover:w-32 transition-all transition -translate-x-12">
                    </div>
                </nav>
            </div>)
    } else {
        return (
            <div className=" transition-all duration-300 ease-linear">
                <nav className="sidebar">
                    <div className="w-full flex mx-auto flex-col hover:w-32 transition-all ">

                        <Link to="/" className="btn btn-primary">
                            <SideBarIcon icon={<IoHome size="28"/>} text={'Home'}/>
                        </Link>

                        <Divider/>

                        <Link to="/data" className="btn btn-primary">
                            <SideBarIcon icon={<IoStatsChart size="28"/>} text={'Sensordaten'} />
                        </Link>

                        <Divider/>

                        <Link to="/control" className="btn btn-primary">
                            <SideBarIcon icon={<IoGameController size="28"/>} text={'Manuelle Steuerung'}/>
                        </Link>

                        <Divider/>

                        <Link to="/camera" className="btn btn-primary" >
                            <SideBarIcon icon={<IoVideocam size="28"/>} text={'Kamerastream'}/>
                        </Link>

                        <Divider/>

                        <Link to="/stereoPi" className="btn btn-primary" >
                            <SideBarIcon icon={<IoApertureOutline size="28"/>} text={'StereoPi Config'}/>
                        </Link>

                    </div>
                </nav>
            </div>)
    }
}

function SideBarIcon(props) {
    return (
        <div className="sidebar-icon group z-50">
            {props.icon}
            <span className="sidebar-tooltip group-hover:scale-100 z-50">
      {props.text}
    </span>
        </div>)
}

const
    Divider = () => <hr className="sidebar-hr"/>;
