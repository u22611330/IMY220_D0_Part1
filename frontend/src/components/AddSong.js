import React from "react";

export class AddSong extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            link: '',
            linkError: '',
            formValid: false
        };
        this.linkInput = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateLink = this.validateLink.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({ link: value }, this.validateLink);
    }

    validateLink() {
        const { link } = this.state;
        let linkError = '';
        let formValid = true;

       
        if (!link.startsWith('https://open.spotify.com/track/')) {
            linkError = 'Please enter a valid Spotify link';
            formValid = false;
        }

        this.setState({ linkError, formValid });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { link, formValid } = this.state;
        if (formValid) {
            let today = new Date();
            const month = today.getMonth() + 1;
            const year = today.getFullYear();
            const date = today.getDate();
            const currentDate = `${month}/${date}/${year}`;
            this.props.onNewSong(link, currentDate);
            this.setState({ link: '', linkError: '', formValid: false });
        }
    }

    render() {
        const { link, linkError } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <p>Add Song</p>
                <label>
                    Spotify Link:
                    <input
                        type="text"
                        value={link}
                        onChange={this.handleChange}
                    />
                    {linkError && <div style={{ color: 'red' }}>{linkError}</div>}
                </label>
                <br />
                <input type="submit" value="Add" />
            </form>
        );
    }
}
