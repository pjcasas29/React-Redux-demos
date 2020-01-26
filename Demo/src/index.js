// Import React and React-DOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker'
import ApprovalCard from "./ApprovalCard"
//Create React component
const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>
      <CommentDetail
        author="Sam"
        timeAgo="5:00PM"
        comment="Hi"
        avatar={faker.image.avatar()}/>
    </ApprovalCard>
    <ApprovalCard>
    <CommentDetail
      author="Jane"
      timeAgo="6:00PM"
      comment="good post"
      avatar={faker.image.avatar()}/>
    </ApprovalCard>
    <ApprovalCard>
    <CommentDetail
      author="Bob"
      timeAgo="7:00PM"
      comment="Meh"
      avatar={faker.image.avatar()}/>
    </ApprovalCard>
    </div>
  )
};
// Take the React component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
