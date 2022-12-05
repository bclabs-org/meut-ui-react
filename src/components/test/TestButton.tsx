import React from 'react';

type TestProps = {
    children: React.ReactNode
}
export const TestButton: React.FC<TestProps> = ({children}) => {
    return <button className="bg-green-800 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded">
        {children}
    </button>
}