import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import MUIPlacesAutocomplete, {
    geocodeBySuggestion
} from 'mui-places-autocomplete';
export default class SearchPlaces extends Component {
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
            this.setState({ coordinates });
        });
    }

    render() {
        const { open } = this.state;

        return (
            <div>
                <MUIPlacesAutocomplete
                    onSuggestionSelected={this.onSuggestionSelected}
                    renderTarget={() => <div />}
                />
            </div>
        );
    }
}
