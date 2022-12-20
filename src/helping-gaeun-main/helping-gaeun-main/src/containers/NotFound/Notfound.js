import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => (
  <div>
    없는 페이지
    <Link to="/">
      홈으로
    </Link>
  </div>
);

export default Notfound;
