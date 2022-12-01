import React from 'react';
import '../../index.css'

type TestProps = {
    children: React.ReactNode
}
export const TestButton: React.FC<TestProps> = ({children}) => {
    return <button className="bg-green-800 hover:bg-cyan-600 test-style">
        {children}
    </button>
}