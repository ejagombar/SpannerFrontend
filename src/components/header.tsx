import {
    Navbar,
    Button,
    NavbarContent,
    NavbarBrand,
    NavbarItem,
    Link,
} from '@nextui-org/react'
import { Key } from 'react'
import ThemeSwitch from './themeswitch'

interface Props {
    currentPage: Key
    pageNames: string[]
    setCurrentPage: (currentPage: Key) => void
}

const Header = ({ currentPage, setCurrentPage, pageNames }: Props) => {
    const handleItemClick = (key: string) => {
        setCurrentPage(key)
    }

    return (
        <Navbar shouldHideOnScroll>
            <NavbarBrand>
                <ThemeSwitch></ThemeSwitch>
                <p
                    className="text-3xl pl-2"
                    onClick={() => handleItemClick('Home')}
                >
                    Spanner
                </p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {pageNames.slice(1).map((item) => (
                    <Button
                        key={item}
                        radius="full"
                        variant="bordered"
                        className={`text-xl ${
                            currentPage === item
                                ? 'text-green-500'
                                : 'text-default-800 border-default-300 hover:text-gray-400'
                        } `}
                        onClick={() => handleItemClick(item)}
                    >
                        {item}
                    </Button>
                ))}
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
