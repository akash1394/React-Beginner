import React, { Component } from "react";
import styles from "../styles.module.css";

// export default function MainContent(props) {
//   console.log(props);
//   return (
//     <div className={styles.mainContent}>
//       <div className={styles.TodoItem}>{props.id}</div>
//       <img src={"../" + props.src} width="150" height="150" />
//       <div className={styles.TodoItem}>{props.description}</div> />
//       <hr />
//     </div>
//   );
// }

export default class MainContent extends Component {
  render() {
    return (
      <div className={styles.mainContent}>
        <div className={styles.TodoItem}>{this.props.id}</div>
        <img src={"../" + this.props.src} width="150" height="150" />
        <div className={styles.TodoItem}>{this.props.description}</div> />
        <hr />
      </div>
    );
  }
}
