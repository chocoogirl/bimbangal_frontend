import { injectGlobal } from 'styled-components'

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html {
    box-sizing: border-box;
    overflow-x: hidden;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin: 0;
    padding-bottom: 30px;
    background-color: #1a1a1a;
  }

`
