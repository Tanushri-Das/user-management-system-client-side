
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  fetchUsers,
  updateUser,
} from "../../features/users/userSlice";
import '../UserList/UserList.css';
import Spinner from "../../Components/Spinner/Spinner";
import { toast } from "react-toastify";

const UserList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, loading, error } = useSelector((state) => state.user);
  console.log(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id))
      .unwrap()
      .then(() => {
        toast.error("Deleted user successfully!");
      })
      .catch((error) => {
        console.log(error); // Log any error
      });
  };

  const handleAddUser = () => {
    navigate("/users/add");
  };

  const handleEditUser = (id) => {
    navigate(`/users/edit/${id}`);
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="my-5">
      <div className="d-flex justify-content-center mb-5">
        <button className="btn btn-primary fw-semibold" onClick={handleAddUser}>
          Add New User
        </button>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="table-responsive" id="no-more-tables">
              <table className="table bg-white">
                <thead className="text-light">
                  <tr>
                    <th>Userlist</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="">
                  {users.map((user,index) => (
                    <tr key={user._id}>
                      <td data-title="Userlist">{index + 1}</td>
                      <td data-title="ID">{user._id}</td>
                      <td data-title="Name">{user.name}</td>
                      <td data-title="Actions">
                        <Link
                          to={`/users/${user._id}`}
                          className="btn btn-info text-white fw-semibold me-1 mb-2 sm:mb-0"
                        >
                          View
                        </Link>
                        <Link
                          onClick={() => handleEditUser(user._id)} // Pass the user ID to handleEditUser
                          className="btn btn-secondary fw-semibold me-1 mb-2 sm:mb-0"
                        >
                          Edit
                        </Link>
                        <Link
                          onClick={() => handleDelete(user._id)}
                          className="btn btn-danger text-white fw-semibold me-1 mb-2 sm:mb-0"
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
