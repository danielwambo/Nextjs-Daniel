// pages/index.jsx
import React from 'react';


import ItemBlock from '../components/itemblock.jsx';
import Layout from '../app/Layout';

import CollectionBlock from '../components/collectionsblock.jsx';
import BannerSlider from '../components/BannerSlider';

const Home = () => {
  return (
    <Layout>
    <div>
      
     
        
       
    <BannerSlider />
      <ItemBlock/>
      <CollectionBlock/>
      
    </div>
    </Layout> 

  );
};

export default Home;
