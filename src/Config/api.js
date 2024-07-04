import axios from "axios"

export const API_BASE_URL = "http://localhost:5454"

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json"
    }
})

// export const api = axios.create({
//     baseURL: API_BASE_URL,
//     headers: {
//         "Content-Type": "application/json"
//     }
// });

// api.interceptors.request.use(
//     config => {
//         const token = localStorage.getItem("jwt");
//         if (token) {
//             config.headers["Authorization"] = `Bearer ${token}`;
//         }
//         return config;
//     },
//     error => Promise.reject(error)
// );

// api.interceptors.response.use(
//     response => response,
//     error => {
//         if (error.response && error.response.status === 401) {
//             // Token hết hạn hoặc không hợp lệ
//             localStorage.removeItem("jwt"); // Xóa token không hợp lệ
//             // Redirect tới trang đăng nhập hoặc dispatch một action để cập nhật state
//             // history.push('/login');
//             // hoặc
//             // store.dispatch({ type: 'AUTH_ERROR' });
//         }
//         return Promise.reject(error);
//     }
// );