import StylesMod from './Login.module.css';
import RegisterBox from '../Components/RegisterBox';

const Login = () => {
    return (
        <div className={StylesMod.logWindow}>
            <RegisterBox></RegisterBox>
        </div>
    )
}

export default Login;