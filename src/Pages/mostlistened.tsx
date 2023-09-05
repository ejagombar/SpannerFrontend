import { Card, Divider, Radio, RadioGroup } from '@nextui-org/react'
import React, { useEffect } from 'react'
import { GridItem, GridItemData } from '../components/gridItem'
import apiClient from '../services/apiClient'

const myGridItemData: GridItemData = {
    ranking: 1,
    imageSrc:
        'https://i.scdn.co/image/ab67706c0000da842843307bd27067924fc05cbe',
    name: 'Salma Poopy',
    description: 'Salma is poopy',
}

interface Track {
    id: string
    name: string
    artist: string
    imageUrl: string
}

const MostListened = () => {
    const [source, setSource] = React.useState('tracks')
    const [track, setTrack] = React.useState('short')

    const [tracks, setTracks] = React.useState<Track[]>([])
    const [error, setError] = React.useState('')

    useEffect(() => {
        apiClient
            .get<Track[]>('/tracks')
            .then((res) => setTracks(res.data))
            .catch((err) => setError(err.message))
    })

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
                            value={track}
                            onValueChange={setTrack}
                            orientation="horizontal"
                        >
                            <Radio value="short">Last 4 Weeks</Radio>
                            <Radio value="medium">Last 6 Months</Radio>
                            <Radio value="long">All Time</Radio>
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
                            ranking={Number(index)}
                            imageSrc={track.imageUrl}
                        ></GridItem>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default MostListened
