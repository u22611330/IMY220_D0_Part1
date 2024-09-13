// Contents of AddPersonForm.js inside the new "components" directory
import React from "react";
export class AddPlaylist extends React.Component{
// rest of class definition goes here (see L20 – React 2)
    constructor(props){
        super(props);
        this.submit=this.submit.bind(this);
       
        this.id=React.createRef();
        this.name=React.createRef();
        this.imagesrc=React.createRef();
        this.creator=React.createRef();
        // id: "1",
        // name: "Chill Vibes",
        // image: "https://example.com/image1.jpg",
        // creator: "John Doe",
        // date: "2024-09-12",
        // songs: [


    }
    submit(e){
        e.preventDefault();
        let idin=this.id.current.value;
        let name=this.name.current.value;
        let image=this.imagesrc.current.value;
        let creat=this.creator.current.value;
        let today  =new Date();
        const month = today.getMonth()+1;
        const year = today.getFullYear();
        const date = today. getDate();
        const currentDate = month + "/" + date + "/" + year;
        this.props.onNewSong(idin,name,image,creat,currentDate);

    }
    render(){
        return(
            <form onSubmit={this.submit}>
                <p>Add Song</p>
               ID: <input type="text" ref={this.id}/><br/>
               Name: <input type="text" ref={this.name}/><br/>
               Image SourceLink: <input type="text" ref={this.imagesrc}/><br/>
               Creator: <input type="text" ref={this.creator}/><br/>
                
                <input type="submit" value="Add"/><br/>
            

            </form>
        );
    }
}