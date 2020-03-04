// 防止action的type值重复，给相应的前面加个prefix
export const INCREMENT = "counter/INCREMENT"
export const DECREMENT = "counter/DECREMENT"
export const RESET = "counter/RESET"

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function reset() {
    return {
        type: RESET
    }
}