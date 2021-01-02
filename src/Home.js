const Home = () => {

    const handleClick = (event) => {
        console.log("Hello everyone", event);
    }

    const handleClickAgain = (name, e) => {
        console.log(`Hello ${name}`);
        console.log(e.target); // target is the in this case an "html" button
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => {
                handleClickAgain('mario', e);
            }}>Click me again</button>
        </div>
    );
}

export default Home;
