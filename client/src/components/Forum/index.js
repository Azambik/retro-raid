import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'

const Forum = ({ topics, title }) => {
  if (!topics.length) {
   return <h3>Not a lot going on here...</h3>;
  } 
  
  return (
        <Container>
            <Row>
              <h3>{title}</h3>
                { topics.map( topic => (
                    <div key={topic._id} className="card mb-3">
                        <p className="card-header">
                          <Link
                            to={`/profile/${topic.username}`}
                            style={{ fontWeight: 700 }}
                            className="text-light"
                          >
                            {topic.username}
                          </Link>{' '}
                          dungeon entered at {topic.createdAt}    
                        </p>
                        <div className="card-body">
                          <Link to={`/topic/${topic._id}`}>
                            <p>{topic.topicText}</p>
                            <p className="mb-0">
                              Posts: {topic.postCount} || Click to{' '}
                              {topic.postCount ? 'see' : 'start'} the raid!
                            </p>
                          </Link>
                        </div>
                    </div>
                ))}
            </Row>
        </Container>
    );
};
export default Forum;