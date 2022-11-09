import React from 'react';
import { articleContent } from '../../ArticleContent';

const ArticleSelector = ({ selectedArticle, onAction }) => {

    const selectArticle = (index) => {
        onAction(index);
    }

    return (
        <div style={{ position: 'fixed', bottom: '2em', right: '30%', left: '30%' }}>
            <div style={{ display: 'flex', flexDirection: 'row', padding: '0.3em 0.15em', backgroundColor: '#5DFAE7' }}>
            {
                Object.keys(articleContent).map((item, index) => {
                    return (
                        <div onClick={() => selectArticle(index)} key={index} style={{ backgroundColor: selectedArticle === index ? '#E667FB' : 'black', justifyContent: 'center', alignItems: 'center', padding: '0.4em 1em', margin: '0 0.15em', cursor: 'pointer' }}>
                            <p style={{ color: 'white', margin: '0' }}>{index + 1}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default ArticleSelector;