import React, {Component} from 'react';
import Contact from './contact';
require('../scss/style.scss');


class App extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        }
    }
    handleChange (event) {
        let valueSearch = this.refs.searchInput.value
        console.log(valueSearch)
        this.setState({search: event.target.value});
    }

    render() {
        let filteredContacts = this.props.contacts.filter(
            (contact) => {
                return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        )
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <div id="search_container">
                            <h1 className="text-center">MORO</h1>
                                <div className="input-group stylish-input-group">
                                    <input type="text"
                                           ref="searchInput"
                                           value={this.state.search}
                                           onChange={this.handleChange.bind(this)}
                                           className="form-control"
                                           placeholder="Type Text" />
                                    <span className="input-group-addon">
                                        <button type="submit">
                                            <span className="glyphicon glyphicon-search"></span>
                                        </button>
                                    </span>
                                </div>
                            <div className={(!this.state.search ? 'hidden' : 'show')}>{filteredContacts.map((contact) => {
                                return <Contact contact={contact} key={contact.id} />
                            })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default App;