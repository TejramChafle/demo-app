import * as actions from './actions';

const INITIAL_STATE = {
    employees: [],
    employee: null,
    error: false,
    auth: null,
    isLoading: false
};

export const reducer = (state = INITIAL_STATE, action: any) => {
    // console.log(state, action);
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
                employee: action.employee,
                error: action.error
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
                employees: action.employees,
                error: action.error
            }
        case actions.LOGIN:
            return {
                ...state,
                auth: action.auth,
                error: action.error
            }
        case actions.LOGOUT:
            return {
                ...state,
                auth: action.auth,
                error: action.error
            }
        case actions.LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state;
    }
}