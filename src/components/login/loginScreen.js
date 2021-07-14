import React from 'react'

export const loginScreen = ({ history }) => {

    const handleLogin = () => {
        if (history.length <= 2) {
            history.replace('/');
        }
        else {
            history.goBack();
        }
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
