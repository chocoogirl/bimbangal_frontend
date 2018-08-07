import React, { Component } from 'react';
import { fetchImages } from 'actions';
import { connect } from 'react-redux';
import { PictureResults } from 'containers';

class App extends Component {

  componentDidMount(){
    this.props.fetchImages("Random")
  }

  render() {
      return (
        <div>
          <PictureResults />
        </div>
      );
  }
}
//
// function mapStatetoProps(state){
//   console.log('Log from app:',state.resultsReducer);
//   return  state.resultsReducer;
// }

export default connect(null, { fetchImages })(App);
