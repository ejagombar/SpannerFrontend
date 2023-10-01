import { Card, Divider, Radio, RadioGroup } from '@nextui-org/react'
import React, { useEffect } from 'react'
import { ArtistGridItem, TrackGridItem } from '../components/gridItem'
import apiClient from '../services/apiClient'
import { CanceledError } from 'axios'

interface Track {
    id: string
    name: string
    artist: string
    imageUrl: string
}

interface Artist {
    id: string
    name: string
    imageUrl: string
}

export interface MostListenedData {
    shortTermTracks: Track[]
    mediumTermTracks: Track[]
    longTermTracks: Track[]
    shortTermArtists: Artist[]
    mediumTermArtists: Artist[]
    longTermArtists: Artist[]
}

interface Props {
    mostListenedData: MostListenedData
    setMostListenedData: React.Dispatch<React.SetStateAction<MostListenedData>>
}

const MostListened = ({ mostListenedData, setMostListenedData }: Props) => {
    const [source, setSource] = React.useState('tracks')
    const [timerange, setTimerange] = React.useState('short_term')
    const [error, setError] = React.useState('')

    useEffect(() => {
        const controller = new AbortController()

        if (source === 'tracks') {
            const endpoint = '/api/profile/toptracks/' + timerange
            if (
                (timerange === 'short_term' &&
                    mostListenedData.shortTermTracks.length !== 0) ||
                (timerange === 'medium_term' &&
                    mostListenedData.mediumTermTracks.length !== 0) ||
                (timerange === 'long_term' &&
                    mostListenedData.longTermTracks.length !== 0)
            ) {
                return
            }

            apiClient
                .get<Track[]>(endpoint, {
                    signal: controller.signal,
                })
                .then((res) => {
                    switch (timerange) {
                        case 'short_term':
                            setMostListenedData((mostListenedData) => ({
                                ...mostListenedData,
                                shortTermTracks: res.data,
                            }))
                            break
                        case 'medium_term':
                            setMostListenedData((mostListenedData) => ({
                                ...mostListenedData,
                                mediumTermTracks: res.data,
                            }))
                            break
                        case 'long_term':
                            setMostListenedData((mostListenedData) => ({
                                ...mostListenedData,
                                longTermTracks: res.data,
                            }))
                            break
                    }
                    setError('')
                    console.log(timerange, 'track request')
                })
                .catch((err) => {
                    if (err instanceof CanceledError) return
                    setError(err.message)
                })
        } else {
            const endpoint = '/api/profile/topartists/' + timerange

            if (
                (timerange === 'short_term' &&
                    mostListenedData.shortTermArtists.length !== 0) ||
                (timerange === 'medium_term' &&
                    mostListenedData.mediumTermArtists.length !== 0) ||
                (timerange === 'long_term' &&
                    mostListenedData.longTermArtists.length !== 0)
            ) {
                return
            }

            apiClient
                .get<Artist[]>(endpoint, {
                    signal: controller.signal,
                })
                .then((res) => {
                    switch (timerange) {
                        case 'short_term':
                            setMostListenedData((mostListenedData) => ({
                                ...mostListenedData,
                                shortTermArtists: res.data,
                            }))
                            break
                        case 'medium_term':
                            setMostListenedData((mostListenedData) => ({
                                ...mostListenedData,
                                mediumTermArtists: res.data,
                            }))
                            break
                        case 'long_term':
                            setMostListenedData((mostListenedData) => ({
                                ...mostListenedData,
                                longTermArtists: res.data,
                            }))
                            break
                    }
                    setError('')
                    console.log(timerange, 'artist request')
                })
                .catch((err) => {
                    if (err instanceof CanceledError) return
                    setError(err.message)
                })
        }

        return () => controller.abort()
    }, [source, timerange])

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center pt-20 mb-10 max-w-1/2 ">
                <p className="text-6xl pb-8">Top Listened</p>
                <Divider></Divider>
                <div className="flex flex-row w-full justify-center pt-2 pb-2">
                    <Card className="p-4 mr-2">
                        <RadioGroup
                            value={source}
                            onValueChange={setSource}
                            orientation="horizontal"
                        >
                            <Radio value="tracks">Tracks</Radio>
                            <Radio value="artists">Artists</Radio>
                        </RadioGroup>
                    </Card>

                    <Card className="p-4 ml-2">
                        <RadioGroup
                            value={timerange}
                            onValueChange={setTimerange}
                            orientation="horizontal"
                        >
                            <Radio value="short_term">Last 4 Weeks</Radio>
                            <Radio value="medium_term">Last 6 Months</Radio>
                            <Radio value="long_term">All Time</Radio>
                        </RadioGroup>
                    </Card>
                </div>

                <Divider></Divider>

                {error && <p className="text-warning pt-5 text-xl">{error}</p>}
                <div className="grid grid-cols-5 gap-4 mt-4">
                    {source === 'tracks' &&
                        timerange === 'short_term' &&
                        mostListenedData.shortTermTracks.map((track, index) => (
                            <TrackGridItem
                                name={track.name}
                                artist={track.artist}
                                ranking={Number(index) + 1}
                                imageSrc={track.imageUrl}
                                key={Number(index) + 1}
                            ></TrackGridItem>
                        ))}
                    {source === 'tracks' &&
                        timerange === 'medium_term' &&
                        mostListenedData.mediumTermTracks.map(
                            (track, index) => (
                                <TrackGridItem
                                    name={track.name}
                                    artist={track.artist}
                                    ranking={Number(index) + 1}
                                    imageSrc={track.imageUrl}
                                    key={Number(index) + 1}
                                ></TrackGridItem>
                            )
                        )}
                    {source === 'tracks' &&
                        timerange === 'long_term' &&
                        mostListenedData.longTermTracks.map((track, index) => (
                            <TrackGridItem
                                name={track.name}
                                artist={track.artist}
                                ranking={Number(index) + 1}
                                imageSrc={track.imageUrl}
                                key={Number(index) + 1}
                            ></TrackGridItem>
                        ))}
                    {source === 'artists' &&
                        timerange === 'short_term' &&
                        mostListenedData.shortTermArtists.map(
                            (track, index) => (
                                <ArtistGridItem
                                    name={track.name}
                                    ranking={Number(index) + 1}
                                    imageSrc={track.imageUrl}
                                    key={Number(index) + 1}
                                ></ArtistGridItem>
                            )
                        )}
                    {source === 'artists' &&
                        timerange === 'medium_term' &&
                        mostListenedData.mediumTermArtists.map(
                            (track, index) => (
                                <ArtistGridItem
                                    name={track.name}
                                    ranking={Number(index) + 1}
                                    imageSrc={track.imageUrl}
                                    key={Number(index) + 1}
                                ></ArtistGridItem>
                            )
                        )}
                    {source === 'artists' &&
                        timerange === 'long_term' &&
                        mostListenedData.longTermArtists.map((track, index) => (
                            <ArtistGridItem
                                name={track.name}
                                ranking={Number(index) + 1}
                                imageSrc={track.imageUrl}
                                key={Number(index) + 1}
                            ></ArtistGridItem>
                        ))}
                </div>
            </div>
        </div>
    )
}
export default MostListened
