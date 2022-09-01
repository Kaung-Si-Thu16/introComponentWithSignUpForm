import React from "react";
import styles from "./css/app.module.css";
import LeftSide from "./Components/LeftSide";
import RightSide from "./Components/RightSide";

function App() {
  return (
    <div className={styles.container}>
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default App;
