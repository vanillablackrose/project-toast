import React from 'react';

import styles from './RadioControl.module.css';
import { RadioControlContext } from '../RadioControlProvider';

function RadioControl({ options, name }) {
  const [radioValue, changeRadioValue] = React.useContext(
    RadioControlContext
  );

  return (
    <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
      {options.map((option, index) => {
        return (
          <label
            htmlFor={`${name}_${index}`}
            key={`label_${name}_${index}`}
          >
            <input
              type="radio"
              id={`${name}_${index}`}
              key={`${name}_${index}`}
              name={name}
              checked={radioValue === option ? true : false}
              value={option}
              onChange={changeRadioValue}
            />
            {''} {option}
          </label>
        );
      })}
    </div>
  );
}

export default RadioControl;
