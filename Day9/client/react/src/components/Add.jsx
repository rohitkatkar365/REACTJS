import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import "../App.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    author: "",
    publishedYear: "",
    genre: "",
    pages: "",
  });
  const [error, setError] = useState("");

  function inputHandler(e) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleData(e) {
    e.preventDefault();
    setError("");

    if (Object.values(data).some((field) => !field)) {
      setError("Please fill in all fields.");
      return;
    }

    if (isNaN(data.publishedYear) || data.publishedYear < 1000 || data.publishedYear > new Date().getFullYear()) {
      setError("Please enter a valid publish year (e.g., between 1000 and current year).");
      return;
    }

    if (isNaN(data.pages) || data.pages <= 0) {
      setError("Please enter a valid positive page count.");
      return;
    }

    try {
      console.log(data);
      
      await axios.post(`${import.meta.env.VITE_BASE_URL}/books`, data);
      navigate("/");
    } catch (error) {
      console.error("Error submitting data:", error);
      setError("Failed to submit data. Please try again.");
    }
  }

  const isFormComplete = Object.values(data).every((field) => field !== "");

  return (
    <Container>
      <Form onSubmit={handleData}>
        <h1>Fill Detail Of Book</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <Form.Control
          type="text"
          name="title"
          placeholder="Enter Title"
          onChange={inputHandler}
          value={data.title}
        />
        <br />
        <Form.Control
          type="text"
          name="author"
          placeholder="Enter Author Name"
          onChange={inputHandler}
          value={data.author}
        />
        <br />
        <Form.Control
          type="number"
          name="publishedYear"
          placeholder="Enter Publish Year"
          onChange={inputHandler}
          value={data.publishedYear}
        />
        <br />
        <Form.Control
          type="text"
          name="genre"
          placeholder="Enter Genre"
          onChange={inputHandler}
          value={data.genre}
        />
        <br />
        <Form.Control
          type="number"
          name="pages"
          placeholder="Enter Pages Count"
          onChange={inputHandler}
          value={data.pages}
        />
        <br />
        <Button className="btn" type="submit" disabled={!isFormComplete}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Add;
