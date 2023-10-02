import { useEffect, useState } from 'react'
import apiClient from '../services/apiClient'
import { CanceledError } from 'axios'
import PlaylistSelector, {
    playlistMetadata,
} from '../components/playlistSelector'

interface Props {
    userPlaylists: playlistMetadata[]
    setUserPlaylists: React.Dispatch<React.SetStateAction<playlistMetadata[]>>
}

const PlaylistAnalysis = ({ userPlaylists, setUserPlaylists }: Props) => {
    const [error, setError] = useState('')

    useEffect(() => {
        const controller = new AbortController()

        if (userPlaylists.length > 0) return

        apiClient
            .get<playlistMetadata[]>('/api/profile/userplaylists', {
                signal: controller.signal,
            })
            .then((res) => {
                setUserPlaylists(res.data)
                setError('')
            })
            .catch((err) => {
                if (err instanceof CanceledError) return
                setError(err.message)
                console.log(err.message)
            })

        console.log(userPlaylists)
        return () => controller.abort()
    }, [])

    return (
        <>
            {error && <p className="text-warning pt-5 text-xl">{error}</p>}
            <PlaylistSelector userPlaylists={userPlaylists} />
        </>
    )
}
export default PlaylistAnalysis
