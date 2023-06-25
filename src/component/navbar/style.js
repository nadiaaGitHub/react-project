import { makeStyles } from "@mui/styles";

const navbarStyle = makeStyles((theme) => ({
  textFieldStyle: {
    "&.MuiTextField-root .MuiOutlinedInput-root": {
      backgroundColor: "#f5f5f5 !important",
      borderRadius: "0px !important",
      padding: "2px 4px !important",
    },
    "&.MuiTextField-root .MuiOutlinedInput-root .css-1d3z3hw-MuiOutlinedInput-notchedOutline":
      {
        outline: "none !important",
        border: "none !important",
      },
  },
  SearchIcon: {
    background: "rgb(255, 192, 40)",
    padding: "10px 10px",
    margin: "0px 5px",
    fontize: "25px",
    color: "rgb(255,255,255)",
    cursor: "pointer",
  },
  shoppingCart: {
    fontSize: "1.5rem !important",
    cursor: "pointer",
  },
}));

export default navbarStyle;
