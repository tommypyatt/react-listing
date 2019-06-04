import React from 'react';
import _ from 'lodash';
import { render } from 'react-dom';
import { ResultsList } from './components/ResultsList';
import { Sorter } from './components/Sorter';

class App extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            sortedBy: null,
            results: window.holidayResults
        }

        this.sortBy = this.sortBy.bind(this);
    }

    componentDidMount () {
        this.sortBy('price');
    }

    sortBy (sort) {
        var sorted = this.state.results.sort((a, b) => {
            if(a[sort] < b[sort]) return -1;
            if(a[sort] > b[sort]) return 1;
            return 0;
        });

        this.setState({
            sortedBy: sort,
            results: sorted
        });
    }

    render () {
        return <div>
            <div className='left-col'>
                <Sorter sortBy={this.sortBy} sortedBy={this.state.sortedBy} />
            </div>
            <div className='right-col'>
                <ResultsList results={this.state.results} />
            </div>
        </div>
    }
}

render(<App />, document.getElementById('app'));
