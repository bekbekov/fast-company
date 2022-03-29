import React from 'react';

const Bookmark = () => {
  const [chosen, setChosen] = React.useState(false);

  const handleChoose = () => {
    setChosen(!chosen);
  };

  return (
    <div onClick={handleChoose} style={{ cursor: 'pointer' }}>
      {!chosen ? <i className="bi bi-bookmark"></i> : <i className="bi bi-bookmark-heart-fill"></i>}
    </div>
  );
};

export default Bookmark;
