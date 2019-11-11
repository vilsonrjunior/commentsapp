import React from 'react';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
import faker from 'faker'

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Junior"
          timeAgo="Today at 3:00PM"
          comment={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
          />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Junior"
          timeAgo="Today at 3:00PM"
          comment={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
          />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Junior"
          timeAgo="Today at 3:00PM"
          comment={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
          />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Junior"
          timeAgo="Today at 3:00PM"
          comment={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
          />
      </ApprovalCard>
    </div>
  );
}

export default App;
