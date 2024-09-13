import React from "react";
// Since we're only defining a class but not rendering it, we don't need
// to import ReactDOM here
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Home } from "./pages/Home";
import { Friends } from "./pages/Friends";
import { Search } from "./pages/Search";
import { Playlistsview } from "./components/Playlistsview";
import { Profile } from "./pages/Profile";
import { Splash } from "./pages/Splash";
import { ProfilePreview } from "./components/ProfilePreview";
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

  const users = [
    { id: "1", name: "John Doe", src: "https://example.com/johndoe.jpg", bio: "Loves coding.", isFriend: true },
    { id: "1234", name: "Jane Smith", src: "https://example.com/janesmith.jpg", bio: "Avid traveler.", isFriend: false },
  ];
export class App extends React.Component {
render(){
return (
    <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path="/" element={<Splash/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/friends" element={<Friends users={users}/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/playlists/:id" element={<Playlistsview playlists={playlists} />} />
            <Route path="*" element={<Home />}/>
            <Route path="/profile/:id" element={<ProfilePreview users={users} />} />

        </Routes>
    </BrowserRouter>

    

);
}
}