import React from 'react';
import '../../index.css'

type TestProps = {
    children: React.ReactNode
}
export const Test: React.FC<TestProps> = ({children}) => {
    return <div className="bg-green-800">
        {children}
    </div>
}