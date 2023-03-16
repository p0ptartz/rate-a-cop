import React from "react"
import "./about.css"
import bitmap from "./bitmap.png"
import bitmap2 from "./bitmap2.png"


function About (){
    return (
 <div>
    <div class = "flex flex-container">
        {/* //INCOGNITO */}
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
                <img class="rounded-t-lg icon-size" src={bitmap} alt="image" />
        
            <div class="p-5">
                
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Incognito</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Your entries will always be incognito.</p>
            </div>
        </div>
        {/* //ABOUT */}
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 about-card">
            <div class="p-5">
                
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">About</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">TEXTY BOI</p>
            </div>
        </div>
        {/* //INSIGHTS */}
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
                <img class="rounded-t-lg icon-size2" src={bitmap2} alt="image" />
            <div class="p-5">
                
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Insights</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Help promote transparency.</p>
                    
            </div>
        </div>
    </div>
 </div>
    )
};


export default About;
