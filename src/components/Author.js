import getAuthor from "./fetch/author.js";
import { connect } from "react-redux";
import Post from "./Post.js";
import "./Author.scss";
import React from "react";

class Author extends React.Component {
  constructor(props){
    super(props);
    this.state = {feed:[]}
  }

  async componentDidMount(){
    let tmp =await getAuthor(this.props.author);
    console.log(this.props.author)
    this.setState({feed:tmp})
  }
  
  render(){
    return (
      <div className="author">
        <div className="posts">
          {this.state.feed.map((quote, index) => (
            <Post key={index} data={quote} />
          ))}
        </div>
      </div>
    );
}
}

const mapStateToProps = (state) => {
  return {
    author: state.author,
  };
};

export default connect(mapStateToProps)(Author);
