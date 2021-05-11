import "./Post.scss";
import { useRef, useState } from "react";
import { Menu, Book, Heart, Star, Twitter, Copy } from "react-feather";
import { updateAuthor } from "./store/action.js";
import { connect } from "react-redux";
import getAuthor from "./fetch/author.js";
const path =process.env.PUBLIC_URL;


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

const setAuthor = ()=> {
    props.updateNewAuthor(author);
    
  }
  function getShareContent() {
    let words = props.data.Quote;
    words = words.replace(/\s/g, "+");
    let authorsName = props.data.Display;
    authorsName = authorsName.replace(/\s/g, "+");
    return words + "+-+" + authorsName;
  }

  let lines = getLines(props.data.Quote);
  let twitterShare =
    "https://twitter.com/intent/tweet?text=" + getShareContent();
  return (
    <div className="post">
      <div className="post-titlebar">
        <span>{<Book />}</span>
        <a href={path+"/author"} onClick={() => setAuthor()}>
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
        <a href={twitterShare} target="_blank">
          <span>
            <Twitter size={30} />
          </span>
        </a>
        <span className="translate-to-english" onClick={copyToClipBoard}>
          <Copy size={30} />
          <div className="translate-tooltip">{copyStatus}</div>
        </span>
      </div>
      <textarea ref={textRef} value={props.data.Quote}></textarea>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    author: state.author
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
