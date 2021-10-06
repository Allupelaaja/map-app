function Footer() {

    const styles = {
        footer: {
            position: 'relative',
            textAlign: 'center',
            width: '100%',
            bottom: '0',
            left: '0',
            backgroundColor: '#9dc7d5',
            zIndex: '1000',
            height: '5%',
        },
        footerText: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '0',
            margin: '0',
        }
    };

    return (
        <div style={styles.footer}>
            <p style={styles.footerText}>Aleksi Heikkilä 2021</p>
        </div>
    )
}

export default Footer