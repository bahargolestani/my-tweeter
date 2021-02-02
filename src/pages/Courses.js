import React from 'react';
import { Link } from 'react-router-dom';

const Courses = (props) => {
  const onPostClick = () => {
    props.history.push('/posts');
  };
  return (
    <div>
      course list
      <br />
      <button onClick={onPostClick}>لیست پست ها</button>
      <br />
      <Link to={'/posts'}>لیست پست ها</Link>
    </div>
  );
};

export default Courses;
