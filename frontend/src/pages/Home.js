import React from "react";
import { SongList } from "../components/SongList";
import { Playlist } from "../components/Playlist";
// Mary-Jane Pandaram u22611330
const playlists = [
    {
      id: "1",
      name: "Chill Vibes",
      image: "https://example.com/image1.jpg",
      creator: "John Doe",
      date:"2024-09-12",
      songs: [
        { link: "https://open.spotify.com/track/1SunsetDreamLink",datead: "2024-09-12" },
        { link: "https://open.spotify.com/track/2LazyAfternoonLink",datead: "2024-09-12" },
        { link: "https://open.spotify.com/track/3WavesLink",datead: "2024-09-12" }
      ]
    },
    {
      id: "1234",
      name: "Workout Pump",
      image: "https://example.com/image2.jpg",
      creator: "Jane Smith",
      date:"2024-09-10",
      songs: [
        { link: "https://open.spotify.com/track/1EnergyBoostLink" ,datead: "2024-09-10"},
        { link: "https://open.spotify.com/track/2PushItLink",datead: "2024-09-10" },
        { link: "https://open.spotify.com/track/3RunFastLink",datead: "2024-09-10" }
      ]
    }
  ];
  
  const songs = [
    { link: "https://open.spotify.com/track/4FeelTheBeatLink", datead: "2024-09-15" },
    { link: "https://open.spotify.com/track/5GrooveMasterLink", datead: "2024-09-16" },
    { link: "https://open.spotify.com/track/6RhythmJourneyLink", datead: "2024-09-17" }
  ];
  
  
export class Home extends React.Component {
    constructor(props){
        super(props);
        this.handleplaylist=this.handleplaylist.bind(this);
        this.handlesonglist=this.handlesonglist.bind(this);
        this.state={toggledsong:true};

    }
    handleplaylist(){
        this.setState({toggledsong:false});
    
    }
    handlesonglist(){
        this.setState({toggledsong:true});
    
    }
    render(){
        return (
          
            <div>
            {/* <h1>Hello Home Page!</h1> */}
           
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
                    <div style={{ color: 'white',  display: 'block', padding: '10px 15px' }} onClick={this.handlesonglist}>Songs</div>
                    <div style={{ color: 'white',  display: 'block', padding: '10px 15px' }}onClick={this.handleplaylist}>Playlists</div>
                </div>
                {this.state.toggledsong?<SongList songs={songs}/>:<Playlist playlists={playlists}/>}
            </div>
                 
          
           
        );
}
}