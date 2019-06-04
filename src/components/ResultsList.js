import React from 'react';
import { Holiday } from './Holiday';

class ResultsList extends React.Component {
    render () {
        return (
            <div className='results'>
                <ul>
                    {this.props.results.map((result, index) => {
                        return (
                            <Holiday result={result} key={index} />
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
