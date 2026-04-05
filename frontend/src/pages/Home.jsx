import s from './Home.module.scss';

const Home = () => {
    return (
        <section className={s.homeContainer}>
            <h1 className={s.title}>Bienvenue sur JobConnect</h1>
            <p className={s.text}>La plateforme pour les experts full stack.</p>
        </section>
    );
};

export default Home;