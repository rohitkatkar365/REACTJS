import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

function EditItem() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    author: "",
    publishedYear: "",
    genre: "",
    pages: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/books/${id}`);
        setData(response.data.data);
      } catch (err) {
        console.error("Error fetching book details:", err);
        setError("Failed to load book details.");
      } finally {
        setLoading(false);
      }
    };
    fetchBookDetails();
  }, [id]);

  // Form submission handler
  const handleData = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${import.meta.env.VITE_BASE_URL}/books/${id}`, data);
      navigate('/'); // Redirect to the books list
    } catch (error) {
      console.error("Error updating book:", error);
      setError("Failed to update the book. Please try again.");
    }
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormComplete =
    data.title && data.author && data.publishedYear && data.genre && data.pages;

  if (loading) {
    return <p>Loading book details...</p>;
  }

  return (
    <Container>
      <Form onSubmit={handleData}>
        <h1>Edit Book Details</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <Form.Control
          type="text"
          name="title"
          placeholder="Enter Title"
          onChange={inputHandler}
          value={data.title}
          className="mb-3"
        />
        <Form.Control
          type="text"
          name="author"
          placeholder="Enter Author Name"
          onChange={inputHandler}
          value={data.author}
          className="mb-3"
        />
        <Form.Control
          type="number"
          name="publishedYear"
          placeholder="Enter Publish Year"
          onChange={inputHandler}
          value={data.publishedYear}
          className="mb-3"
        />
        <Form.Control
          type="text"
          name="genre"
          placeholder="Enter Genre"
          onChange={inputHandler}
          value={data.genre}
          className="mb-3"
        />
        <Form.Control
          type="number"
          name="pages"
          placeholder="Enter Pages Count"
          onChange={inputHandler}
          value={data.pages}
          className="mb-3"
        />
        <Button className="btn" type="submit" disabled={!isFormComplete}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default EditItem;
