import React from "react";

const Filter = ({ RateLimit, setRate }) => {
  return (
    <div>
      <input
        type="text"
        value={RateLimit}
        onChange={(e) => setRate(e.target.value)}
      />
    </div>
  );
};

export default Filter;
