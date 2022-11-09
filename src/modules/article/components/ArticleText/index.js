import React from 'react';
import { articleContent } from '../../../shared/ArticleContent/index';
import ParagraphsList from '../ParagraphsList';
import './styles.css';

const ArticleText = ({ selectedArticle }) => {
    return (
        <div style={{ display: 'flex', flex: 1, paddingTop: '15vh', height: 'auto', justifyContent: 'center', paddingBottom: '5em' }}>
            <div className='ArticleBox' style={{  }}>
                <p style={{ fontSize: '14px', margin: '0' }}>{articleContent[selectedArticle].subtitle}</p>
                <p style={{ fontSize: '40px', fontWeight: '900', marginTop: '0px' }}>{articleContent[selectedArticle].title}</p>
                <ParagraphsList paragraphs={articleContent[selectedArticle].article} />
            </div>
        </div>
    )
}

export default ArticleText;