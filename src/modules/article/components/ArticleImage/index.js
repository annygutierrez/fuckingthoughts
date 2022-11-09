import React from 'react';
import { articleContent } from '../../../shared/ArticleContent/index';
import './styles.css';

const ArticleImage = ({ selectedArticle }) => {
    return (
        <div className='PhotoContainer' style={{ display: 'flex', flex: 1 }}>
            <div style={{  }}>
                <img className="ArticlePhoto" src={articleContent[selectedArticle].photo} alt={articleContent[selectedArticle].subtitle} />
            </div>
        </div>
    )
}

export default ArticleImage;