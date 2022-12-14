import React from 'react';
import './style.css';

type PropsType = {
    size: string
    imageFile: string
}
const ProfilePhoto = ({ size, imageFile }: PropsType) => {
  let styleClass = '';
  if (size === 'large') {
    styleClass = 'w-[150px] h-[150px]';
  } else if (size === 'medium') {
    styleClass = 'w-[64px] h-[64px]';
  } else if (size === 'small') {
    styleClass = 'w-[48px] h-[48px]';
  } else if (size === 'smaller') {
    styleClass = 'w-[40px] h-[40px]';
  }

  return (
        <img src={imageFile} alt="profile" className={`picture-style rounded-full ${styleClass}`}/>
  );
};
export default ProfilePhoto;
