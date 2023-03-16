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
                
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 icon-text">Participate Anonymously</p>
            </div>
        </div>
       
        {/* //INSIGHTS */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
                <img className="rounded-t-lg icon-size2" src={bitmap2} alt="image" />
            <div className="p-5">
                
                    
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 icon-text">Contribute Valuable Insight</p>
                    
            </div>
        </div>
    </div>
         {/* //ABOUT */}
         <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 about-card">
            <div className="p-5">
                
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white about-header">About</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 about-text">Welcome to Rate A Cop, a platform designed to provide the public with the ability to anonymously rate police officers. Similar to other rating websites such as Rate My Professor or Amazon, our goal is to allow people to share their experiences and opinions of law enforcement officers in an open and honest way.

We believe that the public has the right to voice their opinions about the performance of police officers, and that this information should be available to everyone. By providing a space for anonymous reviews, we hope to create a community-driven resource that can help hold law enforcement accountable and encourage positive changes in policing.

Our mission is to promote transparency and accountability within law enforcement, while also fostering a healthy and constructive dialogue between the public and law enforcement officers. We encourage everyone to participate by sharing their experiences and opinions, and to use this platform as a tool to help make their communities safer and more just.

Thank you for using Rate A Cop, and we hope that this website will be a valuable resource for you and your community.</p>
            </div>
        </div>
    
 </div>
    )
};


export default About;
