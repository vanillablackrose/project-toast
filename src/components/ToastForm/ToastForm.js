import React from 'react';

import styles from './ToastForm.module.css';
import RadioControl from '../RadioControl';
import Button from '../Button';
import { ToastMessageContext } from '../ToastMessageProvider';
import { RadioControlContext } from '../RadioControlProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastForm() {
  const [toastMessages, newToastMessage] = React.useContext(
    ToastMessageContext
  );
  const [radioValue] = React.useContext(RadioControlContext);

  const [message, setMessage] = React.useState('');

  const changeMessage = React.useCallback((value) => {
    setMessage(value);
  }, []);

  function submitToastForm(event) {
    event.preventDefault();
    newToastMessage(message, radioValue);
    changeMessage('');
  }

  return (
    <form onSubmit={submitToastForm}>
      {' '}
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={() => {
                setMessage(event.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <RadioControl
            name="variant"
            options={VARIANT_OPTIONS}
          />{' '}
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastForm;
