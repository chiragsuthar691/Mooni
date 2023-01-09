// export const login = (payload) => async (dispatch) => {
//   try {
//     if (payload) {
//       dispatch(setLoading(true));
//       console.log("payload", payload);
//       const response = await axios.post(
//         `${REACT_APP_APIURL}/auth/login`,
//         payload
//       );
//       const data = response.data;
//       console.log("data", data);
//       //   dispatch();
//     }
//   } catch (error) {
//     console.log("error", error);
//     dispatch(displayErrorMessage());
//   } finally {
//     dispatch(setLoading(false));
//   }
// };
