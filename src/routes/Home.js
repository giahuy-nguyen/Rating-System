import { useEffect, useState } from "react";
import Service from "../components/Service";
import styles from "./Home.module.css";
import Navbar from "../components/Navbar/NavBar";
function Home() {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`http://18.222.115.58:8086/api/v1/services`)
      .then((response) => response.json())
      .then((json) => {
        setServices(json);
        setLoading(false);
      });
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading....</span>
        </div>
      ) : (
        <>
          <Navbar />
          <div className={styles.services}>
            {services.map((service) => (
              <Service
                key={service.uuid}
                id={service.id}
                uuid={service.uuid}
                serviceImg={service.image}
                name={service.name}
                desc={service.description}
                avgScore={service.avgscore}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
