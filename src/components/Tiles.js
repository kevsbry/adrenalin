import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./style.module.css";

const Tiles = () => {
  const [tilesConent, setTilesContent] = useState([]);

  useEffect(() => {
    axios
      .get("./feed/data.json")
      .then((resp) => {
        setTilesContent(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const Tile = ({ thumb, title, tag, slug }) => {
    return (
      <Link to={`/detail/${slug}`} className={styles.tile}>
        <div className={styles.thumbnail}>
          <img src={require(`../assets/${thumb}`)} alt="thumbnail" />
          <span className={styles.tag}>{tag}</span>
        </div>
        <spant className={styles.title}>{title}</spant>
        <div className={styles.view}>
          <div></div>
          <span>view case study</span>
        </div>
      </Link>
    );
  };

  return (
    <div className={styles["tiles-container"]}>
      {tilesConent.map((content) => (
        <Tile
          key={content.id}
          thumb={content.thumb}
          title={content.title_long}
          tag={content.tag}
          slug={content.slug}
        />
      ))}
    </div>
  );
};

export default Tiles;
