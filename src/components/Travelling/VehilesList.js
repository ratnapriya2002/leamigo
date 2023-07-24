// // VehicleList.jsx
// import React from "react";

// const VehicleList = ({ vehicles }) => {
//   return (
//     <div className="vacals-list" >
//       <h1>Available Vehicles:</h1>
//       <ul >
//         {vehicles.map((vehicle) => (
//           <li key={vehicle.id} className="list">{vehicle.vehiclesName}</li>
          
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default VehicleList;
// VehicleList.jsx
import React from "react";

const VehicleList = ({ vehicles }) => {
  return (
    <div className="vacals-list">
      <h1>Available Vehicles:</h1>
      <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle.id} className="list">
            {vehicle.vehiclesName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleList;