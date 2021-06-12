import { useState,useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState(null)

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