/*
 * action types
 */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
/*
 * other constants
 */
let nextTodoId = 0

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}
/*
 * action creators
 */
export const addTodo = (text) => {
    const res = { type: ADD_TODO, id: nextTodoId += 1, text };
    return res;
}
export const toggleTodo = (index) => {
    return { type: TOGGLE_TODO, id: nextTodoId, index }
}
export const setVisibilityFilter = (filter) => {
    return { type: SET_VISIBILITY_FILTER, filter }
}
