// Contents of AddPersonForm.js inside the new "components" directory
import React from "react";
import {Person} from "./Person";
import {AddPersonForm} from "./AddPersonForm";
export class PersonList extends React.Component {
// rest of class definition goes here (see L20 – React 2)
constructor(props){
    super(props);
    this.state={people:this.props.people || []};
    this.addPerson=this.addPerson.bind(this);

}

addPerson(name,surname){
    this.setState({people:[...this.state.people,{name,surname}]});

}

render(){
    return(
        <div className="container">
            <h1>{this.state.people.length} in the list:</h1>
            <ul>
                {this.state.people.map((person,i)=><Person key={i} person={person}/>)}
            </ul>
            <div>
                <AddPersonForm onNewPerson={this.addPerson}/>
            </div>
        </div>
    );
}



}

var peopleList1={
    name:"Troy", surname:"Barnes",
    name:"Abed", surname:"Nadir"
}