import Iframe from 'react-iframe'

const StereoPiContent =()=>{
    return (
        <main className=" w-full h-full dark:bg-darkbg bg-gray-50 overflow-x-hidden overflow-y-auto p-3 centering">
            <Iframe url="http://192.168.178.125"
                    width="900px"
                    height="538px"
                    id="myId"
                    allowFullScreen
                    className="myClassname bg-transparent"
                    display="initial"
                    position="relative"/>
        </main>

    );
}

export default StereoPiContent;