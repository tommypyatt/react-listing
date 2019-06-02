import React from 'react';

class Sorter extends React.Component {
    render () {
        return (
            <div>
                <a className={this.props.sortedBy === 'price' ? 'selected' : ''} onClick={() => this.props.sortBy('price')}>Sort by price</a>
                <a className={this.props.sortedBy === 'name' ? 'selected' : ''} onClick={() => this.props.sortBy('name')}>Sort by name</a>
            </div>
        );
    }
}

module.exports = {
    Sorter: Sorter
}
