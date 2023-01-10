import React from 'react';
import './style.css';

type PropsType = {
  size: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
  imageFile: string;
};
const ProfilePhoto: React.FC<PropsType> = ({ size, imageFile }: PropsType) => {
  let profilePhotoSize;
  switch (size) {
    case 'x-small':
      profilePhotoSize = 'w-6 h-6';
      break;
    case 'small':
      profilePhotoSize = 'w-10 h-10';
      break;
    case 'medium':
      profilePhotoSize = 'w-16 h-16';
      break;
    case 'large':
      profilePhotoSize = 'w-32 h-32';
      break;
    case 'x-large':
      profilePhotoSize = 'w-[148px] h-[148px]';
      break;
    default:
      throw Error('invalid size value');
  }

  return (
    <img
      src={imageFile}
      alt="profile"
      className={`picture-style rounded-full ${profilePhotoSize}`}
    />
  );
};
export default ProfilePhoto;
