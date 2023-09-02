import { Card, Divider, Radio, RadioGroup } from '@nextui-org/react'

interface selectItem {
    label: string
    value: string
}

export const timeframes: selectItem[] = [
    {
        label: 'Last 4 Weeks',
        value: 'short',
    },
    {
        label: 'Last 6 Months',
        value: 'medium',
    },
    {
        label: 'All Time',
        value: 'long',
    },
]

export const sources: selectItem[] = [
    {
        label: 'Tracks',
        value: 'tracks',
    },
    {
        label: 'Artists',
        value: 'artists',
    },
]

const MostListened = () => {
    return (
        <div className="flex flex-col items-center pt-20 mb-10 ">
            <p className="text-6xl pb-8">Top Listened</p>
            <Divider></Divider>
            <div className="flex flex-row w-full justify-center pt-2 pb-2">
                <Card className="p-4 mr-2">
                    <RadioGroup orientation="horizontal">
                        <Radio value="tracks">Tracks</Radio>
                        <Radio value="artists">Artists</Radio>
                    </RadioGroup>
                </Card>

                <Card className="p-4 ml-2">
                    <RadioGroup orientation="horizontal">
                        <Radio value="short">Last 4 Weeks</Radio>
                        <Radio value="medium">Last 6 Months</Radio>
                        <Radio value="long">All Time</Radio>
                    </RadioGroup>
                </Card>
            </div>

            <Divider></Divider>
        </div>
    )
}
export default MostListened
