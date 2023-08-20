import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Progress,
} from '@nextui-org/react'

interface Props {
    title: string
    description: string
    progress: number
    className: string
}

function ItemCard({ title, description, progress, className }: Props) {
    return (
        <Card className={className}>
            <CardBody>
                <div className="flex flex-col gap-6 w-full h-full">
                    <p className="text-xl">{title}</p>
                    <p>{description}</p>

                    <Progress
                        aria-label="Loading..."
                        value={progress}
                        className="max-w-md"
                        size="lg"
                    />
                </div>
            </CardBody>
        </Card>
    )
}
export default ItemCard
