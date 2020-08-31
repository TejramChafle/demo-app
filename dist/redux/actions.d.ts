export declare const REGISTER_EMPLOYEE = "REGISTER_EMPLOYEE";
export declare const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";
export declare const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
export declare const GET_EMPLOYEES = "GET_EMPLOYEES";
export declare const GET_EMPLOYEE = "GET_EMPLOYEE";
export declare const REGISTER_DEPARTMENT = "REGISTER_DEPARTMENT";
import { Employee } from '../pages/employees/employee.interface';
export declare const registerEmployee: (employee: Employee) => {
    type: string;
    employee: Employee;
    error: boolean;
};
export declare const getEmployee: (id: string) => {
    type: string;
    employee: any;
    error: boolean;
};
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
export declare const deleteEmployee: (employee: Employee) => {
    type: string;
    isDeleted: boolean;
    error: boolean;
};
export declare const getEmployees: () => {
    type: string;
    employees: any;
    error: boolean;
};
//# sourceMappingURL=actions.d.ts.map