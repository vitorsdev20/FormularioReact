const Header = () => {
    const headerStyle = {
        backgroundColor: "#222b42",
        padding: '13px',
        textAlign: 'center',
        width: '500px',
        margin: "auto",
        marginTop: '40px',
        borderRadius: '5px',
        margin: '0 auto'
    }

    const titleStyle = {
        margin: 0,
        fontSize: '24px',
        color: '#ffffff'
        
    }

    return (
        <header style={headerStyle}>
            <h1 style={titleStyle}>Cadastro</h1>
        </header>
    );
};

export default Header;