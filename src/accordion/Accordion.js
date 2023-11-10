import React, { useState } from 'react';
import '../styles.css';

const Accordion = ({ headers, defaultContent = 'Sample text', onHeaderChange }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    const handleAddHeader = () => {
        // Call the callback function to handle adding a new header
        if (onHeaderChange) {
            onHeaderChange([...headers, `New Header ${headers.length + 1}`]);
        }
    };

    const handleDeleteHeader = (index) => {
        // Call the callback function to handle deleting a header
        if (onHeaderChange) {
            const updatedHeaders = [...headers];
            updatedHeaders.splice(index, 1);
            onHeaderChange(updatedHeaders);
        }
    };

    return (
        <div className='accordion'>
            {headers.map((header, index) => (
                <div key={index} className='header' style={{ textAlign: 'left' }}>
                    {header}
                    <button onClick={() => toggleExpand(index)} style={{ float: 'right' }}>
                        {expandedIndex === index ? 'Collapse' : 'Expand'}
                    </button>
                    <button onClick={() => handleDeleteHeader(index)} style={{ float: 'right', marginRight: '5px' }}>
                        Delete
                    </button>
                </div>
            ))}
            <button onClick={handleAddHeader}>Add Header</button>
            {expandedIndex !== null && (
                <div className='content'>{headers[expandedIndex]} - {defaultContent}</div>
            )}
        </div>
    );
};

export default Accordion;
