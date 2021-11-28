const deposit = payload => {
    return {
        type: 'DEPOSITAR_DINERO',
        payload: payload
    }
}

const withdraw = payload => {
    return {
        type: 'RETIRAR_DINERO',
        payload: payload
    }
}

export { 
    deposit, 
    withdraw 
};
