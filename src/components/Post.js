import "./Post.scss";
import { useRef, useState } from "react";
import { Menu, Book, Heart, Star, Twitter, Copy } from "react-feather";
import { updateAuthor } from "./store/action.js";
import { connect } from "react-redux";

function getLines(quote) {
  return quote.split(/[,]+/);
}

function Post(props) {
  const textRef = useRef(null);
  const [copyStatus, setCopyStatus] = useState("copy text");
  const author = props.data.Author;

  function copyToClipBoard(e) {
    textRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopyStatus("copied");
    setTimeout(() => {
      setCopyStatus("copy text");
    }, 3000);
  }

  function setAuthor() {
    props.updateNewAuthor(author);
  }

  let lines = getLines(props.data.Quote);
  return (
    <div className="post">
      <div className="post-titlebar">
        <span>{<Book />}</span>
        <a href="/author" onClick={() => setAuthor()}>
          <span className="author-username">{props.data.Display}</span>
        </a>
        <span className="titlebar-menu">
          <Menu />
        </span>
      </div>
      <div className="post-display">
        <div>
          {lines.map((line, index) => (
            <p key={index}>{line + (index === lines.length - 1 ? "" : ",")}</p>
          ))}
        </div>
      </div>
      <div className="reaction-bar">
        <span>
          <Heart size={30} />
        </span>
        <span>
          <Star size={30} />
        </span>
        <span>
          <Twitter size={30} />
        </span>
        <span className="translate-to-english" onClick={copyToClipBoard}>
          <Copy size={30} />
          <div className="translate-tooltip">{copyStatus}</div>
        </span>
      </div>
      <textarea ref={textRef} value={props.data.quote}></textarea>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    author: state[0].author
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewAuthor: (author) => {
      dispatch(updateAuthor(author));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
