import React, { Component , Fragment} from 'react'
import './Product.css'

export default class product extends Component {
    state = {
        order: 0
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        })
    }
    handleMinus = () => {
        if(this.state.order > 0)
        this.setState({
            order: this.state.order - 1
        })
   
    }

    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://etanee.id/static/media/etanee-frozen-blue.7be0c80b.png" alt=""/>
                    </div>
                    <div className="troley">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEESURBVHgBvVTRDYIwEL0yAJENdBM3UCdwBGUCwya4gRvICG4AGxQIv1BfDSUCLaGt8SXN9ejlePeuV6rrOscSclVVdaUfIBBCDA5j7MY535AnmNqA6RNmT34owjDcBcpr2zYhT6iqh6RRFGUwGXkA8iWjpBI+bMHyhdLTWVLJFocFOaDrupPaB9NDVYIlUhAqjEkhwQOmJAtMZZslxR9LSHCn9Rix1CaVgAQHWodsVXObprn0I5uTI2ZM0cVrb2NyBJt+AEsOYzv/n/FUjq77se1d/X6U/geUf5QSyHcWTTu7xOk0lV3f9m4JrSJDUmOc7p4OTYJWS5NljDM2SgYuvQNLcW+3qK47ypjZlwAAAABJRU5ErkJggg==" alt=""/>
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>

                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/sayur/Lodeh.jpg" alt=""/>
                    </div>
                    <p className="product-title">Paket Sayur Lodeh</p>
                    <p className="product-price">Rp 10,000</p>
                    <div className="counter">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input type="text" value={this.state.order}/>
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}
