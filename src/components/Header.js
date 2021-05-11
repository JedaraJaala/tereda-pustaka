import "./Header.scss";
import { Search } from "react-feather";

const path=process.env.PATH||"/tereda-pustaka"

export default function Header() {
  return (
    <div className="header">
      <a href={path+"/"}>
        <h1 className="header-title">ತೆರದ ಪುಸ್ತಕ</h1>
      </a>
      <div className="search-topics">
        <Search size={30} />
        Topics
      </div>
    </div>
  );
}
