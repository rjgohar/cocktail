import { React, useEffect, useState } from "react";
import Data from "../Data";
import Search from "../Search";
import Card from "../Card";
import "./styles.css";

const Home = ({ setdetail }) => {
  const [serchedvalue, setserchedvalue] = useState("");
  const [data, setData] = useState(Data);

  const filterData = (value) => {
    if (value)
      setData(
        Data.filter((data) =>
          data.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        )
      );
    else setData(Data);
  };

  useEffect(() => {
    filterData(serchedvalue);
  }, [serchedvalue]);

  return (
    <>
      <Search setserchedvalue={setserchedvalue} />
      <div className="card-gird">
        {data.map((item) => (
          <Card
            // img={image}
            // name={name}
            // gname={gname}
            // falvor={flavor}
            item={item}
            setdetail={setdetail}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
