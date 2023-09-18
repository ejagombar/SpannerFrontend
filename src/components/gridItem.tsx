import { Card, Image } from '@nextui-org/react'

export interface GridItemData {
    imageSrc: string
    ranking: number
    name: string
    description: string
    showDescription: boolean
}

export const GridItem = ({
    imageSrc,
    ranking,
    name,
    description,
    showDescription,
}: GridItemData) => {
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
                    {showDescription && (
                        <small className="text-default-500">
                            {description}
                        </small>
                    )}
                </div>
            </div>
        </Card>
    )
}
