import _ from 'lodash'
import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { DetailTag } from 'styles';
import { fetchImage } from 'actions';

class PictureDetail extends Component{
  constructor(props){
    super(props);
    this.state = { route : ''}
    this.handleonMouseOver = this.handleonMouseOver.bind(this)
  }
  componentDidMount(){
    const {id} = this.props.match.params
    if(this.props.photo){
      this.setState( {route : 'SearchResults'} )
    }
    else{
      this.setState( {route : 'Home'}, () => {
        this.props.fetchImage(id)
      })
    }
  }
  handleonMouseOver(event){
    const {route} = this.state
    if (route === 'Home'){
      document.getElementById('backToHome').className = 'imghistory'
    }
    else if (route === 'SearchResults'){
      document.getElementById('backToSearchResults').className = 'imghistory';
    }
  }
  render(){
    const {photo} = this.props
    const {searchterm} = this.props

    if(!photo){
      return <div>Loading...!</div>
    }

    return (
      <DetailTag>
      <div onMouseOver = {this.handleonMouseOver} className="PictureDetailPage">
        <div  className="poster">
          <img src = {photo.rawurl} alt = {`${photo.description} poster`} className="posterImg" />
        </div>
        <div className="PicDetails">
          <div>
            <p id = "backToSearchResults" className="noDisplay"><Link to = {`/searchresults/${searchterm}`}>Search Results</Link> > {photo.description}</p>
            <p id = "backToHome" className="noDisplay"><Link to = {"/"}>Home</Link> > {searchterm}</p>
          </div>
          <table className="detailsList">
            <tbody>
              <tr><td className="bold">Source</td><td> : </td><td>{photo.source}</td></tr>
              <tr><td className="bold">Description</td><td> : </td><td>{photo.description}</td></tr>
              <tr><td className="bold">Photographer</td><td> : </td><td>{photo.owner}</td></tr>
              <tr><td className="bold">Download</td><td> : </td><td>Right Click on image and Save as</td></tr>
            </tbody>
          </table>
        </div>
        </div>
      </DetailTag>
    );
  }
}

function mapStatetoProps( {resultsReducer }, ownProps){
  const photoarray = _.mapKeys(resultsReducer.photos,'id')
  return { searchterm : resultsReducer.searchterm , photo : photoarray[ownProps.match.params.id] };
}

export default connect(mapStatetoProps,{fetchImage})(PictureDetail);
