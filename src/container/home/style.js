import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/system";

const frontPageStyle = makeStyles((theme) => ({
  cardDiv: {
    padding: "30px 90px ",
    [theme.breakpoints.down(600)]: {
      padding: "30px 30px",
    },
  },
  cardTitle: {
    margin: "10px 0px",
    color: "rgb(33, 33, 33)",
    lineHeight: "18px !important",
    fontSize: "13px !important",
    [theme.breakpoints.down(1250)]: {
      fontSize: "11px !important",
    },
  },
  loadButton: {
    "&.MuiButton-root": {
      padding: "10px 140px !important",
      [theme.breakpoints.down(400)]: {
        padding: "10px 100px !important",
      },
      backgroundColor: "#f57224 !important",
    },
  },
}));

export default frontPageStyle;
