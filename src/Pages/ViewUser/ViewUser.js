import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../features/users/userSlice";
import { useNavigate, useParams } from "react-router-dom";
import "../ViewUser/ViewUser.css";
import Spinner from "../../Components/Spinner/Spinner";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.user);
  const user = users.find((user) => user._id === id);

  useEffect(() => {
    // Fetch the users if they are not available in the state
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users.length]);

  console.log(id);
  console.log(user);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleUsersPage = () => {
    navigate("/");
  };

  return (
    <div className="my-5">
      <h2 className="text-center mb-3">User Details</h2>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="table-responsive" id="no-more-tables">
              <table className="table bg-white">
                <thead className="text-light">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {user && (
                    <tr key={user._id}>
                      <td data-title="ID">{user._id}</td>
                      <td data-title="Name">{user.name}</td>
                      <td data-title="Email">{user.email}</td>
                      <td data-title="Phone">{user.phone}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
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
