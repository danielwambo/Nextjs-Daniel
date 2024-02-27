// pages/index.jsx
import React from 'react';
import Slider from './Slider';

const Home = ({ slides }) => {
  return (
    <div className="container">
      <Slider slides={slides} />
    </div>
  );
};

export async function getStaticProps() {
  // Fetch data from an API or other source
  const res = await fetch('https://api.testvalley.kr/main-banner/all');
  const data = await res.json();

  // Pass data to the page component as props
  return {
    props: {
      slides: data,
    },
  };
}

export default Home;
