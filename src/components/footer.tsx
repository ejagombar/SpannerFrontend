const Footer = () => {
    return (
        <footer className="bg-background p-4">
            <p className="text-center text-foreground">
                ©{new Date().getFullYear()}
            </p>
            <p className="text-center text-foreground">Edward Agombar</p>
        </footer>
    )
}

export default Footer
