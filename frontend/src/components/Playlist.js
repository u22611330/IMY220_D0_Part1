import React from "react";
import { Link } from "react-router-dom";
import { AddPlaylist } from "./AddPlaylist";

export class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    };
    this.toggleForm = this.toggleForm.bind(this); 
  }

  
  toggleForm() {
    this.setState((prevState) => ({
      showForm: !prevState.showForm,
    }));
  }

  render() {
    const { playlists } = this.props;
    const { showForm } = this.state; 

    if (!playlists || playlists.length === 0) {
     
      return (<div>
        <button onClick={this.toggleForm}>
          {showForm ? "Hide Form" : "Add Playlist"}
        </button>
        {showForm && <AddPlaylist />}
        No playlists available</div>);
    }

    return (
      <div className="playlist-previews">
        <button onClick={this.toggleForm}>
          {showForm ? "Hide Form" : "Add Playlist"}
        </button>
       
        {showForm && <AddPlaylist />}

        {playlists.map((playlist, index) => (
          <div key={index} className="playlist-preview">
            <img src={playlist.image} alt={playlist.name} />
            <h3>{playlist.name}</h3>
            <p>Created by: {playlist.creator}</p>
            <p>Date: {playlist.date}</p>
            <Link to={`/playlists/${playlist.id}`}>View Playlist</Link>
          </div>
        ))}
      </div>
    );
  }
}
