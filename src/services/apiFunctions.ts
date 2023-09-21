import apiClient from '../services/apiClient'

async function authenticatedStatus(): Promise<boolean> {
    try {
        apiClient.get('/api/account/authenticated').then((res) => {
            if (res.status == 200) {
                return true
            }
        })
    } catch (err) {
        console.log(err)
    }
    return false
}
