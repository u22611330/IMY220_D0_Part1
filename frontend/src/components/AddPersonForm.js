// Contents of AddPersonForm.js inside the new "components" directory
import React from "react";
export class AddPersonForm extends React.Component{
// rest of class definition goes here (see L20 – React 2)
    constructor(props){
        super(props);
        this.submit=this.submit.bind(this);
        this.nameInput=React.createRef();
        this.surnameInput=React.createRef();

    }
    submit(e){
        e.preventDefault();
        let name=this.nameInput.current.value;
        let surname=this.surnameInput.current.value;
        this.props.onNewPerson(name,surname);

    }
    render(){
        return(
            <form onSubmit={this.submit}>
                <input type="text" ref={this.nameInput}/><br/>
                <input type="text" ref={this.surnameInput}/><br/>
                <input type="submit" value="Add"/><br/>
            

            </form>
        );
    }
}