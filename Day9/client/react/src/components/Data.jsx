import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Spinner, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../data.css";

function Data() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/books`);
        setData(response.data.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this book?");
    if (!confirmDelete) return;

    setDeletingId(id);
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/books/${id}`);
      setData(data.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting book:", error);
    } finally {
      setDeletingId(null);
    }
  };

  const handleEdit = (id) => {
    navigate(`/${id}`);
  };

  if (loading) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p>Loading data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </div>
    );
  }

  if (data.length === 0) {
    return <p>No data available.</p>;
  }

  return (
    <>
    <h1 style={{justifyContent:"center",display:"flex"}}>ALL BOOK DETAILS</h1>
    <div style={{marginTop:"5%"}}></div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Publish Year</th>
          <th>Genre</th>
          <th>Pages</th>
          <th>Created At</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        {data.map((ele) => (
          <tr key={ele._id}>
            <td>{ele.title}</td>
            <td>{ele.author}</td>
            <td>{ele.publishedYear}</td>
            <td>{ele.genre}</td>
            <td>{ele.pages}</td>
            <td>{new Date(ele.createdAt).toLocaleString()}</td>
            <td>
            <div className="d-inline-block me-2"> 
              <Button
                onClick={() => handleDelete(ele._id)}
                disabled={deletingId === ele._id}
              >
                {deletingId === ele._id ? "Deleting..." : "Delete"}
              </Button>
              </div>
              <div className="d-inline-block">
              <Button className="btn" onClick={() => handleEdit(ele._id)}>
                Update
              </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    </>
  );
}

export default Data;
