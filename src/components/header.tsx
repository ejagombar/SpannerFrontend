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
import { signInBtnClick, accountBtnClick } from './accountFuncs'
import { UserIcon } from './icons'

interface Props {
    currentPage: Key
    pageNames: string[]
    setCurrentPage: (currentPage: Key) => void
    signedIn: boolean
    setSignedIn: React.Dispatch<React.SetStateAction<boolean>>
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
        <Navbar shouldHideOnScroll position="static">
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
            <NavbarContent className="hidden sm:flex " justify="center">
                {pageNames.map((item) => (
                    <NavbarItem>
                        <Button
                            key={item}
                            radius="full"
                            variant="bordered"
                            isDisabled={item != "Home" && !signedIn}
                            className={`text-lg ${
                                currentPage === item
                                    ? 'text-green-500'
                                    : 'text-default-800 border-default-300 hover:text-gray-400'
                            } `}
                            onPress={() => handleItemClick(item)}
                        >
                            {item}
                        </Button>
                    </NavbarItem>
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
                        onPress={() => {
                            signedIn
                                ? accountBtnClick(setCurrentPage)
                                : signInBtnClick(setSignedIn)
                        }}
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
