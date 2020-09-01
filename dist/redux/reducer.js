import * as actions from './actions';
const INITIAL_STATE = {
    employees: [],
    employee: null,
    error: false,
    auth: null
};
export const reducer = (state = INITIAL_STATE, action) => {
    // console.log(state, action);
    switch (action.type) {
        case actions.GET_EMPLOYEES:
            return Object.assign(Object.assign({}, state), { employees: action.employees, error: action.error });
        case actions.REGISTER_EMPLOYEE:
            return Object.assign(Object.assign({}, state), { employee: action.employee, error: action.error });
        case actions.GET_EMPLOYEE:
            return Object.assign(Object.assign({}, state), { employee: action.employee, error: action.error });
        case actions.UPDATE_EMPLOYEE:
            return Object.assign(Object.assign({}, state), { employee: action.employee, error: action.error });
        case actions.DELETE_EMPLOYEE:
            return Object.assign(Object.assign({}, state), { employees: action.employees, error: action.error });
        case actions.LOGIN:
            return Object.assign(Object.assign({}, state), { auth: action.auth, error: action.error });
        default:
            return state;
    }
};
//# sourceMappingURL=reducer.js.map