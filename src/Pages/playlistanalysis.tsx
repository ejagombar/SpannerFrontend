import { useEffect, useState } from 'react'
import apiClient from '../services/apiClient'
import { CanceledError } from 'axios'
import PlaylistSelector, {
    playlistMetadata,
} from '../components/playlistSelector'
import { Button, Card } from '@nextui-org/react'
import PlaylistCard from '../components/PlaylistCard'

interface Props {
    userPlaylists: playlistMetadata[]
    setUserPlaylists: React.Dispatch<React.SetStateAction<playlistMetadata[]>>
}

const PlaylistAnalysis = ({ userPlaylists, setUserPlaylists }: Props) => {
    const [error, setError] = useState<string>('')
    const [selectedPlaylistId, setSelectedPlaylistId] = useState<string>('')
    const [playlistSelected, setPlaylistSelected] = useState<boolean>(false)

    useEffect(() => {
        if (userPlaylists.length > 0) return

        const controller = new AbortController()

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

    useEffect(() => {
        if (!playlistSelected) return

        const controller = new AbortController()

        const endpoint = '/api/playlist/' + selectedPlaylistId + '/info'

        apiClient
            .get<playlistMetadata[]>(endpoint, {
                signal: controller.signal,
            })
            .then((res) => {
                console.log(res.data)
                setError('')
            })
            .catch((err) => {
                if (err instanceof CanceledError) return
                setError(err.message)
                console.log(err.message)
            })

        console.log(userPlaylists)
        return () => controller.abort()
    }, [selectedPlaylistId])

    if (!playlistSelected) {
        return (
            <>
                <div className="flex flex-col items-center mt-20">
                    {error && (
                        <p className="text-warning pt-5 text-xl">{error}</p>
                    )}
                    <p className="text-2xl pb-5">
                        Select a playlist to analyse
                    </p>
                    <PlaylistSelector
                        className="text-2xl max-w-xs w-96 "
                        setSelectedPlaylist={setSelectedPlaylistId}
                        userPlaylists={userPlaylists}
                    />

                    <Button
                        className="mt-10 p-5"
                        color="primary"
                        variant="ghost"
                        isDisabled={selectedPlaylistId === ''}
                        onPress={() => {
                            setPlaylistSelected(true)
                        }}
                    >
                        Analyse
                    </Button>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="flex flex-col items-center mt-20">
                    {error && (
                        <p className="text-warning pt-5 text-xl">{error}</p>
                    )}
                    <Card className="p-2">
                        <div className="flex flex-row align-middle items-center p-1">
                            <p className="text-6xl pr-5">Playlist Analysis</p>
                            <Button
                                color="primary"
                                variant="bordered"
                                onPress={() => {
                                    setPlaylistSelected(false)
                                }}
                            >
                                Back
                            </Button>
                        </div>
                    </Card>
                    <PlaylistCard name={'test'}></PlaylistCard>
                </div>
            </>
        )
    }
}
export default PlaylistAnalysis
