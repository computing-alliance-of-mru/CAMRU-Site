import { map } from "lodash";
import React, { useEffect, useState } from "react";
import Executive from "./Executive.jsx";


const ExecutiveTeam = (props) => {

  // get request to get all the executive team members

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {props.execData.map((exec) => {
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