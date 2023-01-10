import React from 'react';
import './style.css';
type PropsType = {
    size: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
    imageFile: string;
};
declare const ProfilePhoto: React.FC<PropsType>;
export default ProfilePhoto;
