
import axios from 'axios';
import React from 'react'
import {baseurl} from '../config/baseurl';

function Contact() {


  const handleSubmit = () => {
    console.log("webform contact handle submit");
    const message = {
      "webform_id" : "contact",
      "name" : "Test",
      "subject" : "123456789",
      "message" : "Hello"
  }

  axios(`${baseurl.URL}/webform_rest/submit?_format=json`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    data: message
  })
  .then(res=>console.log(res))
  .catch(err=>console.log(err))
  }

  
  return (
    <div>
      <h1>Contact form</h1>
      <div onClick={handleSubmit}>Submit</div>
    </div>
  )
}

export default Contact
