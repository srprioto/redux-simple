import React from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../store/actions'

const mapDispatchToProps = { deposit, withdraw };

const mapStateToProps = (state) => { 
    return {
        amount: state.amountReducer.amount
    }
}

const Counter = ({ amount, deposit, withdraw }) => {
    return (
        <div>
            <h2>{ amount }</h2>
            <button onClick={() => { deposit(10) }}>Depositar</button>
            <button onClick={() => { withdraw(10) }}>Retirar</button>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);


