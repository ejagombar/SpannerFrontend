import { Card, Divider, Radio, RadioGroup } from '@nextui-org/react'
import React from 'react'
import { GridItem, GridItemData } from '../components/gridItem'

const myGridItemData: GridItemData = {
    number: '1',
    imageSrc:
        'https://i.scdn.co/image/ab67706c0000da842843307bd27067924fc05cbe',
    name: 'Kitty Sucker and the rol',
    description: 'Frank Carter and the Rattle Snakes',
}

const MostListened = () => {
    const [source, setSource] = React.useState('tracks')
    const [track, setTrack] = React.useState('short')
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

                <div className="grid grid-cols-5 gap-4 mt-4">
                    <GridItem data={myGridItemData}></GridItem>
                </div>
            </div>
        </div>
    )
}
export default MostListened
