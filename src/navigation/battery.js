import React from "react";
import {state} from "../state";

const GetBatteryPercentage = () => {
    //Rechnet die Akkuspannung (Max ~24V, Min ~19,2V) in % um
    let percentage = Math.round((state.charge - 19.2)*(20.8333333333))
    percentage = percentage > 100 ? 100 : percentage;
    return percentage < 0 ? 0 : percentage;
}


const Battery = () => {
    return(
        <div className="flex-row flex w-16 h-8 justify-center items-center mr-3">
            <div className="w-14 h-8 text-center rounded-lg bg-siemensgreen shadow-sm">
                <div className="text-center rounded bg-gray-100 dark:bg-darkcard dark:text-white m-1 pl-1 pr-1">
                    <GetBatteryPercentage/>%
                </div>
            </div>

            <div className="w-1 h-4 bg-siemensgreen rounded-r-sm shadow-sm">
            </div>
        </div>
    )
}

export default Battery;