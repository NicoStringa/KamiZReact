import React from 'react';

import Routes from './routes/Routes';

import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Layout>
      <Navbar />
      <Toaster position="top-center" reverseOrder={true} />
      <Routes />
      <Footer />
    </Layout>
  );
}

export default App;
