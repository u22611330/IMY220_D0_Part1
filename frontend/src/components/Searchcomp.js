import React from "react";

export class Searchcomp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'users', 
            selectedOption: 'name', 
            query: ''
        };

        this.inputt = React.createRef();
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleQueryChange = this.handleQueryChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    getOptions(category) {
        switch (category) {
            case 'users':
                return ['name', 'bio'];
            case 'playlists':
                return ['name', 'creator', 'hashtag'];
            case 'songs':
                return ['name', 'artist'];
            default:
                return [];
        }
    }

    handleCategoryChange(e) {
        const selectedCategory = e.target.value;
        this.setState({
            category: selectedCategory,
            selectedOption: this.getOptions(selectedCategory)[0], 
            query: '' 
        });
    }

    handleOptionChange(e) {
        this.setState({ selectedOption: e.target.value });
    }

    handleQueryChange(e) {
        this.setState({ query: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
      
        console.log(`Searching ${this.state.category} for ${this.state.selectedOption}: ${this.state.query}`);
    }

    render() {
        const { category, selectedOption, query } = this.state;
        const options = this.getOptions(category);

        return (
            <form id="form" onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="category">Category:</label>
                    <select id="category" onChange={this.handleCategoryChange} value={category}>
                        <option value="users">Users</option>
                        <option value="playlists">Playlists</option>
                        <option value="songs">Songs</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="options">Options:</label>
                    <select id="options" onChange={this.handleOptionChange} value={selectedOption}>
                        {options.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="query">Search:</label>
                    <input
                        type="search"
                        id="query"
                        name="q"
                        placeholder="Search..."
                        ref={this.inputt}
                        value={query}
                        onChange={this.handleQueryChange}
                    />
                </div>

                <div>
                    <input type="submit" value="Search" />
                </div>
            </form>
        );
    }
}
