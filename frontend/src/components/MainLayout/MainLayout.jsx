import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';
import styles from './MainLayout.module.scss';

function MainLayout() {
    return (
        <div className={styles.layout}>
            <Navbar />
            <main className={styles.content}>
                <Outlet />
            </main>

        </div>
    );
}

export default MainLayout;