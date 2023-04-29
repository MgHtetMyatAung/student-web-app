import React, { useState } from "react";
import Search from "../../components/custom/search";
import ModalBox from "../../components/custom/ModalBox";
import { useContextData } from "../../components/context/Contextdata";
import StudentCard from "../../components/custom/StudentCard";

const HomePage = () => {
  const { showModal } = useContextData();
  const [keyword, setKeyword] = useState("");
  let data = [];

  for (let i = 1; i <= 100; i++) {
    data.push(i);
  }

  const filterData = (keyword) => {
    setKeyword(keyword);
  };

  return (
    <div className="home">
      <Search filterData={filterData} />
      {showModal && <ModalBox />}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {data?.filter(item=>item.toString().toLowerCase().includes(keyword.toLowerCase())).map((item, id) => (
          <StudentCard id={id + 1} key={id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
