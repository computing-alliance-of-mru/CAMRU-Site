import React, { useEffect, useState } from "react";


const ExecutiveTeam = (props) => {

  // get request to get all the executive team members
  const [executiveTeam, setExecutiveTeam] = useState(0);
  useEffect(() => {
    fetch('http://localhost:5000/database/execs')
      .then(response => response.json())
      .then(data => setExecutiveTeam(data.map((exec) => {
        return (
          <div className="bg-camru-blue rounded-lg shadow-lg p-4">
          <div className="flex flex-col items-center">
          <img src={exec.photoPath} width="600" height="900" alt="Image" data-lazy-src={exec.photoPath}  data-ll-status="loaded" loading="lazy" />
            <div className="text-center mt-2">
              <h3 className="text-lg font-medium title-font mb-1 text-white">{exec.name}</h3>
              <div className="w-36 lg:w-44 h-1 bg-camru-blue4 rounded mt-2 mb-4"></div>
              <p className="text-white">{exec.position}</p>
            </div>
          </div>
        </div>
        )
      })));
        
  }, []);

  

  return (
    <div className="grid xl:translate-y-[30%] lg:translate-y-[25%] translate-y-[10%]">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">

         { 
          executiveTeam
        }

      </div>
    </div>

  );
}


export default ExecutiveTeam;