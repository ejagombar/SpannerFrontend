import { Card, Progress, Image } from '@nextui-org/react'

const PlaylistCard = () => {
    return (
        <p>
            <div className="flex flex-col items-center justify-items-center mt-10 mb-26">
                <Card className="max-w-[500px] p-5 flex flex-col justify-items-center items-center">
                    <Image
                        width={300}
                        alt="NextUI hero Image"
                        src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                    />
                    <p className="text-3xl mt-2 mb-5">Waitrose Essentials</p>
                    <div className="flex flex-col w-full">
                        <p className="mb-2">Energy</p>
                        <Progress
                            aria-label="Loading..."
                            value={60}
                            className="max-w-md"
                        />
                    </div>
                </Card>
            </div>
        </p>
    )
}

export default PlaylistCard
