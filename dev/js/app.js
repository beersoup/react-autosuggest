import React, {Component} from 'react';
require('../scss/style.scss');


class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <div id="search_container">
                            <h1 className="text-center">MORO</h1>
                            <div className="input-group stylish-input-group">
                                <input type="text" className="form-control" placeholder="Search" />
                                <span className="input-group-addon">
                                    <button type="submit">
                                        <span className="glyphicon glyphicon-search"></span>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default App;