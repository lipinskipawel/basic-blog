import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(e => e.id !== id);
        setBlogs(newBlogs);
    };

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
                console.log(data);
            })
    }, []);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete} />
        </div>
    );
}

export default Home;
