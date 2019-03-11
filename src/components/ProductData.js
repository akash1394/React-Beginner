import React, { Component } from "react";
import MyInfo from "./MyInfo";

const product = [
  {
    id: "1",
    product: "watch",
    price: "5000",
    description: "tells the time"
  },
  { id: "2", product: "hat", price: "50", description: "protects from sun" },
  { id: "3", product: "bottle", price: "150", description: "stay hydrated" },
  { id: "4", product: "mobile", price: "15000", description: "just everything" }
];

// export default function Detail() {
//   const productDetails = product.map(val => (
//     <MyInfo
//       id={val.id}
//       product={val.product}
//       price={val.price}
//       description={val.description}
//     />
//   ));

//   return <div>{productDetails}</div>;
// }

export default class Detail extends Component {
  render() {
    const productDetails = product.map(val => (
      <MyInfo
        id={val.id}
        product={val.product}
        price={val.price}
        description={val.description}
      />
    ));
    return <div>{productDetails}</div>;
  }
}
