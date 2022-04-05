import React from 'react';

const Post = ({post}) => {
    const {userId, id, title, body} = post
    return (
        <div>
            <h2>{userId} {id} {title}</h2>
            <div>{body}</div>
        </div>
    );
};

export default Post;