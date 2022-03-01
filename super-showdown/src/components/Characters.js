import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../components/makeApiCall';

class Characters extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render() {
    const { error, isLoading, characters } = this.props;
    if (error) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>Characters</h1>
          <ul>
            {characters.map((character, index) => 
            <li key={index}>
              <h3>{character.name}</h3>
              <p>{character.abstract}</p>
            </li>
            )}
          </ul>
        </React.Fragment>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    characters: state.characters,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(Characters);