import React from 'react';

type TestProps = {
    children: React.ReactNode
}
export const TestButton: React.FC<TestProps> = ({children}) => {
    return <button className="bg-green-800 hover:bg-cyan-600">
        {children}
    </button>
}