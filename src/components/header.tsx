import {
    Tabs,
    Tab,
    Navbar,
    NavbarBrand,
    NavbarContent,
} from '@nextui-org/react'
import { Key } from 'react'
import ThemeSwitch from './themeswitch'

interface Props {
    currentPage: Key
    pageNames: string[]
    setCurrentPage: (currentPage: Key) => void
}

const Header = () => {
    return (
        <Navbar>
            <NavbarBrand>
                <p className="text-lg ">StudentWalletLogo</p>
            </NavbarBrand>

            <NavbarContent
                justify="center"
                className="hidden sm:flex gap-4 text-2xl"
            >
                TimeLine
            </NavbarContent>

            <NavbarContent justify="end">
                <ThemeSwitch />
            </NavbarContent>
        </Navbar>
    )
}

export default Header
