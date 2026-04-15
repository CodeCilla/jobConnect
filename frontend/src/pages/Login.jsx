import s from './Login.module.scss';

const Login = () => {
    return (
        <section className={s.loginContainer}>
            <div className={s.card}>
                <h1 className={s.title}>Connectez-vous</h1>
                <p className={s.text}>Formulaire de connexion à venir...</p>
            </div>
        </section>
    );
};

export default Login;