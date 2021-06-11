import {useState} from 'react'

const BlogList = ({blogs,title}) => {
    let [blog, setBlog] = useState(blogs)

    return (<div className="Bloglist">
        <h1>{title}</h1>
        {blog.map((blog, index) => {
            return (<div key={index} className="blog">
                <h1>{blog.title}</h1>
                <p>{blog.body}</p>
                <a href={"#"}>{blog.author}</a>
            </div>)
        })}
    </div>);
}

export default BlogList;