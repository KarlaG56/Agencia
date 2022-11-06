import {Link} from 'react-router-dom';

function Button() {
    return (
        <div className="button-container">
            <Link id="Login-button" to="/Home">Log in</Link><br />
            <h4>or</h4><br />
            <Link id="Create-button" to="/Register">Create account</Link>
        </div>
    );
}

export default Button;