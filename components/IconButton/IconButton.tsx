import React from 'react';

type IconButtonProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

export const IconButton: React.FC<IconButtonProps> = ({ href, icon, label }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {icon}
    </a>
  );
};