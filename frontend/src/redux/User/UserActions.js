import axios from "axios";
import baseURL from "../../api/api";

export const fetchUser = (userId) => async (dispatch) => {
    try {

        if (userId) {
            const response = await axios.get(`${baseURL}/user/${userId}`);

            dispatch({ type: "FETCH_USER_SUCCESS", payload: response.data });
        } else {
            console.log("No userId provided");
        }
    } catch (error) {
        console.log("Fetching user error", error);
        dispatch({ type: "FETCH_USER_FAILURE", payload: error.message || "Unknown error" });
    }
};

export const logoutUser = () => async (dispatch) => {
    try {

        localStorage.removeItem("access");
        localStorage.removeItem("refresh");

       
        dispatch({ type: "LOGOUT_USER" });
    } catch (error) {
        console.log("Logout error", error);

    }
};
