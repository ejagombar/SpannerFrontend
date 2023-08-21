import {
    Navbar,
    Button,
    NavbarContent,
    NavbarBrand,
    NavbarItem,
    Link,
} from '@nextui-org/react'
import { SpannerLogo } from './icons'

const Header = () => {
    return (
        <Navbar position="static">
            <NavbarBrand>
                <SpannerLogo></SpannerLogo>
                <p className="text-3xl pl-2">Spanner</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive>Playlist Analyis</NavbarItem>
                <NavbarItem>Playlist Compare</NavbarItem>
                <NavbarItem>Top Tracks</NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button
                        as={Link}
                        color="primary"
                        href="#"
                        variant="bordered"
                        radius="full"
                    >
                        Sign In With Spotify
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default Header
