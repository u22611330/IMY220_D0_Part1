import React from "react";
import { Link } from "react-router-dom";
import { ProfilePreview } from "../components/ProfilePreview";

export class ProfilePreviewFriends extends React.Component {
  render() {
      return (
      <div>
       
        
         
            <li>
              <Link to={`/profile/${this.props.user.id}`}>
                <img src={this.props.user.src} alt={this.props.user.name} />
                <h2>{this.props.user.name}</h2>
                <button>{this.props.user.isFriend ? "Remove Friend" : "Add Friend"}</button>
              </Link>
            </li>
          
          </div>
     
    );
  }
}
