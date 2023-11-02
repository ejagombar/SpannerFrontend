import { Card, Progress, Image, Divider } from '@nextui-org/react'
import { PlaylistAnalysisData } from '../interfaces'
import { ScrollShadow } from '@nextui-org/react'

interface Props {
    data: PlaylistAnalysisData
}
const PlaylistCard = ({ data }: Props) => {
    let descriptions = new Map<string, string>([
        ['Acousticness', 'This value is the acoustic value'],
        ['Danceability', 'How dancaabile is it'],
        ['Energy', 'How hyped up are you man'],
        ['Instrumentalness', 'If the playlist is mainly instrumental or not'],
        ['Valence', 'The speed of the playlist'],
        ['Tempo', 'Tempo iof the playlist'],
    ])

    return (
        <div className="flex flex-col items-center justify-items-center mt-10 mb-26">
            <div className="w-[450px] p-5 flex flex-col justify-items-center items-center">
                <Image
                    width={200}
                    alt="NextUI hero Image"
                    src={data.imagelink}
                    radius="none"
                />
                <p className="text-3xl mt-2 mb-1">{data.name}</p>
                <p className="text-md mb-3 text-default-500">
                    {data.description}
                </p>
                <div className="flex flex-row justify-evenly w-full mb-3">
                    <p className="text-sm">{data.followers} Followers</p>
                    <p className="text-sm">{data.trackcount} Tracks</p>
                </div>
                <Divider></Divider>

                <div className="flex flex-col w-full mt-3">
                    {data.audiofeatures.map((feature, index) => (
                        <>
                            <Progress
                                value={feature.value * 100}
                                className="max-w-md"
                                size="md"
                                label={feature.name}
                                key={index}
                                showValueLabel={true}
                            />
                            <p className="pb-5 pt-2 text-default-400">
                                {descriptions.get(feature.name)}
                            </p>
                        </>
                    ))}
                </div>

                <Divider className=""></Divider>
                <p className="pt-5 pb-2 text-2xl">Your Top Tracks</p>
                <ScrollShadow className="w-[400px] h-[600px]">
                    {data.topplaylisttracks.map((track) => (
                        <>
                            <Card className="m-2 p-2 flex flex-row">
                                <Image
                                    width={50}
                                    alt="Album Cover art"
                                    src={track.imageUrl}
                                    radius="none"
                                />
                                <div className="pl-2 flex flex-col">
                                    <p>{track.name}</p>
                                    <p className="text-default-500">
                                        {track.artist}
                                    </p>
                                </div>
                            </Card>
                        </>
                    ))}
                </ScrollShadow>
            </div>

            <Divider className="mt-2 mb-5"></Divider>
            <p className="text-2xl mb-10">[More Features In Development]</p>
        </div>
    )
}

export default PlaylistCard
