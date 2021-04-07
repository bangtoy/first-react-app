import React from 'react'
import './YoutubeComp.css'

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
           <div className="img-thumb">
               <img src="https://i.ytimg.com/vi/5kHyviqjhCk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDF0yuD_ntjcyW46BiPDkjd2v68dw" alt=""/>
               <p className="time">{props.time}</p>
           </div>
           <p className="title">{props.title}</p>
           <p className="desc">{props.desc}</p> 
        </div>
    )
}

YoutubeComp.defaultProps = {
    time : '00:00',
    title: 'Default Title',
    desc: 'xx ditonton, x hari lalu'
}

export default YoutubeComp
