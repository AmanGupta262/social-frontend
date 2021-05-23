import React from 'react';

class PostList extends React.Component {
    render() {
        const { posts } = this.props;
        return (
            <div className="post-list-container">
                {posts.map(post => {
                    return (<div className="post-wrapper" key={post._id}>
                        <div className="post-header">
                            <div className="post-avatar">
                                <a href="/">
                                    <img
                                        src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                                        alt="user-pic"
                                    />
                                </a>
                                <div>
                                    <span className="post-author">{post.user}</span>
                                    <span className="post-time">a minute ago</span>
                                </div>
                            </div>
                            <div className="post-content">{post.content}</div>

                            <div className="post-comment-box">
                                <input
                                    placeholder="Start typing a comment"
                                />
                            </div>
                        </div>
                    </div>)
                })}
            </div>
        );
    }
}

export default PostList;