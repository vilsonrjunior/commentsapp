import React from 'react'
import faker from 'faker'

export default function CommentDetail() {

  return (
    <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {faker.name.firstName()}
          </a>
        <div className="metadata">
          <span className="date">Today at 06:00pm</span>
        </div>
          <div className="text">{faker.lorem.sentence()}</div>
        </div>
    </div>
    )
}
