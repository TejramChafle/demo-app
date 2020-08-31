import * as actions from './actions';
const INITIAL_STATE = {
    employees: []
};
export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.GET_EMPLOYEES:
            return Object.assign(Object.assign({}, state), { employees: action.employees, error: action.error });
        case actions.REGISTER_EMPLOYEE:
            return Object.assign(Object.assign({}, state), { employee: action.employee });
        case actions.GET_EMPLOYEE:
            return Object.assign(Object.assign({}, state), { employee: action.employee, error: action.error });
        case actions.UPDATE_EMPLOYEE:
            return Object.assign(Object.assign({}, state), { employee: action.employee, error: action.error });
        case actions.DELETE_EMPLOYEE:
            return Object.assign(Object.assign({}, state), { updated: action.updated });
        default:
            return state;
    }
};
//# sourceMappingURL=reducer.js.map