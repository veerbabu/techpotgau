import React from 'react';
import Nava from "./Nav";
import './Navabar.css'


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPosition: 0
    };
  }

  debounce = (fn, time) => {
    let timeout;

    return function() {
      const functionCall = () => fn.apply(this, arguments);

      clearTimeout(timeout);
      timeout = setTimeout(functionCall, time);
    };
  };

  handleScroll = () => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    if (scrollPosition < 1) {
      // Safari scrolls past 0 so scrollPosition needs to be reset to 0
      this.setState({ scrollPosition: 0 });
    } else {
      this.setState({ scrollPosition });
    }
  };

  componentDidMount() {
    return window.addEventListener(
      "scroll",
      this.debounce(this.handleScroll, 16)
    );
  }

  componentWillUnmount() {
    return window.removeEventListener(
      "scroll",
      this.debounce(this.handleScroll, 16)
    );
  }

  render() {
    const sticky = !!this.state.scrollPosition;
    return (<div className={`header ${sticky ? "header--sticky" : ""}`} ><Nava/></div>);
  }
}


