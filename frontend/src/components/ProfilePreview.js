import React from "react";
import { useParams } from "react-router-dom";

export function ProfilePreview({ users }) {
  const { id } = useParams(); 
  const user = users.find(user => user.id === id); 

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <img src={user.src} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <button>{user.isFriend ? "Remove Friend" : "Add Friend"}</button>
    </div>
  );
}
