import React from 'react';

type TestProps = {
    children: React.ReactNode
}
const TestButton: React.FC<TestProps> = ({ children }) => <button className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded-100 shadow-light-100">
        {children}
    </button>;

export default TestButton;
