import {
    ImArrowDown2,
    ImArrowDownLeft2,
    ImArrowDownRight2,
    ImArrowLeft2,
    ImArrowRight2,
    ImArrowUp2,
    ImArrowUpLeft2,
    ImArrowUpRight2,
} from "react-icons/im";

import {BsLightbulb, BsLightbulbOff} from "react-icons/bs";
import {IoReturnUpBack, IoReturnUpForward} from "react-icons/io5"
import {Button, WideButton} from "./controller/buttons";
import {Component} from "react";
import {ThrottleSlider} from "./controller/slider"
import {state} from "../state";

class ControlContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            socket: props.socket,
            throttle: 0.0,
            x: 0,
            y: 0,
            z: 0,
            interval: null
        }
        this.update = this.update.bind(this);
        this.updateRot = this.updateRot.bind(this);
        this.updateThrottle = this.updateThrottle.bind(this);
        this.sendToSocket = this.sendToSocket.bind(this);
    }

    componentDidMount() {
        const newState = {
            socket: this.state.socket,
            throttle: this.state.throttle,
            direction: this.state.direction,
            interval: setInterval(this.sendToSocket, 200)
        }
        this.setState(newState);
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    update(x, y) {
        const newState = {
            socket: this.state.socket,
            throttle: this.state.throttle,
            x: x,
            y: y,
            z: this.state.z,
            interval: this.state.interval
        }
        this.setState(newState)
    }

    updateRot(z) {
        const newState = {
            socket: this.state.socket,
            throttle: this.state.throttle,
            x: this.state.x,
            y: this.state.y,
            z: z,
            interval: this.state.interval
        }
        this.setState(newState)
    }

    updateThrottle(newValue) {
        const newState = {
            socket: this.state.socket,
            throttle: newValue,
            x: this.state.x,
            y: this.state.y,
            z: this.state.z,
            interval: this.state.interval
        }
        this.setState(newState);
    }

    sendToSocket() {
        const socketMessage = {
            msg_type: "control",
            x: this.state.x * this.state.throttle * 0.01,
            y: this.state.y * this.state.throttle * 0.01,
            z: this.state.z * this.state.throttle * 0.01,
        }

        if (this.state.socket) {
            this.state.socket.send(JSON.stringify(socketMessage));
        }

    }

    render() {

        return (
            <main className=" w-full bg-transparent overflow-x-hidden overflow-y-auto p-3 z-0">
                <div className="flex flex-wrap flex-row min-h-full h-full p-3 justify-center items-center z-10">
                    <div className="w-72 h-120 bg-gray-100 dark:bg-darkcard shadow-md rounded-md items-stretch justify-center grid gap-3 p-2
                 grid-cols-6 z-20">
                        <Button class="z-10" icon={ImArrowUpLeft2} update={this.update} x={0.707106781186548} y={0.707106781186548}/>
                        <Button icon={ImArrowUp2} update={this.update} x={1} y={0}/>
                        <Button icon={ImArrowUpRight2} update={this.update} x={0.707106781186548} y={-0.707106781186548}/>

                        <Button icon={ImArrowLeft2} update={this.update} x={0} y={1}/>
                        <Button icon={state.lights ? BsLightbulbOff : BsLightbulb } update={this.update} x={0} y={0}/>
                        <Button icon={ImArrowRight2} update={this.update} x={0} y={-1}/>

                        <Button icon={ImArrowDownLeft2} update={this.update} x={-0.707106781186548} y={0.707106781186548}/>
                        <Button icon={ImArrowDown2} update={this.update} x={-1} y={0}/>
                        <Button icon={ImArrowDownRight2} update={this.update} x={-0.707106781186548} y={-0.707106781186548}/>

                        <WideButton icon={IoReturnUpBack} updateRot={this.updateRot} z={10}/>
                        <WideButton icon={IoReturnUpForward} updateRot={this.updateRot} z={-10}/>

                        <div className={"col-span-6  centering"}>
                            <ThrottleSlider update={this.updateThrottle} current={this.state.throttle}/>
                        </div>

                    </div>
                </div>
            </main>

        );
    }
}

export default ControlContent;