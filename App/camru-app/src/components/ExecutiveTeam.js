import { map } from "lodash";
import React, { useEffect, useState } from "react";
import Executive from "./Executive.js";


const ExecutiveTeam = (props) => {

  // get request to get all the executive team members
  const [executiveTeam, setExecutiveTeam] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SSL}://${process.env.REACT_APP_SERVER_HOST}/database/execs`)
    .then(response => response.json())
    .then(data => {setExecutiveTeam(data)})
    .catch(err => console.log(err));
  }, []);

  
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {executiveTeam.map((exec) => {
            return (
              <Executive
                name={exec.name}
                position={exec.position}
                photoPath={exec.photoPath}
                />
            );
          })
        }
      </div>
    </div>

  );
}

export default ExecutiveTeam;