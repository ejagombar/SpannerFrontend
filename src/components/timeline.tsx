import React from 'react'
import ResizableDiv from './resizeablediv'
import { TimelineItem } from '../interfaces'
import ItemCard from './item'

const Timeline: React.FC<{ items: TimelineItem[] }> = ({ items }) => {
    return (
        <ResizableDiv height={2000} width={700}>
            <div className="w-[500px] flex flex-col justify-start pt-10">
                {items.map((item, index) =>
                    index % 2 !== 0 ? (
                        <ItemCard
                            className="mt-[230px] h-[200px]"
                            title={item.title}
                            description={item.description}
                            progress={item.progress}
                        />
                    ) : null
                )}
            </div>
            <div className="w-24 flex justify-center">
                <div className="h-full w-1 bg-default top-0 origin-top" />
            </div>
            <div className="w-[500px] flex flex-col justify-start pt-16">
                {items.map((item, index) =>
                    index % 2 === 0 ? (
                        <ItemCard
                            className="mb-[230px] h-[200px]"
                            title={item.title}
                            description={item.description}
                            progress={item.progress}
                        />
                    ) : null
                )}
            </div>
        </ResizableDiv>
    )
}

export default Timeline
