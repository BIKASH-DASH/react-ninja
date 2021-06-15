import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './utils/useFetch'
export default function BlogDetails() {
    const { id } = useParams()
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs/'+id)
    console.log(blogs);
    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div className="error">error</div>}
            {blogs && (<div>
                    <h1>{blogs.title}</h1>
                    <p>{blogs.body}</p>
                    <i>{blogs.author}</i>
                    <div>{blogs.id}</div>
                </div>)}

        </div>
    )
}
