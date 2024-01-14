const Footer = () => {
    return (
        <footer className="bg-background p-4">
            <p className="text-center text-foreground pt-1">
                This website is not affiliated with Spotify AB
            </p>
            <p className="text-center text-foreground text-default-300  ">
                ©{new Date().getFullYear()} Spanner - Developed by Edward Agombar
            </p>
        </footer>
    )
}

export default Footer
