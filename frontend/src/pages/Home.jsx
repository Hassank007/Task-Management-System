import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import TasksTable from "../components/home/TasksTable";
import TasksCard from "../components/home/TasksCard";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/task")
      .then((response) => {
        setTask(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <div className="flex flex-col  items-center">
        <h1
          className="text-3xl my-8 font-mono font-bold underline underline-offset-4
        "
        >
          Task Mangement System
        </h1>

        <Link to="/task/create">
          <div className="flex flex-row border-sky-800 border-">
            <span className="text-3xl pr-6 font-mono">Add Task</span>
            <MdOutlineAddBox className="text-sky-800 text-7xl pb-6 relative bottom-1" />
          </div>
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <TasksTable task={task} />
      ) : (
        <TasksCard task={task} />
      )}

      <div className="flex  justify-center relative top-24  ">
        <button
          className=" bg-sky-300 px-4 py-1 rounded-lg "
          onClick={() => navigate("/login")}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Home;
