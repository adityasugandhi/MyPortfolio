import React from 'react';
import StackIcon from 'tech-stack-icons';

export default function StackIcons({ names }) {
    return (
        <div className='flex flex-row justify-center space-x-2'>
            {names.map((name, index) => (
                <StackIcon key={index} name={name} style={{ height: 25 }} />
            ))}
        </div>
    );
}