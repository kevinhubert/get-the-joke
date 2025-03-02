import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Paper,
  CircularProgress,
} from "@mui/material";

function App() {
  const [joke, setJoke] = useState("Click the button for a dad joke!");
  const [loading, setLoading] = useState(false);

  const fetchJoke = () => {
    setLoading(true);
    fetch("https://get-the-joke.onrender.com/api/joke")
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.joke || "No joke found.");
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching joke:", error);
        setJoke("Failed to fetch a joke. Try again later.");
        setLoading(false);
      });
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        Dad Joke Generator
      </Typography>

      <Paper elevation={3} sx={{ padding: 3, my: 2, bgcolor: "#f5f5f5" }}>
        <Typography variant="h5">{joke}</Typography>
      </Paper>

      <Button
        variant="contained"
        color="primary"
        onClick={fetchJoke}
        disabled={loading}
        sx={{ mt: 2 }}
      >
        {loading ? (
          <CircularProgress size={24} sx={{ color: "white" }} />
        ) : (
          "Get a Joke"
        )}
      </Button>
    </Container>
  );
}

export default App;
