import React from 'react';
import styles from '../css/leftside.module.css';

function LeftSide() {
  return (
    <div className={styles.container}>
      <p className={styles.firstLine}>
        Learn to code by watching others
      </p>

      <p className={styles.lastLine}>
        See how experienced developers solved problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
      </p>
    </div>
  )
}

export default LeftSide