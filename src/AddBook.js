import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router";
import { useState } from "react";
import TextField from "@mui/material/TextField";

export function AddBook({ books, setBooks }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [published, setPublished] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  return (
    <div className="add-book">
      <div className="textField-add">
        <TextField
          label="Enter Title"
          variant="outlined"
          style={{ width: "20%", margin: "2px", paddingLeft: "5px" }}
          value={title}
          onChange={(event) => setTitle(event.target.value)} />
        <br />
        <TextField
          label="Enter Author Name"
          variant="outlined"
          style={{ width: "20%", margin: "2px", paddingLeft: "5px" }}
          value={author}
          onChange={(event) => setAuthor(event.target.value)} />
        <br />

        <TextField
          label="Enter Published Date"
          variant="outlined"
          style={{ width: "20%", margin: "2px", paddingLeft: "5px" }}
          value={published}
          onChange={(event) => setPublished(event.target.value)} />
        <br />
        <TextField
          label="Enter Price"
          variant="outlined"
          style={{ width: "20%", margin: "2px", paddingLeft: "5px" }}
          value={price}
          onChange={(event) => setPrice(event.target.value)} />
        <br />

        <TextField
          label="Enter Quantity"
          variant="outlined"
          style={{ width: "20%", margin: "2px", paddingLeft: "5px" }}
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)} />
        <br />
        <TextField
          label="Enter Image URL"
          variant="outlined"
          style={{ width: "20%", margin: "2px", paddingLeft: "5px" }}
          value={image}
          onChange={(event) => setImage(event.target.value)} />
        <br />
        <br />

          </div>
        <div className="btn">
          <Button
            title="Go Back"
            style={{
              backgroundColor: "brown",
              color: "#FFFFFF",
              marginRight: "auto",
            }}
            onClick={() => navigate("/booklist")}
          >
            <ArrowBackIcon />
          </Button>
          <Button
            variant="outlined"
            style={{
              backgroundColor: "crimson",
              color: "#FFFFFF",
              marginLeft: "auto",
            }}
            onClick={() => {
              const newBook = {
                id: books.length + 1,
                title,
                author,
                published,
                price,
                quantity,
                image,
              };

              setBooks([...books, newBook]);
              setTitle("");
              navigate("/booklist");
            }}
          >
            Add Book
          </Button>
      </div>
    </div>
  );
}
