import React from 'react';
import { StyledDiv } from 'styles';
import TongueOut from '../assets/tongue_out.svg';

function Overview(){
  return (
    <StyledDiv>
      <div className = "aboutSite">
        <h2 id="title01">What this site is about?</h2>
        <p>Bimbangal is a source of inspiration for Photographers (even for a wanna be like me  <img  src={TongueOut} alt="Tongue Out icon" /> ) to learn what
        makes a great picture, great..!!! Stock photos are the best where you can learn a lot. This site aggregates
        free stock photos from multiple source(link) and present it to you.. Its Free..!!
        </p>
      </div>
    </StyledDiv>
  );
}

export default Overview;
