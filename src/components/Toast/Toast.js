import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';
import { ToastMessageContext } from '../ToastMessageProvider';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, variant, children, ...delegated }) {
  const [toastMessages, newToastMessage, removeToastMessage] =
    React.useContext(ToastMessageContext);
  const Tag = ICONS_BY_VARIANT[variant];

  return (
    <div
      className={`${styles.toast} ${styles[variant]}`}
      {...delegated}
    >
      <div className={styles.iconContainer}>
        <Tag size={24} />
      </div>
      <VisuallyHidden>{variant}</VisuallyHidden>
      <p className={styles.content}>{children}</p>
      <button
        className={styles.closeButton}
        aria-label="Dismiss message"
        aria-live="off"
        onClick={() => {
          removeToastMessage(id);
        }}
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
