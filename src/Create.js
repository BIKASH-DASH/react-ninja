import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState(null);
    const [body, setBody] = useState(null);
    const [author, setAuthor] = useState(null);
    const TrigerSubmit = (e) => {
        e.preventDefault();
    const    data = {
            title: title,
            body: body,
            author: author
        }
        console.log(data);

    }

    return (<div className="create">
        <h1>Create</h1>
        <form  >
            <label htmlFor="blogTitle">Blog Title</label>
            <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" require />
            <label htmlFor="Textarea">Textarea</label>
            <textarea onChange={(e) => setBody(e.target.value)} name="message" id="" cols="30" rows="10">{body}</textarea>
            <label htmlFor="Select">Blog Author</label>
            <select onChange={(e) => setAuthor(e.target.value)} value={author} name="blogauthor" id="blofid">
                <option value="blog">Blog1</option>
                <option value="blog2">Blog2</option>
            </select>

            <button onClick={TrigerSubmit} >Submit</button>
        </form>
    </div>);
}

export default Create;
