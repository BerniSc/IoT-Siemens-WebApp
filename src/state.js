import {proxy} from "valtio";

const state = proxy({
    sbExtended: false,
    darkToggle: true,
    velocity: 0,
    charge: 23,
    lights: false,
});

export {state};
