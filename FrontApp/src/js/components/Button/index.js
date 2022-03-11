import React from "react";

function Button({
    textBtn, 
    onDoubleClick, 
    deletePost, 
    selectId, 
    addPost, 
    selectProfile, 
    deleteProfile
  }) {
  const id = selectId ? selectId : '';
  const clickFunc = () => {
    deletePost ? deletePost(id) : '';
    addPost ? addPost() : '';
    selectProfile ? selectProfile() : '';
    deleteProfile ? deleteProfile() : '';
  };

  return <button 
    onDoubleClick={onDoubleClick} 
    onClick={() => clickFunc()}
  > 
    {textBtn} 
  </button>;
}

export default Button;