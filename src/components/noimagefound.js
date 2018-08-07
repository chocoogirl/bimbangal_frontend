import React from 'react'
import { ImgDiv } from 'styles';
import NoImagePoster from '../assets/404.gif';

function NoImageFound (){
    return (
      <ImgDiv>
        <div className="loadingGIF">
          <img src = {NoImagePoster} className = "responsive" alt = "loading poster"/>
        </div>
      </ImgDiv>
    );
}

export default NoImageFound;
