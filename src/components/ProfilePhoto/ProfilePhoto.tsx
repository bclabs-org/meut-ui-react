import React, { FormEvent, useRef, useState } from 'react';
import './style.css';

type ProfilePhotoProps = {
  size: 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | '2x-large';
  imageFile?: string;
};
const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ size, imageFile = '' }: ProfilePhotoProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

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

  const getPixel = (str: string): number => {
    const findIndex = str.indexOf('p');
    let result;
    if (findIndex !== -1) {
      result = +str.slice(3, findIndex);
    } else {
      result = +str.slice(2, 4) * 4;
    }

    return result;
  };

  const uploadPicture = (e: FormEvent<HTMLInputElement>): void => {
    const { files } = e.target as HTMLInputElement;
    if (!files) {
      return;
    }
    console.log(files);
    const formData = new FormData();
    formData.append('image', files[0]);
  };

  const selectPicture = () => {
    inputRef.current?.click();
  };

  const renderDefaultAvatar = () => (
    <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );

  const renderHoverImage = () => (
    <svg
      width={`${getPixel(profilePhotoSize)}`}
      height={`${getPixel(profilePhotoSize)}`}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="128" height="128" rx="64" fill="#E5E7EB" />
      <path
        d="M56 68L56 69C56 70.6569 57.3431 72 59 72L69 72C70.6569 72 72 70.6569 72 69L72 68M68 60L64 56M64 56L60 60M64 56L64 68"
        stroke="#111827"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div>
      <div
        className={`${profilePhotoSize} overflow-hidden rounded-full bg-gray-100 relative cursor-pointer`}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
        onClick={selectPicture}
      >
        {imageFile ? <img src={imageFile} alt="profile" /> : renderDefaultAvatar()}
        {isHover && <div className="absolute top-0 left-0 opacity-70">{renderHoverImage()}</div>}
      </div>
      <input
        type="file"
        accept="image/jpg,image/png,image/jpeg"
        id="file"
        ref={inputRef}
        onChange={uploadPicture}
        style={{ display: 'none' }}
      />
    </div>
  );
};
export default ProfilePhoto;
