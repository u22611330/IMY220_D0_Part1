// Contents of AddPersonForm.js inside the new "components" directory
import React from "react";
export class AddSongCom extends React.Component{
// rest of class definition goes here (see L20 – React 2)
    constructor(props){
        super(props);
        this.submit=this.submit.bind(this);
       
        this.textInput=React.createRef();
        this.username=React.createRef();



    }
    submit(e){
        e.preventDefault();
        let link=this.textInput.current.value;
        let username=this.username.current.value;
        let today  =new Date();
        const month = today.getMonth()+1;
        const year = today.getFullYear();
        const date = today. getDate();
        const currentDate = month + "/" + date + "/" + year;
        this.props.onNewCom(username,link,currentDate);

    }
    render(){
        return(
            <form onSubmit={this.submit}>
                <p>Add Comment</p>
                Username:<input type="text" ref={this.username}/>
               <br/>
                <input type="text" ref={this.textInput}/><br/>
                
                <input type="submit" value="Send"/><br/>
            

            </form>
        );
    }
}