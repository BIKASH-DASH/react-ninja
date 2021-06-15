import { Link } from 'react-router-dom'
const BlogList = ({blogs,title,deleteThisBlog}) => {
    
    return (<div className="Bloglist">
        <h1>{title}</h1>
        {blogs.map((blog, index) => {
            return (<div key={index} className="blog">
                <h1><Link to={`/blogs/${blog.id}`}>{blog.title}</Link></h1>
                <p>{blog.body}</p>
                <Link to={"#"}>{blog.author}</Link>
                <button onClick={()=>deleteThisBlog(blog.id)}>Delete this blog</button>
            </div>)
        })}
    </div>);
}

export default BlogList;