import React from 'react';

export const ToastMessageContext = React.createContext();
import useEscapeKey from '../../hooks/useEscapeKey

function ToastMessageProvider({ children }) {
  const [toastMessages, setToastMessage] = React.useState([]);

  const newToastMessage = React.useCallback(
    (message, type) => {
      const newMessage = {
        message: message,
        variant: type,
        id: Math.random(),
      };
      setToastMessage([...toastMessages, newMessage]);
    },
    [toastMessages, setToastMessage]
  );

  const removeToastMessage = React.useCallback(
    (id) => {
      const nextToasts = toastMessages.filter((toast) => {
        return toast.id !== id;
      });

      setToastMessage(nextToasts);
    },
    [toastMessages, setToastMessage]
  );

  useEscapeKey(() => {setToastMessage([]);});

  return (
    <ToastMessageContext.Provider
      value={[toastMessages, newToastMessage, removeToastMessage]}
    >
      {children}
    </ToastMessageContext.Provider>
  );
}

export default ToastMessageProvider;
