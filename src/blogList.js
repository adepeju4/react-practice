import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const BlogList = ({blogs, title}) => {
// const blogs = props.blogs;
// const title = props.title;
// console.log(title)



    return (  
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=>{
                return(
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>written by {blog.author}</p>
                        
                        </Link>
                        
                    </div>
                )
            })}
        </div>
    );
}

BlogList.propTypes = {
    blogs: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
   
}
export default BlogList;