// Contents of Person.js inside the new "components" directory
import React from "react";
// Since we're only defining a class but not rendering it, we don't need
// to import ReactDOM here
export class Person extends React.Component {
render(){
return (
<li>{`${this.props.person.name[0]}. ${this.props.person.surname}`}</li>
);
}
}