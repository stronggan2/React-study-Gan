import React from 'react';

const PriceList = (props) => {
  const {prices} = props;
  return (
    <div>
      <h3>가격목록</h3>
      {prices}
    </div>
  );
};

export default PriceList;