import React from 'react';

const SearchPanel = () => {
  
    const searchText = 'Type here to search';
    const searhStyle = {
      fontSize: '20px'
    };
    
    return <input
      style={searhStyle}
      placeholder={searchText} />;
  };

  export default SearchPanel;