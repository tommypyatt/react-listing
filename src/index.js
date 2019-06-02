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
            results: [
                {
                    name: 'Iberostar Grand Salome',
                    price: 1136.50
                }, {
                    name: 'Aguamarina Golf Hotel',
                    price: 696.80
                }, {
                    name: 'Las Piramides Resort',
                    price: 499.99
                }
            ]
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
            <h1 className='page-title'>Listing App</h1>
            <Sorter sortBy={this.sortBy} sortedBy={this.state.sortedBy} />
            <ResultsList results={this.state.results} />
        </div>
    }
}

render(<App />, document.getElementById('app'));
