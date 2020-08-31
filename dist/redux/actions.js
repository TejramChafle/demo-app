export const REGISTER_EMPLOYEE = 'REGISTER_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
export const GET_EMPLOYEES = 'GET_EMPLOYEES';
export const GET_EMPLOYEE = 'GET_EMPLOYEE';
export const REGISTER_DEPARTMENT = 'REGISTER_DEPARTMENT';
export const registerEmployee = (employee) => {
    const employees = localStorage.getItem('employees') ? JSON.parse(localStorage.getItem('employees')) : [];
    employees.push(Object.assign(Object.assign({}, employee), { id: employees.length }));
    localStorage.setItem('employees', JSON.stringify(employees));
    return {
        type: REGISTER_EMPLOYEE,
        employee: employee,
        error: false
    };
};
export const getEmployee = (id) => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const employee = employees.find((emp) => { return emp.id == id; });
    return {
        type: GET_EMPLOYEE,
        employee: employee || null,
        error: employee ? false : true
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
    console.log('updateEmployee', employee);
    return {
        type: UPDATE_EMPLOYEE,
        employees: employeesUpdated,
        error: employeesUpdated ? false : true
    };
};
export const getEmployeesResult = (employees, error) => {
    // const employees = localStorage.getItem('employees') ? JSON.parse(localStorage.getItem('employees')) : [];
    // console.log('getEmployees', localStorage.getItem('employees'));
    console.log(employees);
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
    console.log('deleteEmployee', employeesAfterDeleted);
    return {
        type: DELETE_EMPLOYEE,
        isDeleted: true,
        error: false
    };
};
export const getEmployees = () => {
    // console.log('getEmployees', localStorage.getItem('employees'));
    return (dispatch, getState) => {
        console.log(getState());
        let employees = [];
        setTimeout(() => {
            employees = localStorage.getItem('employees') ? JSON.parse(localStorage.getItem('employees')) : [];
            dispatch(getEmployeesResult(employees, true));
        }, 5000);
    };
};
//# sourceMappingURL=actions.js.map