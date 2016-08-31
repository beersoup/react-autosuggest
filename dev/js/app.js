import React, {Component} from 'react';
import Country from './country';
require('../scss/style.scss');


class App extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            imageSrc: '',
            country: '',
            countries: []
        } 
    }

    handleChange (event) {
        this.setState({search: event.target.value});
        this.createList()
    }
    
    createList () {
        let sok = this.refs.searchInput.value
        let filteredCountries = this.props.countries.filter(
            (country) => {
                return country.country.toLowerCase().indexOf(sok.toLowerCase()) !== -1;
            }
        )
        let topCountry = filteredCountries[0];
        this.setState({ country: topCountry })
        this.setState({ countries: filteredCountries })
        console.log("COuntries in list ", filteredCountries.length);
        this.getBackgroundImage(topCountry)
    }

    getBackgroundImage (topcountry) {
        console.log("Country to load image for", topcountry)
        if(topcountry) {
            let takeCountry = topcountry.country
            console.log('Get image')
            let Flickurl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=376b144109ffe90065a254606c9aae3d&";
            let tags = "&tags=" + takeCountry;
            let tagmode = "&tagmode=any";
            let jsonFormat = "&format=json&nojsoncallback=1";
            let FinalURL = Flickurl + tags + tagmode + jsonFormat;
            console.log(FinalURL)

            $.getJSON(FinalURL, function(photos) {
                let photo = photos.photos.photo[0];
                console.log(photo);
                if(photo) {
                    let photoUrl = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg";
                    console.log("Photo url ", photoUrl)
                    this.setState({ imageSrc: photoUrl })
                }
                
            }.bind(this));
        }

    }

    render() {
        
        if(this.state.search) {
            var containerStyle = {
                backgroundImage: 'url(' + this.state.imageSrc + ')',
                backgroundRepeat: 'no-repeat center center fixed',
                backgroundSize: 'cover',
            } 
        }
        
        return (
            <div className="container-fluid" style={containerStyle}>
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-sm-offset-3">
                                <div id="search_container">
                                    <h1 className="text-center">LAND</h1>
                                        <div className="input-group stylish-input-group">
                                            <input type="text"
                                                   ref="searchInput"
                                                   value={this.state.search}
                                                   onChange={this.handleChange.bind(this)}
                                                   className="form-control"
                                                   placeholder="Type country" />
                                            <span className="input-group-addon">
                                                <button type="submit">
                                                    <span className="glyphicon glyphicon-search"></span>
                                                </button>
                                            </span>
                                        </div>
                                    <div className={(!this.state.search ? 'hidden' : 'show')}>{this.state.countries.map((country) => {
                                        return <Country country={country} key={country.id} />
                                    })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default App;