const initialState = {
    amount: 0
}

const amountReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DEPOSITAR_DINERO':
            return {
                ...state,
                amount: state.amount + action.payload
            }
        case 'RETIRAR_DINERO':
            return{
                ...state,
                amount: state.amount - action.payload
            }
        default:
            return state
    }
}

export default amountReducer;