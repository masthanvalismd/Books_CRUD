import "./App.css";
import Button from "@mui/material/Button";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Paper from "@mui/material/Paper";
import { BookList } from "./BookList";
import { AddBook } from "./AddBook";
import { EditBooks } from "./EditBooks";

export default function App() {
  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const defaultBookList = [
    {
      id: 0,
      title: "The Martian (Weir novel)",
      author: "Andy Weir",
      published: "12 Feb 2011",
      price: "₹570",
      quantity: 42,
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ-NPua9BU_B_3SXuFOZsie5YdH2a0bdB_5ZmF3yLtZbE3eV8Nu",
    },
    {
      id: 1,
      title: "Fifty Shades of Grey ",
      author: "E. L. James",
      published: "25 May 2011",
      price: "₹540",
      quantity: 670,
      image:
        "https://encrypted-tbn2.gstatic.com/impuages?q=tbn:ANd9GcQgSSpSSaE8uB8rmnTMf4sLjJjTH_gAlaZHxqKnhwbLsaG3jaNJ",
    },
    {
      id: 2,
      title: "Harry Potter and the Cursed Child",
      author: " Imogen Heap",
      published: "30 July 2016",
      price: "₹1540",
      quantity: 800,
      image: "https://images-na.ssl-images-amazon.com/images/I/71Pk1yXeV8L.jpg",
    },
    {
      id: 3,
      title: "The Kite Runner",
      author: "Khaled Hosseini",
      published: " 29 May 2003",
      price: "₹550",
      quantity: 600,
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSbz4BZeSQhv_E9kYEpkOyqctf9Yqx4ys9LtSjoEbblyTRW1DKI",
    },
  ];
  const [books, setBooks] = useState(defaultBookList);
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ minHeight: "100vh", borderRadius: "0px" }} elevation={5}>


        <div className="App">
          <h1>Books List Using CRUD Operations</h1>

          <div className="nav-bar">
            <Button
              style={{ fontSize: "1.5rem" }}
              color="inherit"
              onClick={() => {
                navigate("/booklist");
              }}
            >
              BookLists
            </Button>

            <Button
              style={{ fontSize: "1.5rem" }}
              color="inherit"
              onClick={() => {
                navigate("/addBook");
              }}
            >
              Add Book
            </Button>
            <Button
              sx={{ marginLeft: "auto" }}
              startIcon={
                mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
              }
              color="inherit"
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
             
            </Button>
          </div>
          <Routes>
            <Route
              exact
              path="/booklist"
              element={<BookList books={books} setBooks={setBooks} />}
            />

            <Route
              path="/addBook"
              element={<AddBook books={books} setBooks={setBooks} />}
            />
            <Route
              path="/booklist/edit/:id"
              element={<EditBooks books={books} setBooks={setBooks} />}
            />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}
