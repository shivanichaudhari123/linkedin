import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import styles from "./Carousal.module.css";
//import { Icon } from 'antd';
const useStyles = makeStyles((theme) => ({
  chipStyle: {
    margin: "7px",
    padding: "9px",
    fontSize: "16px",
    "&&:hover": {
      backgroundColor: "grey",
      textDecoration: "underline",
    },
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  rowfirst: {
    display: "flex",
    flexDirection: "row",
  },
}));

const data = [
  "See all topics",
  "Science and Enviornment",
  "Marketing and Advertising",
  "Sales and Retails",
  "Technology ",
  "Finance and Economy",
  "Health",
  "Bussiness and Management",
];
const OutlinedChips = () => {
  const [list, setList] = useState(data);
  const [status, setStatus] = useState(false);
  const showMore = () => {
    if (status) {
      setList(data);
      setStatus(false);
    } else {
      setList([
        ...list,
        "Lifestyle and Leisure",
        "Society and Culture",
        "Art and Entertainment",
        "Education and Learning",
        "Sports and Fitness",
        "Career and Employment",
      ]);
      setStatus(true);
    }
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {list.map((item, i) => {
        return (
          <Chip
            label={item}
            key={i}
            variant="outlined"
            className={classes.chipStyle}
          />
        );
      })}
      <div>
        <button className={styles.btn} onClick={showMore}>
          show {status ? "less" : "more"}
        </button>
      </div>
    </div>
  );
};
export default OutlinedChips;
