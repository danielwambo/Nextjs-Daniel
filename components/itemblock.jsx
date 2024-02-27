import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemBlock = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.testvalley.kr/main-shortcut/all');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="item-block">
      <div className="items-container">
        {items.map(item => (
          <div key={item.mainShortcutId} className="item">
            <img src={item.imageUrl} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .item-block {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .items-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px; /* Adjust the gap between items */
        }

        .item {
          text-align: center;
        }

        .item img {
          width: 80px; /* Adjust image width as needed */
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default ItemBlock;
