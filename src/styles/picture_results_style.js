
import styled from 'styled-components';

export const SectionTag = styled.div`
  .imgResponsive {
    width: 100%;
    height: auto;
  }

  .pictureSearched {
    margin-top: 10px;
    line-height: 2;
    -webkit-column-count: 1;
    -webkit-column-gap:   10px;
    -moz-column-count:    1;
    -moz-column-gap:      10px;
    column-count:         1;
    column-gap:           10px;
  }

  .pictureSearched a {
    width: 100% !important;
    height: auto !important;
  }

  @media(min-width: 576px) {
    .pictureSearched {
      justify-content: space-between;
    }
    .pictureSearched {
      -moz-column-count:  2;
      -webkit-column-count: 2;
      column-count:         2;
    }
  }

  @media(min-width: 768px) {
    .pictureSearched {
      -moz-column-count:  3;
      -webkit-column-count: 3;
      column-count:         3;
    }
  }

  @media(min-width: 992px) {
    .pictureSearched {
      -moz-column-count: 4;
      -webkit-column-count: 4;
      column-count: 4;
    }
  }

  .pictureLink {
    position: relative;
  }
`;
