import Post from "./Post.js";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import getTopics from "./fetch/topicsQuotes";
import { mapDispatchToProps } from "./store/dispatcher.js";
import { Backdrop } from "@material-ui/core";

function Posts(props) {
  const [isLoading, setLoading] = useState(true);
  const [feed, setFeed] = useState([]);

  const myReq = async (_params) => {
    setLoading(false);
  };

  useEffect(() => {
    async function fetchData() {
      if (props.genres.length === 0 || props.feed.length === 0) {
        let resp = await getTopics([]);
        props.updateUserFeed(resp);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="posts">
      {props.feed.map((quote, index) => (
        <Post key={index} data={quote} />
      ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    genres: state[0].genres,
    feed: state[0].feed
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
