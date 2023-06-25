import { makeStyles } from "@mui/styles";

const footerStyle = makeStyles((theme) => ({
  footer: {
    backgroundColor: "rgb(46, 46, 84)",
    padding: "30px 50px",
    color: "rgb(255,255,255)",
  },
  screenLinks: {
    "&.MuiListItemText-primary": {
      fontSize: "13px !important",
    },
  },
}));

export default footerStyle;
