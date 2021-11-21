export function convert(val: number) {
  const strVal = val.toString();
  const digit = strVal.length;
  let result = 0;

  for (let i = 0; i < strVal.length; i += 1) {
    if (strVal[i] !== '0') {
      const ex = digit - 1 - i;
      const r = 2 ** ex;
      result += r;
    }
  }

  return result.toString();
}

export function convertToDec(val: number) {
  const a = (val: number): string => {
    if (val === 1) {
      return '1';
    }
    return (val % 2) + a(Math.floor(val / 2));
  };

  return a(val).split('').reverse().join('');
}
