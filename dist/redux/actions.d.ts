export declare const REGISTER_EMPLOYEE = "REGISTER_EMPLOYEE";
export declare const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";
export declare const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
export declare const GET_EMPLOYEES = "GET_EMPLOYEES";
export declare const GET_EMPLOYEE = "GET_EMPLOYEE";
export declare const REGISTER_DEPARTMENT = "REGISTER_DEPARTMENT";
export declare const LOGIN = "LOGIN";
import { Employee } from '../pages/employees/employee.interface';
export declare const registerEmployeeResult: (result: {
    employee: Employee;
    error: boolean;
}) => {
    type: string;
    employee: Employee;
    error: boolean;
};
export declare const registerEmployee: (employee: Employee) => (dispatch: any, getState: any) => Promise<void>;
export declare const getEmployeeResult: (result: {
    employee: Employee;
    error: boolean;
}) => {
    type: string;
    employee: Employee;
    error: boolean;
};
export declare const getEmployee: (id: string) => (dispatch: any, getState: any) => Promise<any>;
export declare const updateEmployee: (employee: Employee) => {
    type: string;
    employees: any;
    error: boolean;
};
export declare const getEmployeesResult: (employees: any, error: any) => {
    type: string;
    employees: any;
    error: any;
};
export declare const deleteEmployeeResult: (result: {
    employees: Array<Employee>;
    error: boolean;
}) => {
    type: string;
    employees: Employee[];
    isDeleted: boolean;
    error: boolean;
};
export declare const deleteEmployee: (employee: Employee) => (dispatch: any, getState: any) => Promise<any>;
export declare const getEmployees: () => (dispatch: any, getState: any) => Promise<void>;
export declare const authResult: (result: any) => {
    type: string;
    auth: any;
    error: any;
};
export declare const login: (credentials: any) => (dispatch: any, getState: any) => Promise<any>;
//# sourceMappingURL=actions.d.ts.map