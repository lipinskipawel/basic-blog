import { useState } from 'react';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: "First", body: "Description", author: 'mario', id: 1 },
        { title: "Second", body: "Some Description", author: 'lugig', id: 2 },
        { title: "Third", body: "Next Description", author: 'mario', id: 3 }
    ]);

    return (
        <div className="home">

            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
    );
}

export default Home;
