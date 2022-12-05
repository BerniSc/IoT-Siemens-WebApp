import React from 'react';
import {state} from "../state";

const DataContent = () => {
    let mode = state.darkToggle ? "light" : "dark";

    return (
        <div className=" w-full h-full dark:bg-darkbg bg-gray-50 z-10 ">

            <div className="flex flex-wrap flex-row h-full w-full content-start gap-3 px-1 pb-16 pt-3
            overflow-auto z-20 min-h-full justify-center justify-items-center ">


                <iframe src={"http://192.168.178.76:3000/d-solo/cmbc9tbnz/iotbot?orgId=1&panelId=2&theme=" + mode}
                        width="1100" height="550" frameBorder="0" className="data"/>

                <iframe src={"http://192.168.178.76:3000/d-solo/cmbc9tbnz/iotbot?orgId=1&panelId=4&theme=" + mode}
                            width="1100" height="550" frameBorder="0" className="data"/>



            </div>
        </div>

    );
}


export default DataContent;