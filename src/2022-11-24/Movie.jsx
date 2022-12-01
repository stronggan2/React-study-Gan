import React from 'react';

const Movie = ({title, open, img}) => {
  return (
    <>
      <div>
        <h1>제목 : {title} </h1>
        <h1>개봉일 : {open} </h1>
        <img src={img} alt="" />
      </div>
    </>
  );
};

export default Movie;