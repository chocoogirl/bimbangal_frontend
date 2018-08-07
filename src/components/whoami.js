import React from 'react';
import { DetailTag } from 'styles';
import SugiImage from '../assets/Suganya_poster.jpg';
import TongueOut from '../assets/tongue_out.svg';

function WhoAmI (){
  return (
    <DetailTag>
    <div className="PictureDetailPage">
      <div className="poster">
        <img src = {SugiImage} alt = {`Sugi poster`} className="sugiPoster" />
      </div>
      <div className="PicDetails">
        <h2>Suganya Chandrasekar</h2>
        <ul className="SugiInfo">
          <li><span className="bold">Full Stack Developer</span></li>
          <li><span className="bold">Photographer</span></li>
          <li><span className="bold">Great Wife (My Husband said so <img  src={TongueOut} alt="Tongue Out icon" /> )</span></li>
        </ul>
      </div>
      </div>
    </DetailTag>
  );
}

export default WhoAmI;
