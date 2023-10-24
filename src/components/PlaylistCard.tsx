import { Card, Progress, Image, Divider } from '@nextui-org/react'
import { PlaylistAnalysisData } from '../interfaces'

interface Props {
    data: PlaylistAnalysisData
}
const PlaylistCard = ({ data }: Props) => {
    return (
        <p>
            <div className="flex flex-col items-center justify-items-center mt-10 mb-26">
                <Card className="max-w-[400px] p-5 flex flex-col justify-items-center items-center">
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
                            <Progress
                                aria-label={feature.name}
                                value={feature.value}
                                className="max-w-md"
                                size="md"
                                label={feature.name}
                                key={index}
                                showValueLabel={true}
                            />
                        ))}
                    </div>
                </Card>
            </div>
        </p>
    )
}

export default PlaylistCard
