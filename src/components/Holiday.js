import React from 'react';

class Holiday extends React.Component {
    constructor (props) {
        super(props);
    }
    
    priceFormat (number) {
        return '£' + number.toFixed(2);
    }

    render () {
        return (
            <li className='result-item'>
                <div className='image'>
                    <label htmlFor={'view-more-' + this.props.result.id}>View more</label>
                </div>
                <div className='info'>
                    <h2>{this.props.result.name}</h2>
                    <h3>Costa Adeje, Tenerife</h3>
                    <div className='rating-outer'>
                        <div className='rating-inner' style={{width: (this.props.result.rating * 20) + '%'}}></div>
                    </div>
                    <p className='humans'>2 Adults, 2 Children</p>
                    <a>
                        <span>Book now</span>
                        <span className='price'>{this.priceFormat(this.props.result.price)}</span>
                    </a>
                    <input className="view-checkbox" type="checkbox" id={'view-more-' + this.props.result.id} />
                    <p className="description">Lorem ipsum</p>
                </div>
            </li>
        );            
    }
}

module.exports = {
    Holiday: Holiday
}
