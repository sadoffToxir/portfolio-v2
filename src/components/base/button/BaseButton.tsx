import { ReactNode } from 'react';

import './BaseButton.scss';

const Button = ({ variant = 'primary', children } : {variant?: string, children: ReactNode}) => {
  const className = `button button-${variant}`;

  return <button className={className}>{children}</button>;
};

export default Button;
