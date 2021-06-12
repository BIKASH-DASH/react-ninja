import { useState,useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const [Name,setName] = useState('raja')
    const deleteThisBlog = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(()=>{
        console.log('use effect run');
        
    },[Name])

    return (
        <div className="Home">
            <p>{Name}</p>
            <button onClick={()=>setName('babu')}>change Name</button>

            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title={'theSecondBlog'} deleteThisBlog={deleteThisBlog} />
        </div>
    );
}

export default Home;