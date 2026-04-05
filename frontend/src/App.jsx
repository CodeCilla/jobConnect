import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.testContainer}>
      <header className={styles.card}>
        <div>
          <h1 className={styles.title}>JobConnect</h1>
          <p className={styles.description}>
            Test du système de design : <span className={styles.highlight}>Police Roboto chargée !</span>
          </p>
        </div>
        
        {/* Un petit badge pour tester une autre taille du mixin font */}
        <div style={{ 
          backgroundColor: '#E5E7EB', 
          padding: '4px 12px', 
          borderRadius: '20px',
          fontSize: '0.75rem' // On testera le xs ici via le mixin plus tard
        }}>
          v1.0-alpha
        </div>
      </header>
    </div>
  );
}

export default App;