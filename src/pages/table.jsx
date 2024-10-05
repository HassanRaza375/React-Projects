import React, { useState, useEffect } from "react";
import axios from "axios";

const table = () => {
  const [currentCryptoData, SetNewCryptoData] = useState([]);
  const [currentSortOrder, SetNewSortOrder] = useState("asscending");
  const [currentgetOrder, SetNewgetOrder] = useState(null);
  const options = {
    method: "GET",
    url: `https://randomuser.me/api/?results=${currentgetOrder || 50}`,
  };
  useEffect(() => {
    // Define the fetch function
    // Call the fetch function
    fetchData();
  }, [currentgetOrder]);
  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      SetNewCryptoData(response.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      console.log(false);
    }
  };
  const handleSortFunction = () => {
    let sortedorder = [];
    if (currentSortOrder === "asscending") {
      sortedorder = [...currentCryptoData].sort(
        (a, b) => a.dob.age - b.dob.age
      );
      SetNewSortOrder("descending");
    } else if (currentSortOrder === "descending") {
      sortedorder = [...currentCryptoData].sort(
        (a, b) => b.dob.age - a.dob.age
      );
      SetNewSortOrder("random");
    } else {
      sortedorder = [...currentCryptoData].sort((a, b) => Math.random() - 0.5);
      SetNewSortOrder("asscending");
    }
    SetNewCryptoData(sortedorder);
  };
  const getusernumber = () => {
    let numb = prompt("Please enter your name");
    SetNewgetOrder(Number(numb));
  };
  return (
    <>
      <section className="h-full flex justify-center items-center">
        <div className="py-[20px] mx-[auto] max-w-[1200px] w-full">
          <div className="text-[14px] flex justify-start text-[white] gap-[10px] items-center mb-3">
            <span className="p-2 cursor-pointer" onClick={handleSortFunction}>
              Sort
            </span>
            <span
              className="flex items-center gap-[10px] border rounded-[6px] p-2 cursor-pointer"
              onClick={getusernumber}
            >
              <p className="h-[10px] w-[10px] rounded-[50%] bg-[#4bff34]"></p>
              (9) Active
            </span>
          </div>
          <table className="text-[14px] w-[100%] text-[white] border-collapse border-[1px] border-slate-400">
            <thead>
              <tr className="bg-matte-black">
                <th className="p-2 border-r-[1px] text-center">Sr.</th>
                <th className="p-2 border-r-[1px] text-center">Image</th>
                <th className="p-2 border-r-[1px] text-center">Gender</th>
                <th className="p-2 border-r-[1px] text-center">Age</th>
                <th className="p-2 border-r-[1px] text-center">Name</th>
                <th className="p-2 border-r-[1px] text-center">Phone Number</th>
                <th className="p-2 border-r-[1px] text-center">Location</th>
              </tr>
            </thead>
            <tbody>
              {currentCryptoData.length > 0
                ? currentCryptoData.map((e, index) => {
                    return (
                      <tr key={index + 1}>
                        <td className="p-2 text-center">{++index}</td>
                        <td className="p-2 flex justify-center items-center">
                          <img
                            src={e.picture?.thumbnail}
                            className="object-contain h-[50px] w-[50px] rounded-full"
                            alt=""
                          />
                        </td>
                        <td className="p-2 text-center">{e.gender || ""}</td>
                        <td className="p-2 text-center">{e.dob?.age || ""}</td>
                        <td className="p-2 flex justify-center">
                          {e.name && e.name.first + " " + e.name && e.name.last}
                        </td>
                        <td className="p-2 text-center">{e?.cell}</td>
                        <td className="p-2 text-center">
                          {e.location?.country}
                        </td>
                      </tr>
                    );
                  })
                : ""}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default table;
