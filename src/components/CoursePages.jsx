import React from 'react';

function CoursePages() {
  const Cours = [
    { id: 1, level: 1, programming_language: "Python", languageCategory: "English", url: "https://www.youtube.com/embed/jJvJKdDPvs8?si=oe4XW5Ijz2zCZS23" },
    { id: 2, level: 1, programming_language: "JavaScript", languageCategory: "English", url: "url" },
    { id: 3, level: 2, programming_language: "Java", languageCategory: "English", url: "https://www.youtube.com/embed/jJvJKdDPvs8?si=oe4XW5Ijz2zCZS23" },
    { id: 4, level: 3, programming_language: "C++", languageCategory: "English", url: "url" },
    { id: 5, level: 1, programming_language: "Ruby", languageCategory: "English", url: "url" },
    { id: 6, level: 2, programming_language: "React", languageCategory: "English", url: "url" },
    { id: 7, level: 3, programming_language: "Node.js", languageCategory: "English", url: "url" },
    { id: 8, level: 1, programming_language: "PHP", languageCategory: "English", url: "url" },
  ];

  // Helper function to check if a URL is a valid YouTube embed link
  const isValidYouTubeUrl = (url) => {
    return url && url.includes("youtube.com/embed");
  };

  return (
    <div className="mt-20 pt-20 ">
      {Cours.map((course, index) => (
        <div key={course.id} className={index === 0 ? "mt-10" : ""}> {/* Adds margin-top to the first course */}
          <h1 className='text-center text-white '>{course.programming_language}</h1>
          <div className="border border-gray-800 p-2">
            <span className='text-center text-gray-500  '>Language: {course.languageCategory}</span>
            
            {/* Render iframe only if the URL is valid */}
            {isValidYouTubeUrl(course.url) && (
             
             <iframe 
                width="560" 
                height="315" 
                src={course.url} 
                title={`${course.programming_language} video`} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className='border border-gray-800'
              />
            )}
            
            <div className="border border-gray-700 flex flex-row justify-between p-2 mt-1">
              <span className="border bg-gray-600 bg-trasparent border-gray-500 p-1 m-1 text-1xl rounded hover:bg-blue-500  hover:text-white cursor-pointer">
                Like
              </span>
              <span className="border  bg-gray-600 bg-trasparent border-gray-500 p-1 m-1 text-1xl rounded hover:bg-blue-500 hover:text-white  cursor-pointer">
                Share
              </span>
              <span className="border border-gray-500  bg-gray-600 bg-trasparent p-1 m-1 text-1xl text-white rounded hover:bg-green-500 cursor-pointer">
                Support me
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CoursePages;
