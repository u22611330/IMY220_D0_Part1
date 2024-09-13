import React from "react";
import { Song } from "./Song";
import { Link, useParams } from "react-router-dom";
import { EditPlaylist } from "./Editplaylist";

export function Playlistsview({ playlists }) {
  const { id } = useParams(); // Get playlist ID from the URL
  const playlist = playlists.find(p => p.id === id); // Find the playlist by ID

  if (!playlist) {
    return <div>Playlist not found</div>;
  }

  return (
    <div>
      <Link to="/home"><button>Back</button></Link>
      <h1>{playlist.name}</h1>
      <p>Created by: {playlist.creator}</p>

      <EditPlaylist playlist={playlist} />
    </div>
  );
}
