import React from 'react';

class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      characters: []
    };
  }

  makeApiCall = () => {
    fetch(`https://localhost:5000/api/characters`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          this.setState({
            isLoaded: true, 
            characters: jsonifiedResponse.results
          });
        })
        .catch((error) => {
          this.setState({
            isLoaded: true,
            error
          });
        });
      
  }

  componentDidMount = () => {
    this.makeApiCall()
  };

  render() {
    const { error, isLoaded, characters } = this.state;
    if(error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (!isLoaded) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>Characters</h1>
          <ul>
            {characters.map((character, index) =>
            <li key={index}>
              <h3>{character.name}</h3>
              <p>{character.secretId}</p>
            </li>)}
          </ul>
        </React.Fragment>
      )
    }
  }
}
export default Characters;