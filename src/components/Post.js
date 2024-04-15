import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserProvider } from "../Context/UserProvider";

export default function Post() {
//   const { user } = useContext(AppContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://instagram-express-app.vercel.app/api/post/create",
          {
            // headers: {
            //   Authorization: `Bearer ${user.token}`,
            // },
          }
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  },);

  return (
    <div>
      <h1>My Posts</h1>
      <div className="Post-container">
        {data &&
          data.map((elem) => (
            <div key={elem._id}>
              <div>
                <div>
                  {elem.item}
                  <br />
                  <img src={elem.file} alt="Post" />
                </div>
              </div>
              <hr />
            </div>
          ))}
      </div>
    </div>
  );
}
