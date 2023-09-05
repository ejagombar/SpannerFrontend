import { useTheme } from 'next-themes'

import { SpannerLogo } from './icons'
import { useEffect, useState } from 'react'

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null
    return (
        <div>
            <SpannerLogo
                onPress={() => {
                    theme === 'dark' ? setTheme('light') : setTheme('dark')
                }}
                size={35}
            ></SpannerLogo>
        </div>
    )
}

export default ThemeSwitch
