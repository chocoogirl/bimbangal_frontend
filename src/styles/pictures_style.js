import styled from 'styled-components';

export const ImgDiv = styled.div`
.loadingGIF {
  display: block;
  position: absolute;
  top: 50%
  left: 50%
  margin: 100px 0px 0px -30px;
	width: 100%;
	height: 100%;
	z-index: 9999;

  .responsive {
    margin: -80px 0px 0px -120px;
  }
  @media(min-width: 576px) {
    .responsive {
      margin: -80px 0px 0px -100px;
    }
  }
  @media(min-width: 768px) {
    .responsive {
      margin: -120px 0px 0px -120px;
    }
  }
  @media(min-width: 992px) {
    .responsive {
      margin: -220px 0px 0px -150px;
    }
  }
}`
