import styled from 'styled-components'

export const Form = styled.form`
  .searchIcon {
    position: absolute;
    z-index: 9999;
    margin: 27px 0 0 10px;
  }

  .searchBar {
    margin-top: 10px;
    position: relative;
    font-family: 'Open Sans', sans-serif;
    width: 100%;
    padding: 20px 0 20px 40px;
    border: 1px solid #bdbdbd;
    color: #000;
    outline: none;
    transition: all 0.35s ease-out;
  }

  .searchBar:focus {
    border: 1px solid #1DE9B6;
  }

  ::placeholder {
    color: #000;
    transition: all 0.35s ease-out;
  }

  .searchBar:focus::placeholder {
    color: #1DE9B6;
  }

`;

export const theme = {
  container: {
    position: 'relative'
  },
  input: {
    'marginTop': '10px',
    width: '100%',
    height: '55px',
    padding: '20px 35px',
    fontFamily: 'Helvetica, sans-serif',
    fontWeight: 300,
    fontSize: 16,
    border: '1px solid #aaa',
  },
  inputFocused: {
    outline: 'none'
  },
  inputOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  suggestionsContainer: {
    display: 'none'
  },
  suggestionsContainerOpen: {
    display: 'block',
    position: 'absolute',
    top: 51,
    width: '100%',
    border: '1px solid #aaa',
    backgroundColor: '#fff',
    fontFamily: 'Helvetica, sans-serif',
    fontWeight: 300,
    fontSize: 16,
    zIndex: 2
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  suggestion: {
    cursor: 'pointer',
    padding: '10px 20px'
  },
  suggestionHighlighted: {
    backgroundColor: '#ddd'
  }
};
