import React,{ Component } from 'react'
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest';
import { fetchACData , fetchImages } from 'actions';
import { Form,theme } from 'styles';
import search from '../assets/search.svg';

const getSuggestionValue = suggestion => suggestion;

const renderSuggestion = suggestion => (
  <div>
    {suggestion}
  </div>
);

class AutoSuggestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: [],
    };
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress(event){
    if(event.key === 'Enter'){
      let term = this.state.value;
      if(term){
          this.props.fetchImages(term)
          document.activeElement.blur()
      }
    }
  }

  onSuggestionSelected = (event, {suggestionValue}) => {
    this.props.fetchImages(suggestionValue)
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  getSuggestions(value){
    this.props.fetchACData(value)
    const auto_complete = this.props.autoSuggest
    if(!auto_complete){
      return []
    }
    else{
      return (auto_complete)
    }
  }

  shouldRenderSuggestions = (value) => {
    return value.trim().length > 2;
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions:  this.getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Search for your favourites...!!',
      value,
      onChange: this.onChange,
      onKeyPress : this.handleKeyPress
    };

    return (
      <Form onSubmit = {(e) => e.preventDefault()}>
        <img  src={search} alt="search icon" className="searchIcon" />
        <Autosuggest className="searchBar" ref="autosuggest"
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          shouldRenderSuggestions = {this.shouldRenderSuggestions}
          onSuggestionSelected = {this.onSuggestionSelected}
          theme = {theme}
          focusInputOnSuggestionClick = {false}
        />
      </Form>
    );
  }
}

function mapStatetoProps(state){
  return {  autoSuggest : state.resultsReducer.auto_complete};
}
export default connect(mapStatetoProps,{fetchACData,fetchImages})(AutoSuggestion);
