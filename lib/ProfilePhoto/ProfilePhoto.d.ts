import React from 'react';
import './style.css';
type ProfilePhotoProps = {
    size: 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | '2x-large';
    imageFile: string;
};
declare const ProfilePhoto: React.FC<ProfilePhotoProps>;
export default ProfilePhoto;
