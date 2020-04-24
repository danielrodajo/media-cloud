import React from 'react';

const Verify = props => {

    const handleVerification = event => {
        event.preventDefault();
        const { username, code } = props.inputs;
        // After retrieveing the confirmation code from the user
        /*Auth.confirmSignUp(username, code, {
          // Optional. Force user confirmation irrespective of existing alias. By default set to True.
          forceAliasCreation: true
        })
          .then(data => console.log(data))
          .then(()=>props.switchComponent("SignIn"))
          .catch(err => console.log(err));*/
      };

    return (
        <form className="">
            <input
                type="text"
                name="code"
                value={props.code}
                placeholder="Código de verificación"
                onChange={props.handleFormInput}
                className=""
            />
            <input
                type="submit"
                value="Verificar"
                onClick={handleVerification}
                className=""
            />
        </form>
    );
}
 
export default Verify;