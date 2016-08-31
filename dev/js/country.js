import React, {Component} from 'react';

class Country extends Component {
    render() {

        return(
            <div className="search-list">
                {this.props.country.country}
            </div>
        );
    }

}

export default Country;