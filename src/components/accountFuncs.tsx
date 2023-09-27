import { Key } from 'react'
import apiClient from '../services/apiClient'

export const signInBtnClick = (
    setSignedIn: React.Dispatch<React.SetStateAction<boolean>>
) => {
    apiClient
        .get<string>('/api/account/login')
        .then((res) => {
            const url = res.data
            const authWindow = window.open(url, 'Spotify Login', 'popup')

            if (authWindow) {
                // Event listener to check if the popup window is closed
                const checkAuthWindowClosed = setInterval(() => {
                    if (authWindow.closed) {
                        clearInterval(checkAuthWindowClosed)

                        // Call an API endpoint to check if the user is authenticated
                        apiClient
                            .get<string>('/api/account/authenticated')
                            .then((authResponse) => {
                                if (authResponse.data.toString() === 'true') {
                                    setSignedIn(true)
                                } else {
                                    console.error('Authentication failed.')
                                }
                            })
                            .catch((authError) => {
                                console.error(
                                    'Error checking authentication:',
                                    authError
                                )
                            })
                    }
                }, 100)
            } else {
                console.error('Failed to open popup window.')
            }
        })
        .catch((err) => console.log(err))
}

export const accountBtnClick = (setCurrentPage: (currentPage: Key) => void) => {
    setCurrentPage('Account')
}
