import { Card, Image } from '@nextui-org/react'

export interface TrackGridItemData {
    imageSrc: string
    ranking: number
    name: string
    artist: string
}

export interface ArtistGridItemData {
    imageSrc: string
    ranking: number
    name: string
}

export const TrackGridItem = ({
    imageSrc,
    ranking,
    name,
    artist,
}: TrackGridItemData) => {
    return (
        <Card className="pl-3 pr-3 pb-3 w-[200px] h-[250px]">
            <div className="flex flex-col items-center pb-1">
                <p className="text-large uppercase font-bold">{ranking}</p>
                <Image
                    alt="Card background"
                    className="object-cover"
                    radius="none"
                    src={imageSrc}
                    width={120}
                    height={120}
                />
            </div>

            <div className="flex items-center h-full max-w-[200px] break-words">
                <div className="min-h-0 inline-block">
                    <h4 className="font-bold text-md">{name}</h4>
                    <small className="text-default-500">{artist}</small>
                </div>
            </div>
        </Card>
    )
}

export const ArtistGridItem = ({
    imageSrc,
    ranking,
    name,
}: ArtistGridItemData) => {
    return (
        <Card className="pl-3 pr-3 pb-3 w-[200px] h-[250px]">
            <div className="flex flex-col items-center pb-1">
                <p className="text-large uppercase font-bold">{ranking}</p>
                <Image
                    alt="Card background"
                    className="object-cover"
                    radius="none"
                    src={imageSrc}
                    width={120}
                    height={120}
                />
            </div>

            <div className="flex items-center h-full max-w-[200px] break-words">
                <div className="min-h-0 inline-block">
                    <h4 className="font-bold text-md">{name}</h4>
                </div>
            </div>
        </Card>
    )
}
