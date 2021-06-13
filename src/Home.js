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
        fetch('http://localhost:8800/blogs')
        .then(res => {
            return res.json()
        })
        .then((e)=>{
            //console.log(e);
            setBlogs(e)
        })
        
    },[])

    return (
        <div className="Home">
            <p>{Name}</p>
            <button onClick={()=>setName('babu')}>change Name</button>

        { blogs && <BlogList blogs={blogs} title={'theSecondBlog'} deleteThisBlog={deleteThisBlog} /> }
        </div>
    );
}

export default Home;