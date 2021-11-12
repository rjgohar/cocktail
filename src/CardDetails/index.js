import { useParams } from "react-router-dom";
import "./styles.css";

const CardDetails = (props) => {
  if (props.detail) {
    return (
      <div className="card-detail">
        <div>
          <img className="img-carddetail" src={props.detail.image} />
        </div>
        <div className="body-carddetail">
          <h1 className="wine-name">
            {" "}
            <span className="txt"> Name:</span> {props.detail.name}{" "}
          </h1>
          <h4 className="glass-name">
            {" "}
            <span className="txt"> Category:</span> {props.detail.gname}
          </h4>
          <span className="glass-alo">
            {" "}
            <span className="txt"> info:</span>
            {props.detail.falvor}
          </span>
        </div>
      </div>
    );
  }
};

export default CardDetails;
