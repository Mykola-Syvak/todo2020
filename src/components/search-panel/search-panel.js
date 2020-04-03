import React from 'react';

import './search-panel.css';

const SearchPanel = () => {
  
    const searchText = ' Type here to search';
    const searhStyle = {
      fontSize: '20px'
    };
    
    return <input
      className="search-panel"
      style={searhStyle}
      placeholder={searchText} />;
  };

  export default SearchPanel;