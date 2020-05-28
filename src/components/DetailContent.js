import React, { useEffect, useState } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/components.module.css";
import axios from "axios";

let isFromLatest = false;

const DetailContent = ({ slug }) => {
  //Content COMPONENT
  const Content = ({ date, text, num }) => {
    let d = new Date(date);
    let formattedDate = `${d.getUTCDate()}/${
      d.getUTCMonth() + 1
    }/${d.getFullYear()}`;

    return (
      <div className={styles.content}>
        <h1 className={styles["content-title"]}> Content title {num + 1}</h1>
        <div className={styles["date-container"]}>
          <div className={styles.line}></div>
          <h6 className={styles.date}>{formattedDate}</h6>
        </div>
        <h4 className={styles["content-text"]}>{text}</h4>
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

  let tempSortedQ;
  const sortQuestions = (fromOldest) => {
    if (fromOldest === true) {
      tempSortedQ =
        questions &&
        questions.sort((a, b) => {
          let dateA = new Date(a.date);
          let dateB = new Date(b.date);

          if (dateA > dateB) return 1;
          else if (dateB > dateA) return -1;
          else return 0;
        });
    } else if (fromOldest === false) {
      tempSortedQ =
        questions &&
        [...questions].sort((a, b) => {
          let dateA = new Date(a.date);
          let dateB = new Date(b.date);

          if (dateA > dateB) return -1;
          else if (dateB > dateA) return 1;
          else return 0;
        });
    }
  };

  sortQuestions(true);

  const [sortText, setSortText] = useState("sort by latest");
  useEffect(() => {
    setSortedQ(tempSortedQ);
  }, [tempSortedQ]);

  return (
    <div className={styles["detail-content"]}>
      <div className={styles["image-container"]}>
        <h6 className={styles["image-tag"]}>{content.tag}</h6>
        {image && (
          <img src={require(`../assets/${image}`)} alt="detail image" />
        )}
      </div>
      <div className={styles.details}>
        <h1 className={styles["title"]}>{title}</h1>
        <div
          className={styles.sort}
          onClick={() => {
            if (isFromLatest === false) {
              isFromLatest = true;
              setSortText("sort by oldest");
              sortQuestions(!isFromLatest);
              setSortedQ(tempSortedQ);
            } else if (isFromLatest === true) {
              isFromLatest = false;
              setSortText("sort by latest");
              sortQuestions(!isFromLatest);
              setSortedQ(tempSortedQ);
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
