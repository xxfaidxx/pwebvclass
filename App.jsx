// src/App.jsx
import {StrictMode} from 'react';
import './index.css';
import Header from './header.jsx';
import Content from './content.jsx';
import Footer from './footer.jsx';

const App = () => {
  return (
    <StrictMode>
        <div className='container'>
      <Header />
      <Content />
      <Footer />
      </div>
    </StrictMode>
  );
};

export default App;