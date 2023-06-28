import React from 'react'

import styles from "./styles.module.css";

function ExampleComponent() {
  //After creating you own branch please delete ExampleComponent Folder in your branch...

  return (
    <div>
      {/* You can use template literals to add additional tailwindcss utilies */}
      <h1 className={`text-3xl ${styles.btn} opacity-75`}>
        sample text
      </h1>
      <button className={styles.btn}>
        example
      </button>
    </div>
  )
}

export default ExampleComponent
