import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Avatar from "../../components/avatar/Avatar";
import Axios from "axios";

const ProfilePage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const CHART_API = import.meta.env.VITE_REACT_APP_CHART_API_URL;
  const controller = "SystemDetails/";
  const imageUrl = "https://enjoylife.ir/filestorage";
  useEffect(() => {
    const fetchData = async () => {
      try {
        // debugger; 
        const response = await Axios.get(
          `${CHART_API}${controller}IT/${id}`
        );
        setData(response.data);
      } catch (error) {
        alert("خطایی رخ داده است.");
      }
    };
    fetchData();
  }, [id]);

  return (
    <div
      className="relative min-h-screen min-w-screen"
      style={{ backgroundColor: "#8a8a8a" }}
    >
      {data && <Avatar data={data} />}
    </div>
  );
};

export default ProfilePage;
