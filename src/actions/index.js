import axios from 'axios';

export const FETCH_IMAGES = "fetch_images";
export const FETCH_IMAGE = "fetch_image";
export const FETCH_AUTO_COMPLETE = "fetch_auto_complete";

const BASE_URL = 'https://api.bimbangal.com/';

export function fetchACData(term){
  const request = axios.get(`${BASE_URL}auto?ac=${term}`);
  return {
    type: FETCH_AUTO_COMPLETE,
    payload : request
  };
}

export function fetchImages(term){
  const request = axios.get(`${BASE_URL}search?term=${term}`);
  return {
    type: FETCH_IMAGES,
    payload : request
  };
}

export function fetchImage(pictureID){
  const request = axios.get(`${BASE_URL}search?pictureid=${pictureID}`);
  return {
    type: FETCH_IMAGE,
    payload : request
  };
}
