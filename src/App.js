import logo from './logo.svg';
import './App.css';
import MainHeade from './modules/shared/components/MainHeader';
import Article from './modules/article';
import ArticleSelector from './modules/shared/components/ArticleSelector';
import { useState } from 'react';

function App() {

  const [selectedArticle, setSelectedArticle] = useState(0);

  return (
   <div style={{ display: 'flex', flex: 1 }}>
     <MainHeade />
     <Article selectedArticle={selectedArticle} />
     <ArticleSelector onAction={setSelectedArticle} selectedArticle={selectedArticle} />
   </div>
  );
}

export default App;
