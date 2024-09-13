import React, { Component } from "react";
import { Song } from "./Song";

export class EditPlaylist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false 
    };
    this.handleEdit = this.handleEdit.bind(this);
  }

 
  handleEdit() {
    this.setState((prevState) => ({
      isEditing: !prevState.isEditing
    }));
  }

  render() {
    const { playlist } = this.props; 
    const { isEditing } = this.state; 

    return (
      <div>
        <button onClick={this.handleEdit}>
          {isEditing ? "Stop Editing" : "Edit Playlist"}
        </button>

        <ul>
          {playlist.songs.map((song, index) => (
            <li key={index}>
              <Song song={song} />
             
              {isEditing && <button>Delete</button>}
            </li> 
          ))}
        </ul>
      </div>
    );
  }
}
