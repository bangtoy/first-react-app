import React, { Component, Fragment } from 'react'
import { Post } from '../../component/Post/Post'
import './BlogPost.css'

export default class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: "test",
            body: "set",
            userId: 1
        }
    }

    getPostAPI = () => {
        fetch('http://localhost:3004/posts')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    post:json
                })
            })
    }

    handleRemove = (data) => {
        console.log(data)
        fetch(`http://localhost:3004/posts/${data}`, {
            method: 'DELETE',
        })
        this.getPostAPI()
    }

    handleFormChange = (event) => {
        // console.log('form change', event.target)
        let formBlogPostNew = {...this.state.formBlogPost}

        formBlogPostNew[event.target.name] = event.target.value

        this.setState({
            formBlogPost: formBlogPostNew
        }, () => {
            console.log('value obj forBlogPost', this.state.formBlogPost)
        })
        
    }
    

    componentDidMount() {
        this.getPostAPI()
    }
    

    render() {
        return (
            <Fragment>
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="" placeholder="add title" onChange={this.handleFormChange} />
                    <label htmlFor="body">Bog Content</label>
                    <textarea name="body" id="body" cols="30" rows="10" placeholder="add blog content" onChange={this.handleFormChange}></textarea>
                    <button className="btn-submit" >Simpan</button>
                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove}/>
                    })
                }
            </Fragment>
        )
    }
}
