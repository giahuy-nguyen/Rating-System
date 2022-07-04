import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Service.module.css";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

function Service({ uuid, id, serviceImg, name, desc, avgScore }) {
  return (
    <div className={styles.service}>
      <div>
        <Link to={`/detail/${id}`}>
          <img
            src={serviceImg}
            width={200}
            height={200}
            alt={name}
            className={styles.img}
          />
        </Link>
      </div>
      <div>
        <h2 className={styles.name}>
          <Link to={`/detail/${id}`}>{name}</Link>
        </h2>
        <h3>
          <span>
            <Typography component="legend">Average Score</Typography>
          </span>
          <span>{Math.round((avgScore + Number.EPSILON) * 100) / 100}</span>
          <div>
            <Rating
              name="read-only"
              value={avgScore}
              precision={0.1}
              readOnly
            />
          </div>
        </h3>
        <p>{desc.length > 185 ? `${desc.slice(0, 185)}...` : desc}</p>
      </div>
    </div>
  );
}

Service.propTypes = {
  uuid: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  avgScore: PropTypes.number.isRequired,
  serviceImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Service;
