import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import BlogList from "./blogList";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    return ( 
        <div className="home">
            { error && <div>{error}</div>}
            { isPending && <div>loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" ></BlogList>}
        </div>
     );
}
 
export default Home;