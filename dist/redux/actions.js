export const REGISTER_EMPLOYEE = 'REGISTER_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
export const GET_EMPLOYEES = 'GET_EMPLOYEES';
export const GET_EMPLOYEE = 'GET_EMPLOYEE';
export const REGISTER_DEPARTMENT = 'REGISTER_DEPARTMENT';
export const LOGIN = 'LOGIN';
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
    return {
        type: GET_EMPLOYEE,
        employee: result.employee,
        error: result.error
    };
};
export const getEmployee = (id) => {
    return (dispatch, getState) => {
        const auth = JSON.parse(localStorage.getItem('auth'));
        return fetch(FIREBASE_CONFIG.databaseURL + '/employees/' + id + '.json?auth=' + auth.idToken)
            .then((response) => {
            return response.json();
        })
            .then((data) => {
            // Here, we update the app state with the results of the API call.
            console.log(data);
            if (data) {
                dispatch(getEmployeeResult({ employee: Object.assign({ id }, data), error: false }));
            }
        })
            .catch((error) => {
            console.log(error);
        });
    };
};
export const updateEmployee = (employee) => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const employeesUpdated = employees.map((emp) => {
        if (emp.id == employee.id) {
            emp = employee;
        }
        return emp;
    });
    localStorage.setItem('employees', JSON.stringify(employeesUpdated));
    return {
        type: UPDATE_EMPLOYEE,
        employees: employeesUpdated,
        error: employeesUpdated ? false : true
    };
};
export const getEmployeesResult = (employees, error) => {
    // const employees = localStorage.getItem('employees') ? JSON.parse(localStorage.getItem('employees')) : [];
    // console.log('getEmployees', localStorage.getItem('employees'));
    // console.log(employees);
    return {
        type: GET_EMPLOYEES,
        employees: employees,
        error: error
    };
};
export const deleteEmployee = (employee) => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const employeesAfterDeleted = employees.filter((emp) => { return emp.id != employee.id; });
    localStorage.setItem('employees', JSON.stringify(employeesAfterDeleted));
    return {
        type: DELETE_EMPLOYEE,
        employees: employeesAfterDeleted,
        isDeleted: true,
        error: false
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
            if (data) {
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
/* export const getEmployees = () => {
    const employees = localStorage.getItem('employees') ? JSON.parse(localStorage.getItem('employees')) : [];
    // console.log(employees);
    return {
        type: GET_EMPLOYEES,
        employees: employees,
        error: employees ? false: true
    }
} */
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
            /* .then((data) => {
                console.log('Request succeeded with JSON response', data);
                if (data.error) {
                    dispatch(authResult({ auth: null, error: data.error }));
                } else {
                    dispatch(authResult({ auth: data, error: false }));
                }
            }) */
            .catch((error) => {
            console.log('Request failed', error);
            dispatch(authResult({ auth: null, error: error }));
        });
    };
};
//# sourceMappingURL=actions.js.map