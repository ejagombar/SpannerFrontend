import { Radio, RadioGroup } from '@nextui-org/react'

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
        <div className="flex flex-col items-center pt-20 mb-10 mr-5">
            <p className="text-6xl">Top Listened</p>
            <div className="flex flex-row w-full pt-8">
                <Select
                    placeholder="Select a timeframe"
                    className="max-w-xs pr-5"
                >
                    {sources.map((source) => (
                        <SelectItem key={source.value} value={source.value}>
                            {source.label}
                        </SelectItem>
                    ))}
                </Select>

                <Select
                    label="Time Period"
                    placeholder="test"
                    className="max-w-xs pl-5"
                >
                    {timeframes.map((timeframe) => (
                        <SelectItem
                            key={timeframe.value}
                            value={timeframe.value}
                        >
                            {timeframe.label}
                        </SelectItem>
                    ))}
                </Select>
                <RadioGroup
                    label="Select your favorite city"
                    orientation="horizontal"
                >
                    <Radio value="buenos-aires">Buenos Aires</Radio>
                    <Radio value="sydney">Sydney</Radio>
                    <Radio value="san-francisco">San Francisco</Radio>
                    <Radio value="london">London</Radio>
                    <Radio value="tokyo">Tokyo</Radio>
                </RadioGroup>
            </div>
        </div>
    )
}
export default MostListened
