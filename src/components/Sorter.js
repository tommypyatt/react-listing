import React from 'react';

class Sorter extends React.Component {
    clearExpanded () {
        const checkboxes = document.querySelectorAll('.view-checkbox');

        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });
    }

    render () {
        return (
            <div className='sorter'>
                <ul onClick={this.clearExpanded}>
                    <li className={this.props.sortedBy === 'price' ? 'selected' : ''} onClick={() => this.props.sortBy('price')}>Sort by price</li>
                    <li className={this.props.sortedBy === 'name' ? 'selected' : ''} onClick={() => this.props.sortBy('name')}>Sort by name</li>
                    <li className={this.props.sortedBy === 'rating' ? 'selected' : ''} onClick={() => this.props.sortBy('rating')}>Sort by star rating</li>
                </ul>
            </div>
        );
    }
}

module.exports = {
    Sorter: Sorter
}
