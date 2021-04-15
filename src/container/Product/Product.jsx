import React, { Component , Fragment} from 'react'
import CardProduct from '../CardProduct/CardProduct'
import './Product.css'

export default class Product extends Component {
    state = {
        order: 0
    }

    handleCounterChange = (newValue) =>{
        this.setState({
            order: newValue
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
                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)}/>
            </Fragment>
        )
    }
}
