import React, { Component } from "react";

export default function Joke(props) {
    console.log(!props.question)
  return (
      <div>
          {props.question && <h3>Question : {props.question}</h3>}
          {/* this means props.question gives u ture , so render this part only in u get a true and render this props.question */}
          <h3 style={{color:!props.question && "red"}}>Answer : {props.answer}</h3>
          <hr/>
      </div>
  );
}
