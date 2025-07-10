import React from 'react';

import RadioControlProvider from '../RadioControlProvider';
import ToastMessageProvider from '../ToastMessageProvider';
import ToastShelf from '../ToastShelf';
import ToastForm from '../ToastForm';
import styles from './ToastPlayground.module.css';

function ToastPlayground() {
  return (
    <div className={styles.wrapper}>
      <ToastMessageProvider>
        <RadioControlProvider current="notice">
          <header>
            <img alt="Cute toast mascot" src="/toast.png" />
            <h1>Toast Playground</h1>
          </header>
          <ToastShelf />
          <ToastForm />
        </RadioControlProvider>
      </ToastMessageProvider>
    </div>
  );
}

export default ToastPlayground;
