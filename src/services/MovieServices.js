import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL

async function getAllMovies() {
  try {
    const res = await axios.get(`${BASE_URL}/movies`);
    return res.data;
  } catch (err) {
    console.error("Axios error:", err.message);
  }
}
async function getAllTheatre() {
  try {
    const res = await axios.get(`${BASE_URL}/theatre`);
    return res.data
  } catch (err) {
    console.error("Axios error:", err.message);
  }
}

async function addNewMovie(obj) {
  try {
    const res = await axios.post(`${BASE_URL}/movies`, obj)
    return res.data
  } catch (err) {
    console.error("Axios error:", err.message);
  }
}

async function deleteMovie(id) {
  try {
    const res = await axios.delete(`${BASE_URL}/movies/${id}`)
    return res.data
  } catch (err) {
    console.error("Axios error:", err.message);
  }
}

async function editMovie(id, obj) {
  try {
    const res = await axios.put(`${BASE_URL}/movies/${id}`, obj)
    return res.data
  } catch (err) {
    console.error("Axios error:", err.message);
  }
}

async function getMovieByID(id) {
  try {
    const res = await axios.get(`${BASE_URL}/movies/${id}`)
    return res.data
  } catch (err) {
    console.error("Axios error:", err.message);
  }
}

async function getTheatreByID(id) {
  try {
    const res = await axios.get(`${BASE_URL}/theatre/${id}`)
    return res.data
  } catch (err) {
    console.error("Axios error:", err.message);
  }
}
export { getAllMovies, getAllTheatre, addNewMovie, deleteMovie, editMovie, getMovieByID, getTheatreByID };
