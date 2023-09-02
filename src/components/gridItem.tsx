import React from 'react'
import { Card, CardHeader, CardBody, Image, Badge } from '@nextui-org/react'

export interface GridItemData {
    imageSrc: string
    number: string
    name: string
    description: string
}

interface GridItemProps {
    data: GridItemData
}

export const GridItem: React.FC<GridItemProps> = ({ data }) => {
    return (
        <Card className="pl-3 pr-3 pb-3 w-[200px] h-[260px]">
            <div className="flex flex-col items-center pb-1">
                <p className="text-large uppercase font-bold">{data.number}</p>
                <Image
                    alt="Card background"
                    className="object-cover"
                    radius="none"
                    src={data.imageSrc}
                    width={120}
                    height={120}
                />
            </div>

            <div className="max-w-[200px] break-words">
                <h4 className="font-bold text-md">{data.name}</h4>
                <small className="text-default-500">{data.description}</small>
            </div>
        </Card>
    )
}
