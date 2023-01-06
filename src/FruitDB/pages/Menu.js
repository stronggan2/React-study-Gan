import { Link } from "react-router-dom";
import "./Menu.scss";

const Menu = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        Sesac <span>☘</span>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">리스트</Link>
        </li>
        <li>
          <Link to="/insert">추가</Link>
        </li>
        <li>
          <Link to="/product">정보</Link>
        </li>
        <li>
          <Link to="/product">마이페이지</Link>
        </li>
      </ul>
    </header>
  );
};

export default Menu;
