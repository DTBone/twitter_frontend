import axios from "axios"
import { API_BASE_URL, api } from "../../Config/api"
import { LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE, GET_USER_PROFILE_SUCCESS, GET_USER_PROFILE_FAILURE, LOGOUT, FIND_USER_BY_ID_REQUEST, FIND_USER_BY_ID_FAILURE, UPDATE_USER_REQUEST, UPDATE_USER_FAILURE, FOLLOW_USER_REQUEST, FOLLOW_USER_FAILURE, FIND_USER_BY_ID_SUCCESS, UPDATE_USER_SUCCESS, FOLLOW_USER_SUCCESS } from "./ActionType"

export const loginUser = (loginData) => async (dispatch) => {
    try {
        const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, loginData)
        console.log("logedin user successfully ", data)
        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt)
        }
        dispatch({ type: LOGIN_USER_SUCCESS, payload: data.jwt })
    } catch (error) {
        console.log("error", error)
        dispatch({ type: LOGIN_USER_FAILURE, payload: error.message })
    }
}

export const registerUser = (registerData) => async (dispatch) => {
    try {
        const { data } = await axios.post(`${API_BASE_URL}/auth/signup`, registerData, {
            withCredentials: true,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log("signup user successfully ", data)
        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt)
        }
        dispatch({ type: REGISTER_USER_SUCCESS, payload: data.jwt })
    } catch (error) {
        console.log("error", error)
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("Response data:", error.response.data);
            console.log("Response status:", error.response.status);
            console.log("Response headers:", error.response.headers);
            dispatch({ type: REGISTER_USER_FAILURE, payload: error.response.data.message || error.message });
        } else if (error.request) {
            // The request was made but no response was received
            console.log("Request:", error.request);
            dispatch({ type: REGISTER_USER_FAILURE, payload: "No response received from server" });
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
            dispatch({ type: REGISTER_USER_FAILURE, payload: error.message });
        }
    }
}

export const getUserProfile = (jwt) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/api/users/profile`, {
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        });

        dispatch({ type: GET_USER_PROFILE_SUCCESS, payload: data });
    } catch (error) {
        console.log("error", error);
        dispatch({ type: GET_USER_PROFILE_FAILURE, payload: error.message });
    }
};



export const findUserById = (userId) => async (dispatch) => {
    try {
        const { data } = await api.get(`api/users/${userId}`);
        console.log("findUserById", data);
        dispatch({ type: FIND_USER_BY_ID_SUCCESS, payload: data });
    } catch (error) {
        console.log("error", error);
        dispatch({ type: FIND_USER_BY_ID_FAILURE, payload: error.message });
    }
};


export const updateUserProfile = (reqData) => async (dispatch) => {
    try {
        const { data } = await api.put(`api/users/update`, reqData);
        console.log("update: ", data);
        dispatch({ type: UPDATE_USER_SUCCESS, payload: data });
    } catch (error) {
        console.log("error", error);
        dispatch({ type: UPDATE_USER_FAILURE, payload: error.message });
    }
};

export const followUserAction = (userId) => async (dispatch) => {
    try {
        const { data } = await api.put(`api/users/${userId}/follow`);
        console.log("follow user  : ", data);
        dispatch({ type: FOLLOW_USER_SUCCESS, payload: data });
    } catch (error) {
        console.log("error", error);
        dispatch({ type: FOLLOW_USER_FAILURE, payload: error.message });
    }
};

export const logout = () => async (dispatch) => {

    localStorage.removeItem("jwt")
    dispatch({ type: LOGOUT, payload: null })

}