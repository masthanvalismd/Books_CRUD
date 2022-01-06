import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


export function EditBooks({ books, setBooks }) {
  const { id } = useParams();
  // const book = books[id];
  const book = books.filter((book) => book.id === id);
  const [title, setTitle] = useState(book[0].title);
  const [author, setAuthor] = useState(book[0].author);
  const [published, setPublished] = useState(book[0].published);
  const [price, setPrice] = useState(book[0].price);
  const [quantity, setQuantity] = useState(book[0].quantity);
  const [image, setImage] = useState(book[0].image);
  const navigate = useNavigate();

  const edittitle = (e) => {
    setTitle(e.target.value);
    const updated_title = title;
    book[0].title = updated_title;
  };
  const editauthor = (e) => {
    setAuthor(e.target.value);
    const updated_author = author;
    book[0].author = updated_author;
  };
  const editpublished = (e) => {
    setPublished(e.target.value);
    const updated_published = published;
    book[0].published = updated_published;
  };
  const editprice = (e) => {
    setPrice(e.target.value);
    const updated_price = price;
    book[0].price = updated_price;
  };
  const editquantity = (e) => {
    setQuantity(e.target.value);
    const updated_quantity = quantity;
    book[0].quantity = updated_quantity;
  };
  const editimage = (e) => {
    setImage(e.target.value);
    const updated_image = image;
    book[0].image = updated_image;
  };
  
  return (
    <div className="textField-edit">
      
      <TextField
        placeholder="Enter a Name"
        variant="outlined"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={title}
        onChange={edittitle} />
      <br />
      <TextField
        placeholder="Enter author"
        variant="outlined"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={author}
        onChange={editauthor} />
      <br />

      <TextField
        placeholder="Enter published"
        variant="outlined"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={published}
        onChange={editpublished} />
      <br />

      <TextField
        placeholder="Enter price"
        variant="outlined"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={price}
        onChange={editprice} />
      <br />

      <TextField
        placeholder="Enter quantity"
        variant="outlined"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={quantity}
        onChange={editquantity} />
      <br />
      <TextField
        placeholder="Enter Image URL"
        variant="outlined"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={image}
        onChange={editimage} />
      <br />
      <br />

      <div className="edit-btn">
        <Button
          style={{
            backgroundColor: "cyan",
            color:"black",
            marginRight: "20px",
          }}
          onClick={() => navigate(`/booklist`)}
        >
           <ArrowBackIcon />
        </Button>
        <Button
          variant="outlined"
          style={{
            backgroundColor: "green",
            color: "#FFFFFF",
            marginLeft: "20px",
          }}
          onClick={(event) => {
            event.preventDefault();
            setBooks([...books]);
            setTitle("");
            navigate(`/booklist`);
            console.log("books")
          }}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
}
