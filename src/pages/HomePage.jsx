import React from 'react';
import CoursePages from '../components/CoursePages';

function HomePage() {
    const language =[
        {id:1, name: "Javascript"},
        {id:5, name: "Java"},
        {id:6, name: "Nodejs"},
        {id:4, name: "Hml"},
        {id:2, name: "Css"},
        {id:9, name: "React-native"},
    ]
  return (
    <div className="relative min-h-screen pt-10"> 
      <div className="absolute left-1/2 top-[45em] transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold">
        <CoursePages />
      </div>
      <div className="hidden min-h-screen  sm:block sm:fixed sm:left-0 sm:top-24 sm:h-screen sm:w-64 sm:bg-gray-700 sm:p-10 sm:overflow-y-auto">
        <h1 className="text-white text-2xl font-semibold">Learn</h1>
        <ul className="mt-6 space-y-4 text-white">
            {language.map((lan)=>(
                <>
             <div key={lan.id}>
             <li className="text-lg hover:bg-gray-800  hover:text-green-500 font-normal text-center cursor-pointer p-2 rounded">{lan.name}</li>
             </div>
                </>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
