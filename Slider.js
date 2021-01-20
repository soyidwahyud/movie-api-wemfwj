import React, { Component } from 'react';

const Slide = props => {
  const { movieGroup } = props;
  return <div className="new-releases-slide">{movieGroup}</div>;
};

let movieArr = [];

class Slider extends Component {
  state = {
    currentIndex: 0,
    translateValue: 0
  };

  createNestedArr = () => {
    while (this.props.movie.length) {
      movieArr.push(this.props.movie.splice(0, 5));
    }
    return movieArr.map((item, i) => {
      return <Slide key={i} movieGroup={item} />;
    });
  };

  nextPic = () => {
    if (this.state.currentIndex === movieArr.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue - this.slideWidth()
    }));
  };

  prevPic = () => {
    if (this.state.currentIndex === movieArr.length + 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    } else if (this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
  };

  slideWidth = () => {
    return document.querySelector(".new-releases-slide").clientWidth;
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="movie-carousel"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0.45s"
          }}
        >
          {this.createNestedArr()}
        </div>
      </React.Fragment>
    );
  }
}

export default Slider;