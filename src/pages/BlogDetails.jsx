import React, { useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";

import { useParams } from "react-router-dom";
import blogData from "../assets/data/blogData.js";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";

import commentImg from "../assets/all-images/drive.jpg";
import SafeImage from "../components/UI/SafeImage";

import "../styles/blog-details.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const decodedSlug = (() => {
    try {
      return decodeURIComponent(slug || "");
    } catch {
      return slug || "";
    }
  })();

  const blog = blogData.find((blog) => blog.title === decodedSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  return (
    <Helmet title={blog?.title || "Blog"}>
      <section>
        <Container>
          <Row>
            <Col lg="8" md="8">
              {!blog ? (
                <div className="blog__details">
                  <h2 className="section__title">Post not found</h2>
                  <p className="section__description">
                    The blog post you are looking for is not available.
                  </p>
                </div>
              ) : (
              <div className="blog__details">
                <SafeImage src={blog.imgUrl} alt={blog.title} className="w-100" />
                <h2 className="section__title mt-4">{blog.title}</h2>

                <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                  <span className="blog__author">
                    <i className="ri-user-line"></i> {blog.author}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="ri-calendar-line"></i> {blog.date}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="ri-time-line"></i> {blog.time}
                  </span>
                </div>

                <p className="section__description">{blog.description}</p>
                <h6 className="ps-5 fw-normal">
                  <blockquote className="fs-4">{blog.quote}</blockquote>
                </h6>
                <p className="section__description">{blog.description}</p>
              </div>
              )}

              <div className="comment__list mt-5">
                <h4 className="mb-5">3 Comments</h4>

                <div className="single__comment d-flex gap-3">
                  <SafeImage src={commentImg} alt="Comment" />
                  <div className="comment__content">
                    <h6 className=" fw-bold">David Visa</h6>
                    <p className="section__description mb-0">14 July, 2022</p>
                    <p className="section__description">
                      Thanks for the helpful information. If you need guidance on
                      buying or importing a car, you can contact White Lions
                      Legacies and we will assist you.
                    </p>

                    <span className="replay d-flex align-items-center gap-1">
                      <i className="ri-reply-line"></i> Replay
                    </span>
                  </div>
                </div>

                {/* =============== comment form ============ */}
                <div className="leave__comment-form mt-5">
                  <h4>Leave a Comment</h4>
                  <p className="section__description">
                    You must sign-in to make or comment a post
                  </p>

                  <Form>
                    <FormGroup className=" d-flex gap-3">
                      <Input type="text" placeholder="Full name" />
                      <Input type="email" placeholder="Email" />
                    </FormGroup>

                    <FormGroup>
                      <textarea
                        rows="5"
                        className="w-100 py-2 px-3"
                        placeholder="Comment..."
                      ></textarea>
                    </FormGroup>

                    <button className="btn comment__btn mt-3">
                      Post a Comment
                    </button>
                  </Form>
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="recent__post mb-4">
                <h5 className=" fw-bold">Recent Posts</h5>
              </div>
              {blogData.map((item) => (
                <div className="recent__blog-post mb-4" key={item.id}>
                  <Link
                    to={`/blogs/${encodeURIComponent(item.title)}`}
                    className="recent__blog-item d-flex gap-3 align-items-center"
                  >
                    <SafeImage src={item.imgUrl} alt={item.title} className="w-25 rounded-2" />
                    <h6 className="mb-0">{item.title}</h6>
                  </Link>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BlogDetails;
