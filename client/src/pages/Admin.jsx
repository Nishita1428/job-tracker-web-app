import { FaSuitcaseRolling, FaCalendarCheck } from "react-icons/fa";
import { useLoaderData, redirect, useNavigate } from "react-router-dom";
import customFetch from "../utils/customFetch";
import Wrapper from "../assets/wrappers/StatsContainer";
import { toast } from "react-toastify";
import StatItem from "../components/StatItem";

export const loader = async () => {
  try {
    const response = await customFetch.get("/users/admin/app-stats");

    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/dashboard");
  }
};


const Admin = () => {
  const navigate = useNavigate();

  const { users, jobs } = useLoaderData();

  function handleJobsClick() {
    navigate("../all-jobs");
    console.log(navigate);
  }

  function handleUsersClick() {
    console.log(navigate);
  }

  return (
    <Wrapper>
      <button onClick={handleUsersClick}>
        <StatItem
          title="current users"
          count={users}
          color="#e9b949"
          bcg="#fcefc7"
          icon={<FaSuitcaseRolling />}
        />
      </button>
      <button onClick={handleJobsClick}>
        <StatItem
          title="total jobs"
          count={jobs}
          color="#647acb"
          bcg="#e0e8f9"
          icon={<FaCalendarCheck />}
        />
      </button>
    </Wrapper>
  );
};

export default Admin;
