import * as actions from './actions';

const INITIAL_STATE = {
    employees: []
};

export const reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case actions.GET_EMPLOYEES:
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