import { useTheme } from 'next-themes'
import { Switch } from '@nextui-org/react'
import { SunIcon, MoonIcon } from './icons'

import { useState } from 'react'

const ThemeSwitch = () => {
    const { setTheme } = useTheme()
    const [isSelected, setIsSelected] = useState<boolean>(false)

    const handleSwitchChange = (newValue: boolean) => {
        setIsSelected(newValue)
        if (newValue) {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    return (
        <div className="pl-30">
            <Switch
                defaultSelected={false}
                size="lg"
                color="primary"
                isSelected={isSelected}
                onValueChange={handleSwitchChange}
                thumbIcon={({ isSelected, className }) =>
                    isSelected ? (
                        <SunIcon className={className} />
                    ) : (
                        <MoonIcon className={className} />
                    )
                }
            ></Switch>
        </div>
    )
}

export default ThemeSwitch
