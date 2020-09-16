import React from 'react';

export default ({ comments }) => {
    
    const renderedComments = comments.map(comment => {
        let content;

        if(comment.status === 'approved') {
            content = comment.content;
        }
        if(comment.status === 'pending') {
            content = 'This comment is awaiting automated moderation';
        }
        if(comment.status === 'rejected') {
            content = 'This comment has been automatically rejected - if you think this moderation was a mistake then please contact someone';
        }
        
        return <li key={comment.id}>{content}</li>
    })

    return(
        <ul>
            {renderedComments}
        </ul>
    );
};