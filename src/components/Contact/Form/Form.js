import React from 'react';
import { useState } from 'react';
import './Form.css'

function Form() {

    const [state, setState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [nameValid, setNameValid] = useState(true);
    const [mailValid, setMailValid] = useState(true);
    const [messValid, setMessValid] = useState(true);


    function handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        localStorage.setItem('message', JSON.stringify({ state }));
        setState({
            name: '',
            email: '',
            message: ''
        });
    }

    function checkNameValid() {
        state.name === "" ? setNameValid(false) : setNameValid(true);
    }

    function checkMailValid() {
        state.email === "" ? setMailValid(false) : setMailValid(true);
    }

    function checkMessValid() {
        state.message === "" ? setMessValid(false) : setMessValid(true);
    }

    function Error(props) {
        return (
            <span className={props.input ? " error hide" : 'error show'}>{props.err}</span>
        )
    }

    return (
        <div className="form">
            <h2>Ý kiến của bạn</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <input
                        type="text"
                        name="name"
                        required="require"
                        value={state.name}
                        onChange={handleChange}
                        onBlur={checkNameValid}
                        onInput={() => setNameValid(true)}
                    />
                    {nameValid || <Error input={state.name} err="Vui lòng nhập tên của bạn" />}
                    <span className="label">Họ Tên</span>
                </div>
                <div className="form-row">
                    <input
                        type="text"
                        name="email"
                        required="require"
                        value={state.email}
                        onChange={handleChange}
                        onBlur={checkMailValid}
                        onInput={() => setMailValid(true)}
                    />
                    {mailValid || <Error input={state.email} err="Vui lòng nhập email của bạn" />}
                    <span className="label">Email</span>
                </div>
                <div className="form-row">
                    <textarea
                        type="message"
                        name="message"
                        required="require"
                        value={state.message}
                        onChange={handleChange}
                        onBlur={checkMessValid}
                        onInput={() => setMessValid(true)}
                    >
                    </textarea>
                    {messValid || <Error input={state.message} err="Ý kiến của bạn" />}
                    <span className="label">Lời nhắn</span>
                </div>
                <div className="form-row">
                    <button type="submit">Gửi</button>
                </div>
            </form>
        </div>
    )
}

export default Form
