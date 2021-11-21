import React, { useState } from 'react';

import { METHOD } from '../Converter';

import s from './Input.module.scss';

const Input = (props: IProps) => {
  const { method, value, onChange } = props;
  const [error, setError] = useState<string | null>(null);

  const binChange = (val: string) => {
    const MAX_LENGTH = 22;
    const lastSymbol = Number(val.slice(-1));
    const isDec = lastSymbol === 0 || lastSymbol === 1;
    const isCurrentLength = val.length < MAX_LENGTH;

    if (isDec && isCurrentLength) {
      onChange(val);
    } else if (!isDec) {
      setError('Enter a binary number (only 0 or 1)');
    } else if (!isCurrentLength) {
      setError(`Max length ${MAX_LENGTH} characters`);
    }
  };

  const decChange = (val: string) => {
    const MAX_LENGTH = 15;
    const isCurrentLength = val.length < MAX_LENGTH;
    if (isCurrentLength) {
      onChange(val);
    } else {
      setError(`Max length ${MAX_LENGTH} characters`);
    }
  };

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const val = evt.target.value;

    if (method === METHOD.binToDec) {
      binChange(val);
    }
    if (method === METHOD.decToBin) {
      decChange(val);
    }
  };

  return (
    <div className={s.wrapper}>
      {error && <span className={s.helper}>{error}</span>}
      <input
        className={s.input}
        type="number"
        value={value}
        onChange={onInputChange}
      />
    </div>
  );
};

interface IProps {
  method: METHOD;
  value: string;
  onChange: (val: string) => void;
}

export { Input };
