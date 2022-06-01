import React, { useState } from "react";

const ShowButtonValue = () => {
    
  const [buttonValue, setButtonValue] = useState(0);

  return (
    <div>
      <input type="number" readonly value={buttonValue} />
      <div>
        <button onClick={(e) => setButtonValue(e.target.value)} value="500">
          500
        </button>
        <button onClick={(e) => setButtonValue(e.target.value)} value="1000">
          1000
        </button>
        <button onClick={(e) => setButtonValue(e.target.value)} value="5000">
          5000
        </button>
      </div>
    </div>
  );
};

export default ShowButtonValue;
