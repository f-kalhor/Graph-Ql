import './style/App.css';
import HomePage from './cpmponents/home/HomePage';
import Layout from './cpmponents/layout';
import { Route, Routes } from 'react-router-dom';
import BlogPage from './cpmponents/BLOG/BlogPage';
import AuthorPage from './cpmponents/author/AuthorPage';
import ScrollToTop from './cpmponents/shared/ScrollToTop';

function App() {


  return (
    <div>
      <Layout>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs/:slug" element={<BlogPage/>} />
          <Route path="/authors/:slug" element={<AuthorPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
