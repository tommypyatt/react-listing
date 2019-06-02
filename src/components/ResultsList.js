import React from 'react';

class ResultsList extends React.Component {
    render () {
        return (
            <div>
                <ul>
                    {this.props.results.map((result, index) => {
                        return (
                            <li key={index}>{result.name} is {result.price}</li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

module.exports = {
    ResultsList: ResultsList
}
