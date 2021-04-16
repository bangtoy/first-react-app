import React, { Component } from 'react'
import BlogPost from '../BlogPost/BlogPost'
// import LifeCycleComp from '../LifeCycleComp/LifeCycleComp'
// import YoutubeComp from '../../component/YoutubeComp/YoutubeComp'
// import Product from '../Product/Product'

export default class Home extends Component {
    state = {
         showComponent: true   
    }
    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 5000)   
    }
    
    render() {
        return (
            <div>
                {/* <YoutubeComp 
                    time="07:22"
                    title="Tutorial ReactJS Bag.1"
                    desc="2k ditonton, 10 Hari lalu"
                />
                <YoutubeComp  
                    time="08:11"
                    title="Tutorial ReactJS Bag.2"
                    desc="1.5k ditonton, 8 Hari lalu"
                />
                <YoutubeComp  
                    time="12:30"
                    title="Tutorial ReactJS Bag.2"
                    desc="1k ditonton, 4 Hari lalu"
                />
                <YoutubeComp 
                    time="15:52"
                    title="Tutorial ReactJS Bag.3"
                    desc="900x ditonton, 3 Hari lalu"
                 />
                <YoutubeComp /> */}

                {/* <Product /> */}

                {/* {
                    this.state.showComponent ?
                    <LifeCycleComp />
                    : null
                } */}

                <p>BlogPost</p>
                <hr/>
                <BlogPost />
            </div>
        )
    }
}
