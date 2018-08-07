import styled from 'styled-components';

export const DetailTag = styled.div`
a {
  color: #ff3333;
  text-decoration: none;
  transition: all 0.35s ease-out;
}

p a:hover {
 color: #33cc00;
}

td {
    padding: 5px;
    text-align: left;
}

h2{
  padding: 75px 10px 0px 20px;
}


.PictureDetailPage {
  display: flex;
  flex-direction: column;
  margin-top: 15px;
}

.PicDetails {
  order: 1;
  color: #FFF;
}


.detailsList {
  padding: 20px 5px 15px 0px;
  margin-top: 20px;
}

.poster {
  order: 2;
}

.posterImg {
width: 100%;
height: auto;
}

.imghistory{
margin-top: 25px;
}


.sugiPoster {
  width: 100%
  height: 100%
}

.SugiInfo{
  padding: 20px 5px 15px 20px;
  margin-top: 5px;
}

.bold {
  font-size: 18px;
  font-weight: 800;
}

.noDisplay {
  display: none;
  opacity: 0;
  visibility: hidden;
}

@media(min-width: 768px) {
  .PictureDetailPage {
    flex-direction: row;
  }

  .PicDetails {
    flex: 2;
    order: 2;
  }
  .poster {
    flex: 1;
    order: 1;
    padding-right: 20px;
  }
  .posterImg {
    width: 500px;
    height: auto;
  }
`;
