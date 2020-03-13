export const REQUEST_INCREMENT = 'REQUEST_INCREMENT';
export const REQUEST_DECREMENT = 'REQUEST_DECREMENT';

export const increment = () => {
 return { type: 'INCREMENT'}
}

export const decrement = () => {
    return { type: 'DECREMENT'}
}
