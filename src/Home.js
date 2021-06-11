import  { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    return (
        <div className="Home">
            <h2>list blog</h2>
            {blogs.map((blog,index)=>{
                console.log(blog,index)
                return (<div key={index} className="blog">
                            <h1>{blog.title}</h1>
                            <p>{blog.body}</p>
                            <a href={"#"}>{blog.author}</a>
                </div>)
            })}
        </div>
    );
}

export default Home;