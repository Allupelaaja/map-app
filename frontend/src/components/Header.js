function Header() {

    const styles = {
        header: {
            position: 'relative',
            top: '0',
            left: '0',
            backgroundColor: '#9dc7d5',
            height: '10%',
        },
        headerText: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            margin: '0',
            padding: '0'
        }
      };

    return (
        <div style={styles.header}>
            <h1 style={styles.headerText}>Maps App</h1>
        </div>
    )
}

export default Header