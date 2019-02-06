import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import MUIPlacesAutocomplete, {
    geocodeBySuggestion
} from 'mui-places-autocomplete';
import { connect } from 'react-redux';
import * as actions from '../actions';
class SearchPlaces extends Component {
    constructor() {
        super();

        this.state = { coordinates: null };

        this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
    }

    onSuggestionSelected(suggestion) {
        // Once a suggestion has been selected by your consumer you can use the utility geocoding
        // functions to get the latitude and longitude for the selected suggestion.
        geocodeBySuggestion(suggestion).then(results => {
            // Just use the first result in the list to get the geometry coordinates
            const { geometry } = results[0];

            const coordinates = {
                lat: geometry.location.lat(),
                lng: geometry.location.lng()
            };

            //save to redux state
            this.props.setCoordinates(coordinates);
            this.setState({ coordinates });
        });
    }

    render() {
        const { open } = this.state;

        return (
            <div style={{ position: 'relative' }}>
                <MUIPlacesAutocomplete
                    onSuggestionSelected={this.onSuggestionSelected}
                    renderTarget={() => <div />}
                />
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        feed: state.weather.coord
    };
}
export default connect(
    mapStateToProps,
    actions
)(SearchPlaces);
