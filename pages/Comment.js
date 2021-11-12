import { Comment, Avatar } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';

const ExampleComment = ({ children , content , openbox , comments , id }) => {
  const childComments = () => comments.filter(c => c.parent_id === id)
  return(
      <Comment
        actions={[<span key="comment-nested-reply-to" onClick={()=> openbox(id)}>Reply to </span>]}
        author={<a>Han Solo</a>}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <p>
            {content}

          </p>
        }
      >
        {childComments().map((item) => (
                <ExampleComment id={item.id} content={item.comment + "I am from Parent"} comments={comments} openbox={openbox} />
            ))
        }
        {console.log("Child comment are here is here" , childComments())}
        {/* {children} */}
      </Comment>
    );
}
  export default ExampleComment ;