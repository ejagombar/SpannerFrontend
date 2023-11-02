import {
    Navbar,
    Button,
    NavbarContent,
    NavbarBrand,
    NavbarItem,
    Link,
} from '@nextui-org/react'
import { Key } from 'react'
import { SpannerLogo } from './icons'
import { signInBtnClick, accountBtnClick } from './accountFuncs'
import { UserIcon } from './icons'
import ThemeSwitch2 from './themeswitch2'

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
        <div className="flex flex-row items-center pr-1 pl-1">
            <Navbar shouldHideOnScroll>
                <NavbarBrand>
                    <SpannerLogo size={45}></SpannerLogo>
                    <Button
                        className="text-4xl pl-2 bg-transparent "
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
                                isDisabled={item != 'Home' && !signedIn}
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

            <ThemeSwitch2></ThemeSwitch2>
        </div>
    )
}

export default Header
