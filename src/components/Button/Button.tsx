import React from 'react';

const Button = (props: IProps) => {
  const { label, onClick } = props;

  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
};

interface IProps {
  onClick: () => void;
  label: string;
}

export { Button };
