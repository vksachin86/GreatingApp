import React from "react";
import "./index.css";

function Greating() {
  let currDate = new Date();
  currDate = currDate.getHours();
  let greating = " ";

  const cssStyle = {};

  if (currDate >= 1 && currDate < 12) {
    greating = "Good Moring";
    cssStyle.color = "green";
  } else if (currDate >= 12 && currDate < 17) {
    greating = "Good Afternoon";
    cssStyle.color = "orange";
  } else {
    greating = "Good Night";
    cssStyle.color = "Black";
  }

  const currDate1 = new Date().toLocaleTimeString();
  const currDate2 = new Date().toLocaleDateString();
  return (
    <>
      <div>
        <h1>
          Hello, <span style={cssStyle}>{greating}</span> <br />
          Time: {currDate1} <br />
          Date: {currDate2}
        </h1>
      </div>
    </>
  );
}

export default Greating;
