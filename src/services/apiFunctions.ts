import apiClient from '../services/apiClient'

export async function authenticatedStatus(): Promise<boolean> {
    try {
        const response = await apiClient.get<string>(
            '/api/account/authenticated'
        )

        if (response.data === 'true') {
            return true
        } else {
            return false
        }
    } catch (error) {
        // Handle any errors that may occur during the request
        console.error('Error:', error)
        return false // Return false on error
    }
}
