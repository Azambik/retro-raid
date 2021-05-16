import React from 'react';
import Reply from '../Reply';
const DisplayPost = () => {
  
  return (
    <div className="my-2">
      <h1>Test post title for formating</h1>
      <p>posted by "Username" on "time and date"</p>
      <textarea>This is the text box where all the post will go</textarea>
      <Reply></Reply>
      <button>Post</button>
        </div>
  )
}

export default DisplayPost;

