import React from "react";
import { ProfilePreview } from "../components/ProfilePreview";
import { ProfilePreviewFriends } from "../components/ProfilePreviewFriends";
// Since we're only defining a class but not rendering it, we don't need
// to import ReactDOM here

// const users = [
//     { id: "1", name: "John Doe", src: "https://example.com/johndoe.jpg", bio: "Loves coding.", isFriend: true },
//     { id: "1234", name: "Jane Smith", src: "https://example.com/janesmith.jpg", bio: "Avid traveler.", isFriend: false },
//   ];
//   const friends = users.filter(user => user.isFriend);
export class Friends extends React.Component {
render(){
    const { users } = this.props; 
    const friends = users.filter(user => user.isFriend);
return (
    <ul>
   {friends.map((element,i)=><ProfilePreviewFriends key={i} user={element}/>)}
   </ul>
);
}
}