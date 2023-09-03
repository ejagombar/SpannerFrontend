import {
    Navbar,
    Button,
    NavbarContent,
    NavbarBrand,
    NavbarItem,
    Link,
} from '@nextui-org/react'
import { Key, useState } from 'react'
import ThemeSwitch from './themeswitch'
import apiClient from '../services/apiClient'

interface Props {
    currentPage: Key
    pageNames: string[]
    setCurrentPage: (currentPage: Key) => void
}

const Header = ({ currentPage, setCurrentPage, pageNames }: Props) => {
    const [error, setError] = useState<string>('')

    const handleItemClick = (key: string) => {
        setCurrentPage(key)
    }

    // const signInBtnClick = () => {
    //     apiClient
    //         .get<string>('/login')
    //         .then((res) => setUrl(res.data))
    //         .catch((err) => setError(err.message))
    //     console.log(url)
    //     console.log(error)
    //     window.open(url, 'Spotify Login', 'popup')
    // }

    const signInBtnClick = () => {
        apiClient
            .get<string>('/login')
            .then((res) => {
                const url = res.data
                const authWindow = window.open(url, 'Spotify Login', 'popup')

                if (authWindow) {
                    //event listener to check if the popup window is closed
                    const checkAuthWindowClosed = setInterval(() => {
                        if (authWindow.closed) {
                            clearInterval(checkAuthWindowClosed)
                            console.log('window closed BOOOM')
                        }
                    }, 100)
                } else {
                    console.error('Failed to open popup window.')
                }
            })
            .catch((err) => setError(err.message))
    }

    return (
        <Navbar shouldHideOnScroll>
            <NavbarBrand>
                <ThemeSwitch></ThemeSwitch>
                <button
                    className="text-3xl pl-2"
                    onClick={() => handleItemClick('Home')}
                >
                    Spanner
                </button>
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
                        onPress={signInBtnClick}
                    >
                        Sign In With Spotify
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default Header
