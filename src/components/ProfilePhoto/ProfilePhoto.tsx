import React from 'react';
import './style.css';

type PropsType = {
    size: string
    imageFile: string
}
const ProfilePhoto: React.FC<PropsType> = ({ size, imageFile }: PropsType) => {
  let styleClass = '';
  if (size === 'x-large') {
    styleClass = 'w-[148px] h-[148px]';
  } else if (size === 'large') {
    styleClass = 'w-[128px] h-[128px]';
  } else if (size === 'medium') {
    styleClass = 'w-[64px] h-[64px]';
  } else if (size === 'small') {
    styleClass = 'w-[40px] h-[40px]';
  } else if (size === 'smaller') {
    styleClass = 'w-[24px] h-[24px]';
  }

  return (
        <img src={imageFile} alt="profile" className={`picture-style rounded-full ${styleClass}`}/>
  );
};
export default ProfilePhoto;
