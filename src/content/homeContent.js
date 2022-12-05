import iotbotRender from "./home/iotbotRender.png";
import React from "react";
import doku from "../files/template_Article.pdf";

const HomeContent = () => {
    return (
        <main className="w-full  overflow-y-auto centering p-3 bg-gray-50 dark:bg-darkbg">

                <div className="shadow-md bg-white overflow-auto rounded-md dark:bg-darkcard dark:text-white
                  w-full sm:w-1/2 md:w-2/5 h-full md:w-2/3  flex flex-wrap flex-col p-3 justify-around items-center">

                    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-siemenspetrol dark:from-siemenspetrol  dark:to-siemenspetrol">
                        SPE IoTBot 2022
                    </h1>
                    <img src={iotbotRender} alt="IotBot Render" className="w-72 h-72 rounded-xl shadow-md bg-gray-50 dark:bg-darkbar"/>

                    <div className="flex flex-row flex-wrap gap-2 ">

                        <a href={doku} target="_blank" rel="noopener noreferrer"
                            className="link-button w-38">
                            Dokumentation
                        </a>

                        <a rel="noopener noreferrer" href="http://youtube.com" target="_blank" className="link-button w-28">
                            Video
                        </a>
                    </div>


                </div>

        </main>

    );
}

export default HomeContent;