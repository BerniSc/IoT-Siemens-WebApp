import Slider from 'react-input-slider';

export const ThrottleSlider = (props) => {
    return (
        <div className="text-center">
            <p className="w-full dark:text-white">Geschwindigkeit: {props.current}%</p>
            <Slider axis="x" x={props.current} onChange={change => props.update(change.x)}
                    className="bg-gradient-to-b from-darkbg to-darkbar"
                    styles={{
                        track: {backgroundColor: ''},
                        active: {backgroundColor: '#00d7a0'},
                        thumb: {backgroundColor: '#f3f3f0'}}}
            />
        </div>
    );
}