import "./Genres.scss";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import getTopics from "./fetch/topicsQuotes.js";
import { mapDispatchToProps } from "./store/dispatcher.js";

const genres = [
  "Kannada Abhimaana",
  "Motivation",
  "Wisdom",
  "Love",
  "Love Failure",
  "Moral",
  "Sad",
  "Humor",
  "Mother Sentiment",
  "Proverbs"
];

function Genres(props) {
  const [CurSlide, setCurSlide] = useState("left");

  async function handleGenres(selected) {
      props.addNewGenre(selected);
      let newFeed = await getTopics([selected]);
      props.updateUserFeed(newFeed);
  }

  function handleSlide(direction) {
    var ele = document.getElementById("genre-display");
    var num = Math.floor(ele.clientWidth);
    if (CurSlide === 0 && direction === "left") {
      setCurSlide(0);
    } else {
      if (direction === "left") {
        ele.scrollLeft -= num - 10;
      } else {
        setCurSlide(CurSlide + 1);
        ele.scrollLeft += num - 10;
      }
    }
    if (ele.scrollLeft === 0) {
      setCurSlide("left");
    } else if (ele.scrollLeft + ele.clientWidth === ele.scrollWidth) {
      setCurSlide("right");
    } else {
      setCurSlide("center");
    }
  }

  useEffect(() => {
    var ele = document.getElementById("genre-display");
    ele.scrollLeft = 0;
  }, []);

  return (
    <div className="genres" id="genres">
      <div
        className={
          CurSlide === "left" ? "arrow-left arrow-hidden" : "arrow-left"
        }
        onClick={() => handleSlide("left")}
      >
        <span>{"<"}</span>
      </div>
      <div
        className={
          CurSlide === "right" ? "arrow-right arrow-hidden" : "arrow-right"
        }
        onClick={() => handleSlide("right")}
      >
        <span>{">"}</span>
      </div>
      <div className="genre-display" id="genre-display">
        {genres.map((genre, index) => (
          <span
            key={index}
            onClick={() => {
              handleGenres(genre.toLowerCase());
            }}
            style={
              props.genres.includes(genre.toLowerCase())
                ? { color: "#b87ea4" }
                : {}
            }
          >
            {genre}
          </span>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    genres: state.genres,
    feed: state.feed
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Genres);
