import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, updateUser } from "../../features/users/userSlice";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UserForm = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the user ID from the URL parameter
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    // If an ID is provided, populate the form with the existing user data
    if (id) {
      const user = users.find((user) => user._id === id);
      if (user) {
        setFormData({
          name: user.name,
          email: user.email,
          phone: user.phone,
        });
      }
    }
  }, [id, users]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.name || !formData.email || !formData.phone) {
      setFormErrors({
        name: !formData.name,
        email: !formData.email,
        phone: !formData.phone,
      });
      return;
    }

    if (id) {
      // If an ID is provided, update the user
      dispatch(updateUser({ id, formData }));
      toast.success("Update user details successfully!");
    } else {
      // If no ID is provided, create a new user
      dispatch(createUser(formData));
      toast.success("User created successfully!");
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
    });

    navigate("/");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: false });
  };

  return (
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10 col-sm-12">
          <form class="shadow rounded-2 p-5" onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="name" class="form-label fw-semibold">
                Name
              </label>
              <input
                type="text"
                className={`form-control ${
                  formErrors.name ? "is-invalid" : ""
                }`}
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name && (
                <div className="invalid-feedback fw-semibold">
                  Name is required
                </div>
              )}
            </div>
            <div class="mb-3">
              <label for="email" class="form-label fw-semibold">
                Email
              </label>
              <input
                type="email"
                className={`form-control ${
                  formErrors.email ? "is-invalid" : ""
                }`}
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && (
                <div className="invalid-feedback fw-semibold">
                  Email is required
                </div>
              )}
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label fw-semibold">
                Phone
              </label>
              <input
                type="number"
                className={`form-control ${
                  formErrors.phone ? "is-invalid" : ""
                }`}
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
              {formErrors.phone && (
                <div className="invalid-feedback fw-semibold">
                  Phone is required
                </div>
              )}
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <button type="submit" className="btn btn-success">
                {id ? "Update User" : "Create User"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
