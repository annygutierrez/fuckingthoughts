import React from 'react';
import ArticleImage from './components/ArticleImage';
import ArticleText from './components/ArticleText';
import './styles.css';

const Article = ({ selectedArticle }) => {
    return (
        <div className='ArticleContainer' style={{ display: 'flex', flex: 1 }}>
            <ArticleText selectedArticle={selectedArticle} />
            <ArticleImage selectedArticle={selectedArticle} />
        </div>
    )
}

export default Article;