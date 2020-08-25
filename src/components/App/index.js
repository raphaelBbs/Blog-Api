// == Import npm
import React from 'react';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import Page404 from '../Page404';

// == Import
import dataCategories from '../../data/categories';
import datapost from '../../data/posts';
import './styles.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header dataCategories={dataCategories} />
        <Main dataPost={datapost} />
        <Footer />
        {/* <Page404 /> */}

      </div>
    );
  }
}

// == Export
export default App;
