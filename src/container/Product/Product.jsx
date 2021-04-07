import React, { Component , Fragment} from 'react'
import './Product.css'

export default class product extends Component {
    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://etanee.id/static/media/etanee-frozen-blue.7be0c80b.png" alt=""/>
                    </div>
                    <div className="troley">
                        <img src="" alt=""/>
                        <div className="count">3</div>
                    </div>
                </div>

                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/sayur/Lodeh.jpg" alt=""/>
                    </div>
                    <p className="product-title"></p>
                    <p className="product-price"></p>
                    <div className="counter">
                        <button className="minus"></button>
                        <input type="text" value={4}/>
                        <button className="plus"></button>
                    </div>
                </div>
            </Fragment>
        )
    }
}
