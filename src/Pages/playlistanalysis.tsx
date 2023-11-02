import { useEffect, useState } from 'react'
import apiClient from '../services/apiClient'
import { CanceledError } from 'axios'
import PlaylistSelector from '../components/playlistSelector'
import { Button, Card } from '@nextui-org/react'
import PlaylistCard from '../components/PlaylistCard'
import { PlaylistAnalysisData } from '../interfaces'
import { Spinner } from '@nextui-org/react'

interface Props {
    userPlaylists: PlaylistAnalysisData[]
    setUserPlaylists: React.Dispatch<
        React.SetStateAction<PlaylistAnalysisData[]>
    >
}

function resetPlaylistAnalysis(): PlaylistAnalysisData {
    return {
        id: '',
        name: '',
        description: '',
        imagelink: '',
        followers: '',
        trackcount: '',
        topplaylisttracks: [],
        audiofeatures: [],
    }
}

const PlaylistAnalysis = ({ userPlaylists, setUserPlaylists }: Props) => {
    const [error, setError] = useState<string>('')
    const [selectedPlaylistId, setSelectedPlaylistId] = useState<string>('')
    const [playlistSelected, setPlaylistSelected] = useState<boolean>(false)
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const [playlistAnalysis, setPlaylistAnalysis] =
        useState<PlaylistAnalysisData>(resetPlaylistAnalysis())

    useEffect(() => {
        if (userPlaylists.length > 0) return

        const controller = new AbortController()

        setIsLoaded(false)
        apiClient
            .get<PlaylistAnalysisData[]>('/api/profile/userplaylists', {
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

        const endpoint = '/api/playlist/' + selectedPlaylistId + '/analysis'

        apiClient
            .get<PlaylistAnalysisData>(endpoint, {
                signal: controller.signal,
            })
            .then((res) => {
                setPlaylistAnalysis(res.data)
                console.log(res.data)
                setError('')
            })
            .catch((err) => {
                if (err instanceof CanceledError) return
                setError(err.message)
            })

        console.log(userPlaylists)
        return () => controller.abort()
    }, [playlistSelected])

    useEffect(() => {
        console.log('set is loaded to true')
        // console.log(playlistAnalysis)
        if (playlistAnalysis && playlistAnalysis.audiofeatures.length > 0) {
            setIsLoaded(true)
        }
    }, [playlistAnalysis])

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
                    <div className="flex flex-row align-middle items-center p-1">
                        <p className="text-6xl pr-5">Playlist Analysis</p>
                        <Button
                            color="primary"
                            variant="bordered"
                            onPress={() => {
                                setPlaylistSelected(false)
                                setPlaylistAnalysis(resetPlaylistAnalysis())
                                setIsLoaded(false)
                            }}
                        >
                            Back
                        </Button>
                    </div>
                    {isLoaded ? (
                        <PlaylistCard data={playlistAnalysis} />
                    ) : (
                        <>
                            <Spinner
                                label="Loading..."
                                size="lg"
                                className="pt-10"
                            />
                        </>
                    )}
                </div>
            </>
        )
    }
}
export default PlaylistAnalysis
