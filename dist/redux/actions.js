export const REGISTER_EMPLOYEE = 'REGISTER_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
export const GET_EMPLOYEES = 'GET_EMPLOYEES';
export const GET_EMPLOYEE = 'GET_EMPLOYEE';
export const REGISTER_DEPARTMENT = 'REGISTER_DEPARTMENT';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOADING = 'LOADING';
import { FIREBASE_CONFIG } from '../config';
/* import axios from 'axios';
const apiClient = axios.create({
    baseURL: 'https://run.mocky.io/v3/0c3d3c02-d27a-4d87-a9a1-e5fdc31dc836',
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json'
    }
}); */
// import fetch from 'cross-fetch';
// import 'cross-fetch/polyfill';
export const registerEmployeeResult = (result) => {
    return {
        type: REGISTER_EMPLOYEE,
        employee: result.employee,
        error: result.error
    };
};
export const registerEmployee = (employee) => {
    return (dispatch, getState) => {
        const auth = JSON.parse(localStorage.getItem('auth'));
        return fetch(FIREBASE_CONFIG.databaseURL + '/employees.json?auth=' + auth.idToken, {
            method: 'post',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(employee)
        })
            .then((response) => {
            return response.json();
        })
            .then((data) => {
            // Here, we update the app state with the results of the API call.
            console.log(data);
            if (data) {
                let result;
                for (const key in data) {
                    result = data[key];
                }
                dispatch(registerEmployeeResult({ employee: result, error: false }));
            }
        })
            .catch((error) => {
            console.log(error);
        });
    };
};
export const getEmployeeResult = (result) => {
    console.log(result);
    return {
        type: GET_EMPLOYEE,
        employee: result.employee,
        error: result.error
    };
};
export const getEmployee = (id) => {
    return (dispatch, getState) => {
        const auth = JSON.parse(localStorage.getItem('auth'));
        return fetch(FIREBASE_CONFIG.databaseURL + '/employees/' + id + '.json?auth=' + auth.idToken, {
            method: 'get',
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((response) => {
            // console.log(response.json());
            const resp = response.json();
            resp.then((data) => {
                console.log(data);
                if (data) {
                    dispatch(getEmployeeResult({ employee: Object.assign({ id }, data), error: false }));
                }
            });
            return resp;
        })
            .catch((error) => {
            console.log(error);
        });
    };
};
export const updateEmployeeResult = (employees) => {
    return {
        type: UPDATE_EMPLOYEE,
        employees: employees,
        error: employees && employees.length ? false : true
    };
};
export const updateEmployee = (employee) => {
    console.log(employee);
    return (dispatch, getState) => {
        const auth = JSON.parse(localStorage.getItem('auth'));
        return fetch(FIREBASE_CONFIG.databaseURL + '/employees/' + employee.id + '.json?auth=' + auth.idToken, {
            method: 'put',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(employee)
        })
            .then((response) => {
            // console.log(response.json());
            const resp = response.json();
            resp.then((data) => {
                const employees = getState().state.employees.map((emp) => {
                    if (emp.id == employee.id) {
                        emp = data;
                    }
                    return emp;
                });
                dispatch(updateEmployeeResult(employees));
            });
            return resp;
        })
            .catch((error) => {
            console.log(error);
        });
    };
};
export const getEmployeesResult = (employees, error) => {
    return {
        type: GET_EMPLOYEES,
        employees: employees,
        error: error
    };
};
export const deleteEmployeeResult = (result) => {
    return {
        type: DELETE_EMPLOYEE,
        employees: result.employees,
        isDeleted: !result.error,
        error: result.error
    };
};
export const deleteEmployee = (employee) => {
    return (dispatch, getState) => {
        const auth = JSON.parse(localStorage.getItem('auth'));
        return fetch(FIREBASE_CONFIG.databaseURL + '/employees/' + employee.id + '.json?auth=' + auth.idToken, {
            method: 'delete',
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((response) => {
            // console.log(response.json());
            response.json().then((data) => {
                console.log(data);
                console.log(getState().state.employees);
                if (!data) {
                    const employees = getState().state.employees.filter((emp) => { return emp.id != employee.id; });
                    dispatch(deleteEmployeeResult({ employees: employees, error: false }));
                }
            });
            return response.json();
        })
            .catch((error) => {
            console.log(error);
        });
    };
};
export const getEmployees = () => {
    return (dispatch, getState) => {
        const auth = JSON.parse(localStorage.getItem('auth'));
        // 'https://run.mocky.io/v3/5fa28a2b-839c-4a92-bc11-b73bed2a2938'
        return fetch(FIREBASE_CONFIG.databaseURL + '/employees.json?auth=' + auth.idToken)
            .then((response) => {
            return response.json();
        })
            .then((data) => {
            // Here, we update the app state with the results of the API call.
            console.log(data);
            if (data.error) {
                if (data.error == 'Auth token is expired') {
                    dispatch(logout());
                }
            }
            else if (data) {
                const employees = [];
                for (const key in data) {
                    employees.push({
                        id: key,
                        name: data[key]['name'],
                        email: data[key]['email'],
                        gender: data[key]['gender'],
                        department: data[key]['department'],
                        joiningdate: data[key]['joiningdate']
                    });
                }
                dispatch(getEmployeesResult(employees, false));
            }
            else {
                dispatch(getEmployeesResult(data, true));
            }
        })
            .catch((error) => {
            console.log(error);
        });
    };
};
export const authResult = (result) => {
    return {
        type: LOGIN,
        auth: result.auth,
        error: result.error
    };
};
export const login = (credentials) => {
    return (dispatch, getState) => {
        console.log(getState());
        return fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + FIREBASE_CONFIG.apiKey, {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: 'email=' + credentials.email + '&password=' + credentials.password + '&returnSecureToken=' + true
        })
            .then((response) => {
            return response.json();
        })
            .catch((error) => {
            console.log('Request failed', error);
            dispatch(authResult({ auth: null, error: error }));
        });
    };
};
export const logout = () => {
    localStorage.clear();
    return {
        type: LOGOUT,
        auth: null,
        error: false
    };
};
export const loading = (isLoading) => {
    return {
        type: LOADING,
        isLoading: isLoading
    };
};
//# sourceMappingURL=actions.js.map