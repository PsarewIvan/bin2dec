import React, { useState } from 'react';

import { Input } from '../Input';
import { Button } from '../Button';
import { convert, convertToDec } from '../../utils/convert';

import s from './Converter.module.scss';

export enum METHOD {
  binToDec = 'Bin to Dec',
  decToBin = 'Dec to Bin',
}

const Converter = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [method, setMethod] = useState(METHOD.binToDec);

  const onMethodChange = () => {
    setMethod((prev) => {
      if (prev === METHOD.binToDec) return METHOD.decToBin;
      return METHOD.binToDec;
    });
  };

  const onConvert = () => {
    const number = Number(value);
    if (method === METHOD.binToDec) {
      setResult(convert(number));
    }
    if (method === METHOD.decToBin) {
      setResult(convertToDec(number));
    }
  };

  const onCopy = () => {
    if (navigator && result) {
      navigator.clipboard.writeText(result);
    }
  };

  return (
    <div className={s.wrapper}>
      <Button label={method} onClick={onMethodChange} />
      <Input method={method} value={value} onChange={setValue} />
      <Button label="Convert!" onClick={onConvert} />
      <div>{`result: ${result}`}</div>
      <Button label="Copy" onClick={onCopy} />
    </div>
  );
};

export { Converter };
