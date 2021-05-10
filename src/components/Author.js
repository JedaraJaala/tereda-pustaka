import getAuthor from "./fetch/author.js";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Post from "./Post.js";
import "./Author.scss";
import { CircularProgress } from "@material-ui/core";

function Author(props) {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function initialise() {
      let resp = await getAuthor(props.author);
      setFeed(resp);
      setLoading(false);
    }
    initialise();
  });

    return (
      <div className="author">
        <div className="posts">
          {feed.map((quote, index) => (
            <Post key={index} data={quote} />
          ))}
        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    author: state[0].author
  };
};

export default connect(mapStateToProps)(Author);
