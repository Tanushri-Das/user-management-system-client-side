// // UserList.js

// import React, { useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteUser, fetchUsers } from "../../features/users/userSlice";

// const UserList = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { users, loading, error } = useSelector((state) => state.user);

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     dispatch(deleteUser(id));
//   };

//   const handleAddUser = () => {
//     navigate("/users/add");
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div className="table-responsive w-75 mx-auto my-5">
//       <table className="table">
//         <thead>
//           <tr>
//             <th scope="col">ID</th>
//             <th scope="col">Name</th>
//             <th scope="col">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user._id}>
//               <td>{user._id}</td>
//               <td>{user.name}</td>
//               <td>
//                 <Link
//                   to={`/users/${user._id}`}
//                   className="btn btn-sm btn-primary me-1"
//                 >
//                   View
//                 </Link>
//                 <Link
//                   to={`/users/${user._id}/edit`}
//                   className="btn btn-sm btn-secondary me-1"
//                 >
//                   Edit
//                 </Link>
//                 <button
//                   className="btn btn-sm btn-danger"
//                   onClick={() => handleDelete(user._id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button className="btn btn-primary" onClick={handleAddUser}>
//         Add User
//       </button>
//     </div>
//   );
// };

// export default UserList;

// UserList.js

// UserList.js

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUsers } from "../../features/users/userSlice";
import Spinner from "../../Components/Spinner/Spinner";

const UserList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleAddUser = () => {
    navigate("/users/add");
  };
  const handleEditUser = (id) => {
    navigate(`/users/edit/${id}`);
  };
  if (loading) {
    return <Spinner/>;
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
      <div className="container">
        <div className="row">
          <div className="table-responsive-sm">
            <table className="table table-fixed">
              <thead>
                <tr>
                  <th className="col-xs-3">#</th>
                  <th className="col-xs-3">ID</th>
                  <th className="col-xs-3">Name</th>
                  <th className="col-xs-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <th className="col-xs-2" scope="row">
                      {index + 1}
                    </th>
                    <td className="col-xs-4">{user._id}</td>
                    <td className="col-xs-3">{user.name}</td>
                    <td className="col-xs-3">
                      <Link
                        to={`/users/${user._id}`}
                        className="btn btn-info text-white fw-semibold me-1 mb-2 sm:mb-0"
                      >
                        View
                      </Link>
                      <button
                        className="btn btn-secondary fw-semibold me-1 mb-2 sm:mb-0"
                        onClick={() => handleEditUser(user._id)} // Pass the user ID to handleEditUser
                      >
                        Edit
                      </button>

                      <button
                        className="btn fw-semibold btn-danger"
                        onClick={() => handleDelete(user._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;