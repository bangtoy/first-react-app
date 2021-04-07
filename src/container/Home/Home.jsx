import React, { Component } from 'react'
import YoutubeComp from '../../component/YoutubeComp/YoutubeComp'

export default class Home extends Component {
    render() {
        return (
            <div>
                <YoutubeComp 
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
                <YoutubeComp />
            </div>
        )
    }
}
