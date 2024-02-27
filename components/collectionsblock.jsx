// components/CollectionBlock.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CollectionBlock.css'; // Import CSS file for styling

const CollectionBlock = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.testvalley.kr/collections?prearrangedDiscount');
        setCollections(response.data.items);
      } catch (error) {
        console.error('Error fetching collections:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="collection-block">
      {collections.map(collection => (
        <div key={collection.id} className="collection-card">
          {collection.thumbnail && collection.thumbnail.uri && (
            <img src={collection.thumbnail.uri} alt={collection.title} className="collection-image" />
          )}
          <p className="collection-title">{collection.title}</p>
          <p className="collection-description">{collection.description}</p>
          {/*  more params */}
        </div>
      ))}
    </div>
  );
};

export default CollectionBlock;
