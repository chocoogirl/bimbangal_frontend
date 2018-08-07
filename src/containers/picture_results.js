import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'
import { SectionTag,ImgDiv } from 'styles';
import { fetchImages } from 'actions';
import { AutoSuggestion } from 'containers';
import Loader from '../assets/Ripple-1s-69px.gif';

export const isEmpty = (obj) => {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}

class PictureResults extends Component{

  shouldComponentUpdate(nextProps){
      return (!nextProps.auto_complete)
  }


  renderPhotos(){
    if(this.props.photos === undefined || this.props.photos.length === 1){
        return (
          <ImgDiv>
          <div className="loadingGIF">
              <img src = {Loader} alt = "loading poster"/>
              </div>
          </ImgDiv>
        );
    }
    else if (this.props.photos.length === 0) {
      this.props.fetchImages('Random')
      return <Redirect to = {"/noimagefound"} />
      // return (
      //   <ImgDiv>
      //     <div className="loadingGIF">
      //       <img src = {NoImagePoster} className = "responsive" alt = "loading poster"/>
      //     </div>
      //   </ImgDiv>
      // );
    }
    else{
      const photoarray = _.mapKeys(this.props.photos,'id')
      return _.map(photoarray, photos =>{
        return (
          <Link to = {`/picture/${photos.id}`} key = {photos.id} className="pictureLink">
            <img src = {photos.url} alt = {`${photos.description}`} className = "imgResponsive"/>
          </Link>
        );
      });
    }
  }

  render(){
    return (
      <SectionTag>
        <AutoSuggestion />
        <div className="pictureSearched">
          {this.renderPhotos()}
        </div>
      </SectionTag>
    );
  }
}

function mapStatetoProps(state){
  return { photos : state.resultsReducer.photos , searchterm : state.resultsReducer.searchterm };
}

export default connect(mapStatetoProps,{fetchImages})(PictureResults);
