import axios from 'axios';
import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const postFacebookLogin = (email, image, name) => (dispatch) => {
  const newFacebookLogin = {
    email,
    image,
    name,
  };
  newFacebookLogin.date = new Date().toISOString();
  axios.post(`${baseUrl}users`, newFacebookLogin)
    .then((response) => alert(JSON.stringify(response)));
};
export const postFeedback = (email, confirmemail, password, name, day, month,
  year, sex) => (dispatch) => {
  const newFeedback = {
    email,
    confirmemail,
    password,
    name,
    day,
    month,
    year,
    sex,
  };
  newFeedback.date = new Date().toISOString();

  axios.post(`${baseUrl}users`, newFeedback)
    .then((response) => alert(JSON.stringify(response)));


  // return fetch(baseUrl + 'users', {
  //     method: "POST",
  //     body: JSON.stringify(newFeedback),
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     credentials: "same-origin"
  // })
  // .then(response => {
  //     if (response.ok) {
  //       return response;
  //     } else {
  //       var error = new Error('Error ' + response.status + ': ' + response.statusText);
  //       error.response = response;
  //       throw error;
  //     }
  //   },
  //   error => {
  //         throw error;
  //   })
  // .then(response => response.json())
  // .then(response => alert(JSON.stringify(response)))
  // .catch(error =>  { console.log('post feedback', error.message); alert('Your feedback could not be posted\nError: '+error.message); });
};
