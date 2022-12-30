import React from 'react';

const Form = (props) => {
    // STEP 2
        const { change, submit, errors } = props;

        const { username, email, password, tos } = props.values;

    // STEP 3 
        const onChange = evt => {
            const { checked, value, name, type} = evt.target;
            const valueToUse = type === 'checkbox'? checked : value ; 
            change(name, valueToUse);
        }

        const onSubmit = evt => {
            evt.preventDefault();
            submit();
        }

    return (
         <div> 
            {/* STEP 1 */}
            <h1>Onboarding Form</h1>

            <div>
                <p>{errors.username}</p>
                <p>{errors.password}</p>
                <p>{errors.email}</p>
                <p>{errors.tos}</p>
                <form onSubmit={onSubmit}>

                    <label>Name:
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={onChange}
                        />
                    </label>

                    <label>Email
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                        />
                    </label>

                    <label>Password:
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={onChange}
                        />
                    </label>

                    <label>Terms of Service:
                        <input
                            type="checkbox"
                            name="tos"
                            onChange={onChange}
                            checked={tos}
                        />
                    </label>

                    <input type="submit" value="Create a new user"/>

                </form>
            </div>
        </div>
        
    )
}

export default Form;