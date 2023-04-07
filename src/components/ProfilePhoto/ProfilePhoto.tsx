import React from 'react';
import './style.css';

type ProfilePhotoProps = {
  size: 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | '2x-large';
  imageFile: string;
  rounded?: boolean;
};
const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ size, imageFile, rounded }: ProfilePhotoProps) => {
  let profilePhotoSize;
  switch (size) {
    case 'x-small':
      profilePhotoSize = 'w-6 h-6';
      break;
    case 'small':
      profilePhotoSize = 'w-8 h-8';
      break;
    case 'medium':
      profilePhotoSize = 'w-10 h-10';
      break;
    case 'large':
      profilePhotoSize = 'w-16 h-16';
      break;
    case 'x-large':
      profilePhotoSize = 'w-32 h-32';
      break;
    case '2x-large':
      profilePhotoSize = 'w-[148px] h-[148px]';
      break;
    default:
      throw Error('invalid size value');
  }

  return (
    <img
      src={imageFile}
      alt="profile"
      className={`picture-style ${rounded ? "rounded-[8px]" : "rounded-full"} ${profilePhotoSize}`}
    />
  );
};
export default ProfilePhoto;
