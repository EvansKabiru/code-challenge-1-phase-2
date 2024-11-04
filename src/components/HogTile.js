import React, { useState } from "react";

function HogTile({ hog }) {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <div className="ui eight wide column" onClick={toggleDetails}>
      <div className="ui card">
        <div className="image">
          <img src={hog.image} alt={hog.name} />
        </div>
        <div className="content">
          <h3>{hog.name}</h3>
          {showDetails && (
            <div>
              <p>Specialty: {hog.specialty}</p>
              <p>Weight: {hog.weight}</p>
              <p>Greased: {hog.greased ? "Yes" : "No"}</p>
              <p>Highest Medal: {hog["highest medal achieved"]}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HogTile;
