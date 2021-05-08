import "./Header.scss";
import { Search } from "react-feather";
export default function Header() {
  return (
    <div className="header">
      <a href="/">
        <h1 className="header-title">ತೆರದ ಪುಸ್ತಕ</h1>
      </a>
      <div className="search-topics">
        <Search size={30} />
        Topics
      </div>
    </div>
  );
}
