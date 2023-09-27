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
import apiClient from '../services/apiClient'
import { UserIcon } from './icons'
import { authenticatedStatus } from '../services/apiFunctions'

interface Props {
    currentPage: Key
    pageNames: string[]
    setCurrentPage: (currentPage: Key) => void
    signedIn: boolean
    setSignedIn: React.Dispatch<React.SetStateAction<boolean>>
}

const signInBtnClick = (
    setSignedIn: React.Dispatch<React.SetStateAction<boolean>>
) => {
    apiClient
        .get<string>('/api/account/login')
        .then((res) => {
            const url = res.data
            const authWindow = window.open(url, 'Spotify Login', 'popup')

            if (authWindow) {
                //event listener to check if the popup window is closed
                const checkAuthWindowClosed = setInterval(() => {
                    if (authWindow.closed) {
                        clearInterval(checkAuthWindowClosed)
                        setSignedIn(true)
                    }
                }, 100)
            } else {
                console.error('Failed to open popup window.')
            }
        })
        .catch((err) => console.log(err))
}

const Header = ({
    currentPage,
    setCurrentPage,
    pageNames,
    signedIn,
    setSignedIn,
}: Props) => {
    const handleItemClick = (key: string) => {
        setCurrentPage(key)
    }

    return (
        <Navbar shouldHideOnScroll>
            <NavbarBrand>
                <ThemeSwitch></ThemeSwitch>
                <Button
                    className="text-3xl pl-2 bg-transparent "
                    disableRipple
                    onPress={() => handleItemClick('Home')}
                >
                    Spanner
                </Button>
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
                        onPress={() => handleItemClick(item)}
                    >
                        {item}
                    </Button>
                ))}
            </NavbarContent>
            <NavbarContent justify="start">
                <NavbarItem>
                    <Button
                        as={Link}
                        color="primary"
                        href="#"
                        variant="bordered"
                        radius="full"
                        onPress={() => signInBtnClick(setSignedIn)}
                    >
                        {signedIn ? (
                            <>
                                <UserIcon color="primary" /> <p>Account</p>
                            </>
                        ) : (
                            'Sign In With Spotify'
                        )}
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default Header
