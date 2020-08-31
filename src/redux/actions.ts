export const REGISTER_EMPLOYEE = 'REGISTER_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
export const GET_EMPLOYEES = 'GET_EMPLOYEES';
export const GET_EMPLOYEE = 'GET_EMPLOYEE';

export const REGISTER_DEPARTMENT = 'REGISTER_DEPARTMENT';

import { nanoid } from 'nanoid';

import { Employee } from '../pages/employees/employee.interface';

export const registerEmployee = (employee: Employee) => {
    const employees = localStorage.getItem('employees') ? JSON.parse(localStorage.getItem('employees')) : [];
    employees.push({ ...employee, id: employees.length });
    localStorage.setItem('employees', JSON.stringify(employees));
    return {
        type: REGISTER_EMPLOYEE,
        employee: employee,
        error: false
    }
}

export const getEmployee = (id: string) => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const employee = employees.find((emp: Employee) => { return emp.id == id });
    return {
        type: GET_EMPLOYEE,
        employee: employee || null,
        error: employee ? false : true
    }
}

export const updateEmployee = (employee: Employee) => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const employeesUpdated = employees.map((emp: Employee) => {
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
    }
}

export const getEmployeesResult = (employees, error) => {
    // const employees = localStorage.getItem('employees') ? JSON.parse(localStorage.getItem('employees')) : [];
    // console.log('getEmployees', localStorage.getItem('employees'));
    console.log(employees);
    return {
        type: GET_EMPLOYEES,
        employees: employees,
        error: error
    }
}

export const deleteEmployee = (employee: Employee) => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const employeesAfterDeleted = employees.filter((emp: Employee) => { return emp.id != employee.id });
    localStorage.setItem('employees', JSON.stringify(employeesAfterDeleted));
    console.log('deleteEmployee', employeesAfterDeleted);
    return {
        type: DELETE_EMPLOYEE,
        isDeleted: true,
        error: false
    }
}

export const getEmployees = () => {
    // console.log('getEmployees', localStorage.getItem('employees'));
    return (dispatch: any, getState: any) => {
        console.log(getState());
        let employees = [];
        setTimeout(() => {
            employees = localStorage.getItem('employees') ? JSON.parse(localStorage.getItem('employees')) : [];
            dispatch(getEmployeesResult(employees, true));
        }, 5000);
    }
}
