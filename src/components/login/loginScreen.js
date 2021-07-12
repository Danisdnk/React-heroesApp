import React from 'react'

export const loginScreen = ({ history }) => {

    const handleLogin = () => {
        history.replace('/');
    }
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <button className="btn btn-primary" onClick={handleLogin}>
                Ingresar
            </button>
        </div>
    )
}
