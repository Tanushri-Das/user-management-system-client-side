
// // userSlice.js

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchUsers = createAsyncThunk(
//   "user/fetchUsers",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         "https://user-management-system-server-side.vercel.app/users"
//       );
//       console.log(response.data); // Log the fetched users
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const createUser = createAsyncThunk(
//   "user/createUser",
//   async (formData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         "https://user-management-system-server-side.vercel.app/users",
//         formData
//       );
//       console.log(response.data);
//       return response.data;
//     } catch (error) {
//       if (error.response && error.response.data) {
//         // The request was made and the server responded with an error status code
//         console.log("Error creating user:", error.response.data);
//         return rejectWithValue(error.response.data);
//       } else if (error.request) {
//         // The request was made but no response was received
//         console.log("Error creating user:", error.request);
//         return rejectWithValue(error.request);
//       } else {
//         // Something happened in setting up the request that triggered an Error
//         console.log("Error creating user:", error.message);
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

// export const fetchUser = createAsyncThunk(
//   "user/fetchUser",
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         `https://user-management-system-server-side.vercel.app/users/${id}`
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
// export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
//   await axios.delete(
//     `https://user-management-system-server-side.vercel.app/users/${id}`
//   );
//   return id;
// });

// export const updateUser = createAsyncThunk(
//   "user/updateUser",
//   async ({ id, formData }, { rejectWithValue }) => {
//     try {
//       const response = await axios.put(
//         `https://user-management-system-server-side.vercel.app/users/${id}`,
//         formData
//       );
//       return { id, user: response.data }; // Include the updated user data in the payload
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     users: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUsers.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.loading = false;
//         state.error = null;
//         state.users = action.payload;
//       })
//       .addCase(fetchUsers.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(createUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(createUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.error = null;
//         state.users.push(action.payload);
//       })
//       .addCase(createUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(deleteUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(deleteUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.error = null;
//         // Remove the deleted user from the state
//         state.users = state.users.filter((user) => user._id !== action.payload);
//       })
//       .addCase(deleteUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(updateUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(updateUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.error = null;
//         // Update the user in the state
//         const updatedUser = action.payload;
//         const index = state.users.findIndex((user) => user._id === updatedUser._id);
//         if (index !== -1) {
//           state.users[index] = updatedUser;
//         }
//       })
//       .addCase(updateUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default userSlice.reducer;



// userSlice.js

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchUsers = createAsyncThunk(
//   "user/fetchUsers",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         "https://user-management-system-server-side.vercel.app/users"
//       );
//       // console.log(response.data); // Log the fetched users
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const createUser = createAsyncThunk(
//   "user/createUser",
//   async (formData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         "https://user-management-system-server-side.vercel.app/users",
//         formData
//       );
//       // console.log(response.data);
//       return response.data;
//     } catch (error) {
//       if (error.response && error.response.data) {
//         // The request was made and the server responded with an error status code
//         console.log("Error creating user:", error.response.data);
//         return rejectWithValue(error.response.data);
//       } else if (error.request) {
//         // The request was made but no response was received
//         console.log("Error creating user:", error.request);
//         return rejectWithValue(error.request);
//       } else {
//         // Something happened in setting up the request that triggered an Error
//         console.log("Error creating user:", error.message);
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

// export const fetchUser = createAsyncThunk(
//   "user/fetchUser",
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         `https://user-management-system-server-side.vercel.app/users/${id}`
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
// export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
//   await axios.delete(
//     `https://user-management-system-server-side.vercel.app/users/${id}`
//   );
//   return id;
// });

// export const updateUser = createAsyncThunk(
//   "user/updateUser",
//   async ({ id, formData }, { rejectWithValue }) => {
//     try {
//       const response = await axios.put(
//         `https://user-management-system-server-side.vercel.app/users/${id}`,
//         formData
//       );
//       console.log(response)
//       return { id, user: response.data }; // Include the updated user data in the payload
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     users: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUsers.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.loading = false;
//         state.error = null;
//         state.users = action.payload;
//       })
//       .addCase(fetchUsers.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(createUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(createUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.error = null;
//         state.users.push(action.payload);
//       })
//       .addCase(createUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(deleteUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(deleteUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.error = null;
//         // Remove the deleted user from the state
//         state.users = state.users.filter((user) => user._id !== action.payload);
//       })
//       .addCase(deleteUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(updateUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(updateUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.error = null;
//         const { id, user } = action.payload;
//         // Find the index of the updated user in the state.users array
//         const index = state.users.findIndex((existingUser) => existingUser._id === id);
//         if (index !== -1) {
//           // Replace the existing user with the updated user in the state.users array
//           state.users[index] = user;
//         }
//       })
           
      
//       .addCase(updateUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default userSlice.reducer;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://user-management-system-server-side.vercel.app/users"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createUser = createAsyncThunk(
  "user/createUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://user-management-system-server-side.vercel.app/users",
        formData
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        console.log("Error creating user:", error.response.data);
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        console.log("Error creating user:", error.request);
        return rejectWithValue(error.request);
      } else {
        console.log("Error creating user:", error.message);
        return rejectWithValue(error.message);
      }
    }
  }
);

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://user-management-system-server-side.vercel.app/users/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
  await axios.delete(
    `https://user-management-system-server-side.vercel.app/users/${id}`
  );
  return id;
});

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `https://user-management-system-server-side.vercel.app/users/${id}`,
        formData
      );
      console.log(response);
      return { id, user: response.data }; // Include the updated user data in the payload
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  users: [],
  user: null, // Add the user property to the initial state
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.users = state.users.filter((user) => user._id !== action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const { id, user } = action.payload;
        const index = state.users.findIndex(
          (existingUser) => existingUser._id === id
        );
        if (index !== -1) {
          state.users[index] = user;
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
