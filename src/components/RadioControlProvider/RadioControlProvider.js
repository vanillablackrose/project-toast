import React from 'react';

export const RadioControlContext = React.createContext();

function RadioControlProvider({ children, current = '' }) {
  const [radioValue, setRadioValue] = React.useState(current);

  const changeRadioValue = React.useCallback(() => {
    setRadioValue(event.target.value);
  }, []);

  return (
    <RadioControlContext.Provider
      value={[radioValue, changeRadioValue]}
    >
      {children}
    </RadioControlContext.Provider>
  );
}

export default RadioControlProvider;
