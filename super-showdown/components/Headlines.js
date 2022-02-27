import React from 'react';

class Headlines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      headlines: []
    };
  }

  makeApiCall = () => {
    fetch(`https://api`)
  }
}