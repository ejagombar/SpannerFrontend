import { Card, Divider, Radio, RadioGroup } from '@nextui-org/react'
import React, { useEffect } from 'react'
import { GridItem, GridItemData } from '../components/gridItem'
import apiClient from '../services/apiClient'
import { Cancel } from '@mui/icons-material'
import { CanceledError } from 'axios'

interface Track {
    id: string
    name: string
    artist: string
    imageUrl: string
}

const MostListened = () => {
    const [source, setSource] = React.useState('tracks')
    const [timerange, setTimerange] = React.useState('short_term')

    const [tracks, setTracks] = React.useState<Track[]>([])
    const [artsist, setArtists] = React.useState<Track[]>([])
    const [error, setError] = React.useState('')

    useEffect(() => {
        const controller = new AbortController()

        if (source === 'tracks') {
            const endpoint = '/api/profile/toptracks/' + timerange

            apiClient
                .get<Track[]>(endpoint, {
                    signal: controller.signal,
                })
                .then((res) => {
                    setTracks(res.data)
                    setError('')
                    console.log('request')
                })
                .catch((err) => {
                    if (err instanceof CanceledError) return
                    setError(err.message)
                })
        } else {
            const endpoint = '/api/profile/topartists/' + timerange
            apiClient
                .get<Track[]>(endpoint, {
                    signal: controller.signal,
                })
                .then((res) => {
                    setTracks(res.data)
                    setError('')
                    console.log('request')
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
                    {tracks.map((track, index) => (
                        <GridItem
                            name={track.name}
                            description={track.artist}
                            ranking={Number(index) + 1}
                            imageSrc={track.imageUrl}
                            key={Number(index) + 1}
                            // showDescription={source === 'tracks'}
                            showDescription={true}
                        ></GridItem>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default MostListened
