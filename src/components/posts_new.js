import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
//import { Link } from 'react-router-dom';


class PostsNew extends Component {
  render() {
    
    return (
      <div>
        <form>
          <Field 
            name="title"
            component={}
        </form>
        PostsNew!
      </div>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);