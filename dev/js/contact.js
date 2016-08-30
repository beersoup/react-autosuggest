import React, {Component} from 'react';

class Contact extends Component {
    render() {

        return(
            <div className="search-list">
                {this.props.contact.name} {this.props.contact.last}
            </div>
        );
    }

}

export default Contact;