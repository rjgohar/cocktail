import React from "react";
import { useHistory } from "react-router";
import "./styles.css";
import { Link } from "react-router-dom";

function Card(props) {
  const { image, name, gname, falvor } = props.item;

  const history = useHistory();
  const handleShowDetails = (cardName) => {
    const path = `/card/${cardName}`;
    history.push(path);
  };
  return (
    <div className="card-main">
      <div>
        <img className="img-card" src={image} />
      </div>
      <div className="body-card">
        <h1 className="wine-name"> {name} </h1>
        <h4 className="glass-name"> {gname}</h4>
        <span className="glass-alo"> {falvor}</span>
      </div>
      <Link to="card-detail">
        <button
          className="btn-card"
          onClick={() => {
            props.setdetail(props.item);
          }}
        >
          Details
        </button>
      </Link>
    </div>
  );
}

export default Card;
