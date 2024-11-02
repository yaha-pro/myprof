import React from 'react';
import { IconButton } from '../IconButton/IconButton';
import { AiOutlineX, AiFillGithub } from 'react-icons/ai';

export const SocialLinks = () => {
  return (
    <div className='flex gap-6 mt-8'>
      <IconButton
        href="https://x.com/YahaPro"
        icon={<AiOutlineX size={50} color="#333" />}
        label="X"
      />
      <IconButton
        href="https://github.com/yaha-pro"
        icon={<AiFillGithub size={50} color="#333" />}
        label="GitHub"
      />
    </div>
  );　  
};