import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BaseURL } from "../../utils/common/APIs";

const BlogDetail = () => {
  const blogId = useParams();
  const [blog, setBlog] = useState({});

  const fetchBlog = async () => {
    try {
      const dataResponse = await axios.get(
        `${BaseURL}/blogs/get_blog/${blogId?.blog_id}`
      );
      setBlog(dataResponse?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchBlog();
  }, []);

  return (
    <Container>
      <Row className="my-5">
        <p className="text-2xl text-white">{blog?.title}</p>
        <p className="text-xl text-green-400">{blog?.date}</p>
        <Col sm={6} className="text-white">
          <div>{blog?.description}</div>
          <div className="flex gap-3 align-middle items-center ">
            <div>
              <img
                src={`${BaseURL}/uploads/authors/${blog?.author?.avatar}`}
                alt={blog?.author?.name}
                className="h-12 w-10 rounded-full bg-gray-50 my-3"
              />
            </div>
            <div className="text-yellow-200 text-xl my-2">
              {blog?.author?.name}
            </div>
          </div>

          <div>{blog?.category?.name} Category</div>
        </Col>
        <Col sm={6}>
            <img src={`${BaseURL}/uploads/blogs/${blog?.image}`} alt={blog?.category?.name} />
        </Col>
      </Row>
    </Container>
  );
};

export default BlogDetail;
