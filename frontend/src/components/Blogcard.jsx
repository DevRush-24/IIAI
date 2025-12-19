import React from "react";
import dummy from '../assets/dummy.png';
import { Link } from "react-router-dom";

const BlogCard = ({
  title = "Blog Post",
  content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio labore dolor illo?",
  link = "/blog",
  image = dummy
}) => {
  return (
    <div className="card" style={{ maxWidth: "25rem" }}>
      <img
        src={image}
        className="card-img-top"
        alt="Blog cover"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {content}
        </p>
        <Link to={link} className="btn btn-primary">
          Read More
        </Link>
      </div>
    </div>
  );
};


export default BlogCard;
