import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastMessageContext } from '../ToastMessageProvider';

function ToastShelf() {
  const [toastMessages, newToastMessage] = React.useContext(
    ToastMessageContext
  );

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toastMessages.map((data) => {
        return (
          <li
            key={`list_item_${data.id}`}
            className={styles.toastWrapper}
          >
            <Toast key={data.id} id={data.id} variant={data.variant}>
              {data.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
