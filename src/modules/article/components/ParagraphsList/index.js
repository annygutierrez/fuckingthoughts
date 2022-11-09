import React from 'react';

const ParagraphsList = ({ paragraphs = [] }) => {
    return paragraphs.map(item => <p>{item}</p>)
}

export default ParagraphsList;