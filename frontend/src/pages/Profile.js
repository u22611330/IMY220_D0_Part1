import React from "react";
import { SongList } from "../components/SongList";
import { Playlist } from "../components/Playlist";
import { Info } from "../components/Info";
// Mary-Jane Pandaram u22611330

const user = {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    social: [
      { name: "Facebook" },
      { name: "Twitter" },
      { name: "Instagram" }
    ],
    bio: "Loves coding and outdoor adventures.",
    genres: [
      { name: "Rock" },
      { name: "Jazz" },
      { name: "Classical" }
    ]
  };
export class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state={currentSection:"info"};
        this.handle=this.handle.bind(this);
        this.handleInfoClick = this.handleInfoClick.bind(this);
        this.handleSongsClick = this.handleSongsClick.bind(this);
        this.handlePlaylistClick = this.handlePlaylistClick.bind(this);

    }
    handle(section){
        this.setState({ currentSection: section });
    }
 

    handleInfoClick(e) {
        e.preventDefault();
        this.handle('info');
    }

    handleSongsClick(e) {
        e.preventDefault();
        this.handle('songs');
    }

    handlePlaylistClick(e) {
        e.preventDefault();
        this.handle('playlist');
    }

   
    render(){
        return (
          
            <div>
            {/* <h1>Hello Profile Page!</h1> */}
           <button>Logout</button>
           <button>Deactivate</button>
           <button>Delete</button>
                <div style={{
                    height: '100vh', // Full viewport height
                    width: '200px', // Width of the sidebar
                    position: 'fixed', // Fixed position
                    right: 0, // Align to the right side
                    top: 0, // Align to the top
                    backgroundColor: '#111', // Background color
                    paddingTop: '20px', // Padding from the top
                    color: 'white', // Text color
                    boxShadow: '-2px 0 5px rgba(0,0,0,0.5)' // Optional shadow effect
                }}>
                    <div style={{ color: 'white',  display: 'block', padding: '10px 15px' }} onClick={this.handleInfoClick}>Info</div>
                    <div style={{ color: 'white',  display: 'block', padding: '10px 15px' }} onClick={this.handleSongsClick}>Songs</div>
                    <div style={{ color: 'white',  display: 'block', padding: '10px 15px' }} onClick={this.handlePlaylistClick}>Playlists</div>
                </div>
                {this.state.currentSection === 'info' && <div><h2>Info Section</h2><Info user={user}/></div>}
                    {this.state.currentSection === 'songs' && <div><h2>Songs Section</h2><SongList/></div>}
                    {this.state.currentSection === 'playlist' && <div><h2>Playlists Section</h2><Playlist/></div>}
                
            </div>
                 
          
           
        );
}
}