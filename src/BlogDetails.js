import { useParams } from "react-router-dom";

const BlogDetails = () => {
  // name (id) must be the same name as in the Route component after :
  const { id } = useParams();
  return (
    <div className="blog-details">
      <h2>Blog Details - {id}</h2>
    </div>
  );
};

export default BlogDetails;
