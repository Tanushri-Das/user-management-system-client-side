
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../features/users/userSlice";
import { useNavigate, useParams } from "react-router-dom";
import "./ViewUser.css";
import Spinner from "../../Components/Spinner/Spinner";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.user);
  const user = users.find((user) => user._id === id);

  useEffect(() => {
    // Fetch the user details if they are not available in the state
    if (!user) {
      dispatch(fetchUser(id));
    }
  }, [id, user, dispatch]);

  if (loading) {
    return <Spinner/>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    return <div>User not found.</div>;
  }

  const handleUsersPage = () => {
    navigate("/");
  };

  return (
    <div className="my-5">
      <h2 className="text-center mb-3">User Details</h2>
      <div className="container">
        <div className="row">
          <div className="table-responsive-sm">
            <table className="table table-fixed">
              <thead>
                <tr>
                  <th className="col-xs-3">ID</th>
                  <th className="col-xs-3">Name</th>
                  <th className="col-xs-3">Email</th>
                  <th className="col-xs-3">Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr key={user._id}>
                  <td className="col-xs-3">{user._id}</td>
                  <td className="col-xs-3">{user.name}</td>
                  <td className="col-xs-3">{user.email}</td>
                  <td className="col-xs-3">{user.phone}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <button className="btn btn-primary mt-3" onClick={handleUsersPage}>
          Back to Home Page
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
