import React, { useState, useCallback } from 'react';

const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const onChange = useCallback(e => setValue(e.target.value), []);
    return [value, onChange];
};

const UserForm = ({ onSubmit, user }) => {
    const [name, onNameChange] = useInput(user.name);
    const [email, onEmailChange] = useInput(user.email);
    const [password, onPasswordChange] = useInput(user.password);

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                const variables = { name, email, password };
                if (user.id) {
                    variables.id = user.id;
                }
                onSubmit({ variables });
            }}
        >
            <fieldset>
                <label>
                    Name: <input type="text" defaultValue={name} onChange={onNameChange} />
                </label>
                <label>
                    Email: <input type="text" defaultValue={email} onChange={onEmailChange} />
                </label>
                <label>
                    Password: <input type="password" defaultValue={password} onChange={onPasswordChange} />
                </label>
                <button>Submit</button>
            </fieldset>
        </form>
    );
};
export default UserForm;
