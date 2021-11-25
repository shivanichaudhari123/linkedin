import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import {Link} from "react-router-dom";
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
const Links = () => {
  //   const showMore = () => {

  //       setList([
  //         ...list,
  //         "Lifestyle and Leisure",
  //         "Society and Culture",
  //         "Art and Entertainment",
  //         "Education and Learning",
  //         "Sports and Fitness",
  //         "Career and Employment",
  //       ]);

  //     }
  //   };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {data.map((item, i) => {
        return (
          <Link to="/">
            key={i}
            label = {item}
          </Link>
        );
      })}
    </div>
  );
};
export default Links;
