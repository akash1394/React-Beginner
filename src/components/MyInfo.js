import React, { Component } from "react";
import MainContent from "./MainContent";

const data = [
  {
    id: "1",
    imgsrc: "img1.jpg",
    description:
      "Landscape of nature background and beautiful pink and red cosmos flower field with sunset. vintage color tone"
  },
  {
    id: "2",
    imgsrc: "img2.jpg",
    description: "Beautiful old red barn in spring"
  },
  {
    id: "3",
    imgsrc: "img3.jpg",
    description: "field of spring flowers and sunlight"
  },
  {
    id: "4",
    imgsrc: "img4.jpg",
    description: "big, green lawn in the spring park"
  },
  {
    id: "5",
    imgsrc: "img5.jpg",
    description: "spring background"
  }
];

// export default function MyInfo(props) {
//   const imgSrc = data.map(value => {
//     return (
//       <MainContent
//         key={value.id}
//         id={value.id}
//         src={value.imgsrc}
//         description={value.description}
//       />
//     );
//   });

//   return (
//     <div>
//       <h1>Akash</h1>
//       <p>This is my blog ...</p>
//       {/* <ul>{imgSrc}</ul> */}
//       <div>{props.id}</div>
//       <div>{props.product}</div>
//       <div>{props.price}</div>
//       <div>{props.description}</div>
//       <hr />
//     </div>
//   );
// }

export default class MyInfo extends Component {
  render() {
    const imgSrc = data.map(value => {
      return (
        <MainContent
          key={value.id}
          id={value.id}
          src={value.imgsrc}
          description={value.description}
        />
      );
    });
    return (
      <div>
        <h1>Akash</h1>
        <p>This is my blog ...</p>
        <ul>{imgSrc}</ul>
        <div>{this.props.id}</div>
        <div>{this.props.product}</div>
        <div>{this.props.price}</div>
        <div>{this.props.description}</div>
        <hr />
      </div>
    );
  }
}
