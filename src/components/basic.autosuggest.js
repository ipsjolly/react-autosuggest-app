// basic.autosuggest.js
import React from 'react';
import Autosuggest from 'react-autosuggest';
import './autosuggest.css';

class BasicAutoSuggest extends React.Component {
    constructor() {
        super();

        //Define state for value and suggestion collection
        this.state = {
            value: '',
            suggestions: []
        };
    }

    // Collection of data
    cars = [
        {
            name: 'Suzuki',
            origin: 'Japan',
            year: 1909
        },
        {
            name: 'Fiat',
            origin: 'Italy',
            year: 1899
        },
        {
            name: 'Honda',
            origin: 'Japan',
            year: 1948
        },
        {
            name: 'Porch',
            origin: 'Germany',
            year: 1954
        },
        {
            name: 'Audi',
            origin: 'Germany',
            year: 1910
        }
    ];

    // Filter logic
    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : this.cars.filter(lang =>
            lang.name.toLowerCase().slice(0, inputLength) === inputValue
        );
    };

    // Trigger suggestions
    getSuggestionValue = suggestion => suggestion.name;

    // Render Each Option
    renderSuggestion = suggestion => (
        <div>
            {suggestion.name} | Founded in {suggestion.year}, {suggestion.origin}
        </div>
    );

    // OnChange event handler
    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    // Suggestion rerender when user types
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    // Triggered on clear
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;

        // Option props
        const inputProps = {
            placeholder: 'Type car name',
            value,
            onChange: this.onChange
        };

        // Adding AutoSuggest component
        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}

export default BasicAutoSuggest;