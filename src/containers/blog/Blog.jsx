import React from 'react';
import './Blog.css';

import {blog01, blog02, blog03, blog04, blog05} from './imports.js';

import { Article } from '../../components';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, 
        We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imageUrl={blog01} date="May 25 2021" title="Chatgpt and Open AI is the future. Let us explore how is it?"/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imageUrl={blog02} date="May 25 2021" title="Chatgpt and Open AI is the future. Let us explore how is it?"/> 
          <Article imageUrl={blog03} date="May 25 2021" title="Chatgpt and Open AI is the future. Let us explore how is it?"/> 
          <Article imageUrl={blog04} date="May 25 2021" title="Chatgpt and Open AI is the future. Let us explore how is it?"/> 
          <Article imageUrl={blog05} date="May 25 2021" title="Chatgpt and Open AI is the future. Let us explore how is it?"/> 
        </div>
      </div>
    </div>
  )
}

export default Blog;