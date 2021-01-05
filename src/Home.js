import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "First", body: "Description", author: 'mario', id: 1},
        {title: "Second", body: "Some Description", author: 'lugig', id: 2},
        {title: "Third", body: "Next Description", author: 'mario', id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(e => e.id !== id);
        setBlogs(newBlogs);
    };

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete} />
        </div>
    );
}

export default Home;
