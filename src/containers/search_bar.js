import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'styles';
import { fetchACData , fetchImages } from 'actions';
import search from '../assets/search.svg';
import AutoSuggestions from 'containers';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = { term : ''}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
  }

  // handleKeyPress(event){
  //   console.log('Keys Pressed :',event.key);
  //   if(event.key === 'Enter'){
  //     let term = document.getElementById('searchInput').value;
  //     if(term){
  //       this.setState({term} , () => {
  //         this.props.fetchImages(term)
  //       });
  //     }
  //   }
  // }

  handleOnChange(event){
    let term = document.getElementById('searchInputvalue').value;
    if(term){
      this.setState({term} , () => {
          this.props.fetchACData(term)
      });
    }
  }

  render(){
    // console.log('Log from Search_bar :',this.props.photos);
    return (
      <Form onSubmit={this.handleSubmit} id="form">
        <img  src={search} alt="search icon" className="searchIcon" />
        <input  onChange ={this.handleOnChange} id="searchInputvalue"
              className="searchBar" type="text" placeholder="Search for your favorites" required />
        <AutoSuggestions />
      </Form>
    );
  }
}

export default connect(null, { fetchACData })(SearchBar);
