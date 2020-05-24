import React, { useEffect, useState } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.css";
import axios from "axios";

let isFromLatest = false;

const DetailContent = ({ slug }) => {
  //Content COMPONENT
  const Content = ({ date, text, num }) => {
    const style = {
      title: {
        fontSize: "32px",
        fontWeight: "700",
        letterSpacing: "0.5px",
      },
      dateContainer: {
        display: "flex",
        alignItems: "center",
        marginTop: "0.5em",
      },
      line: {
        width: "32px",
        height: "2px",
        background: "#A4A4A4",
        marginRight: "1rem",
      },
      date: {
        fontSize: "13px",
        fontWeight: "700",
        color: "#A4A4A4",
      },
      text: {
        fontFamily: "'Merriweather Sans', sans-serif",
        lineHeight: "28px",
        color: "#333333",
        fontSize: "17px",
        marginTop: "0.5em",
      },
    };

    let d = new Date(date);
    let formattedDate = `${d.getUTCDate()}/${
      d.getUTCMonth() + 1
    }/${d.getFullYear()}`;

    return (
      <div className={styles.content}>
        <span style={style.title}> Content title {num + 1}</span>
        <div style={style.dateContainer}>
          <div style={style.line}></div>
          <span style={style.date}>{formattedDate}</span>
        </div>
        <span style={style.text}>{text}</span>
      </div>
    );
  };
  const [content, setContent] = useState([{}]);

  useEffect(() => {
    axios
      .get("../feed/data.json")
      .then((resp) => {
        let tempContent = resp.data.filter((d) => d.slug === slug);
        setContent(tempContent[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const { image, title, questions } = content;

  let [sortedQ, setSortedQ] = useState([{}]);

  let sortFromOldest =
    questions &&
    questions.sort((a, b) => {
      let dateA = new Date(a.date);
      let dateB = new Date(b.date);

      if (dateA > dateB) return 1;
      else if (dateB > dateA) return -1;
      else return 0;
    });

  let SortFromLatest =
    questions &&
    [...questions].sort((a, b) => {
      let dateA = new Date(a.date);
      let dateB = new Date(b.date);

      if (dateA > dateB) return -1;
      else if (dateB > dateA) return 1;
      else return 0;
    });

  const [sortText, setSortText] = useState("sort by latest");
  useEffect(() => {
    setSortedQ(sortFromOldest);
  }, [sortFromOldest]);

  return (
    <div className={styles["detail-content"]}>
      <div className={styles["image-container"]}>
        {image && (
          <img src={require(`../assets/${image}`)} alt="detail image" />
        )}
      </div>
      <div className={styles.details}>
        <span className={styles["title"]}>{title}</span>
        <div
          className={styles.sort}
          onClick={() => {
            if (isFromLatest === false) {
              isFromLatest = true;
              setSortText("sort by oldest");
              setSortedQ(SortFromLatest);
            } else if (isFromLatest === true) {
              isFromLatest = false;
              setSortText("sort by latest");
              setSortedQ(sortFromOldest);
            }
          }}
        >
          {sortText} <Icon icon={faSync} />
        </div>
        {sortedQ &&
          sortedQ.map((question, i) => (
            <Content
              key={i}
              date={question.date}
              text={question.text}
              num={i}
            />
          ))}
      </div>
    </div>
  );
};

export default DetailContent;
