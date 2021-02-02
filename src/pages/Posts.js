import React from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
  return (
    <div>
      <div>
        <h3>پست یک</h3>
        <p>تو این پست قراره این کاروبکنیم</p>
        <Link to={'/posts/1'}>جزئیات پست</Link>
      </div>
      <div>
        <h3>پست دو</h3>
        <p>تو این پست قراره این کاروبکنیم</p>
        <Link to={'/posts/2'}>جزئیات پست</Link>
      </div>
      <div>
        <h3>پست سه</h3>
        <p>تو این پست قراره این کاروبکنیم</p>
        <Link to={'/posts/3'}>جزئیات پست</Link>
      </div>
      <div>
        <h3>پست چهار</h3>
        <p>تو این پست قراره این کاروبکنیم</p>
        <Link to={'/posts/4'}>جزئیات پست</Link>
      </div>
      <div>
        <h3>پست پنج</h3>
        <p>تو این پست قراره این کاروبکنیم</p>
        <Link to={'/posts/5'}>جزئیات پست</Link>
      </div>
    </div>
  );
};

export default Posts;
