import { Card, Progress, Image, Divider } from '@nextui-org/react'
import { PlaylistInfo } from '../interfaces'

const PlaylistCard = ({
    name,
    description,
    imageLink,
    followers,
    trackCount,
    metrics,
}: PlaylistInfo) => {
    return (
        <p>
            <div className="flex flex-col items-center justify-items-center mt-10 mb-26">
                <Card className="max-w-[400px] p-5 flex flex-col justify-items-center items-center">
                    <Image
                        width={200}
                        alt="NextUI hero Image"
                        src={imageLink}
                        radius="none"
                    />
                    <p className="text-3xl mt-2 mb-1">{name}</p>
                    <p className="text-md mb-3 text-default-500">
                        {description}
                    </p>
                    <div className="flex flex-row justify-evenly w-full mb-3">
                        <p className="text-sm">{followers} Followers</p>
                        <p className="text-sm">{trackCount} Tracks</p>
                    </div>
                    <Divider></Divider>

                    {metrics.map((metric) => (
                        <div className="flex flex-col w-full mt-3">
                            <Progress
                                aria-label={metric.name}
                                value={metric.value}
                                className="max-w-md"
                                size="md"
                                label={metric.name}
                                showValueLabel={true}
                            />
                        </div>
                    ))}
                </Card>
            </div>
        </p>
    )
}

export default PlaylistCard
