import React from "react";

function PostCard({author, id, title, className, selectItem}) {
  return <div key={id} className={className} onClick={() => {selectItem(id)}}>
    <h4> {id} - {author} {className === 'active' ? 'active' : ''} </h4>
    <p> {title} </p>
  </div>
}

export default PostCard;