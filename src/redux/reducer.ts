import * as actions from './actions';

const INITIAL_STATE = {
    employees: [],
    employee: null,
    error: false
};

export const reducer = (state = INITIAL_STATE, action: any) => {
    console.log(state, action);
    switch (action.type) {
        case actions.GET_EMPLOYEES:
            console.log(action);
            return {
                ...state,
                employees: action.employees,
                error: action.error
            }
        case actions.REGISTER_EMPLOYEE:
            return {
                ...state,
                employee: action.employee
            }
        case actions.GET_EMPLOYEE:
            return {
                ...state,
                employee: action.employee,
                error: action.error
            }
        case actions.UPDATE_EMPLOYEE:
            return {
                ...state,
                employee: action.employee,
                error: action.error
            }
        case actions.DELETE_EMPLOYEE:
            return {
                ...state,
                updated: action.updated
            }
        default:
            return state;
    }
}