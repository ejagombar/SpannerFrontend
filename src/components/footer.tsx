const Footer = () => {
    return (
        <footer className="bg-background p-4">
            <p className="text-center text-foreground">
                ©StudentWallet {new Date().getFullYear()}
            </p>
        </footer>
    )
}

export default Footer
