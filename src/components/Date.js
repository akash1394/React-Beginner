import React from "react";

export default function getDate() {
  const date = new Date();
  const hours = date.getHours();
  let timeoftheday;
  let styles = {
    fontSize: 30
  };
  if (hours < 12) {
    timeoftheday = "morning";
    styles.color = "#FF7040";
  } else if (hours <= 24) {
    timeoftheday = "afternoon";
    styles.color = "rgb(243, 184, 58)";
  } else {
    timeoftheday = "night";
    styles.color = "#42518C";
  }
  return (
    <div>
      <p>
        It is currently about {date.getHours() % 12} o'clock in {timeoftheday}
      </p>
      <h1 style={styles}>Good{timeoftheday}</h1>
    </div>
  );
}
