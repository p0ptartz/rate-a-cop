import React from "react"
import "./about.css"
import bitmap from "./bitmap.png"
import bitmap2 from "./bitmap2.png"


function About (){
    return (
 <div>
    <div className = "flex flex-container">
        {/* //INCOGNITO */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
                <img className="rounded-t-lg icon-size" src={bitmap} alt="image" />
        
            <div className="p-5">
                
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Incognito</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Your entries will always be incognito.</p>
            </div>
        </div>
        {/* //ABOUT */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 about-card">
            <div className="p-5">
                
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">About</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">TEXTY BOI</p>
            </div>
        </div>
        {/* //INSIGHTS */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
                <img className="rounded-t-lg icon-size2" src={bitmap2} alt="image" />
            <div className="p-5">
                
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Insights</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Help promote transparency.</p>
                    
            </div>
        </div>
    </div>
 </div>
    )
};


export default About;
