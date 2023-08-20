import React, { ReactNode } from 'react'

interface ResizableDivProps {
    height: number
    width: number
    children: ReactNode
}

const ResizableDiv: React.FC<ResizableDivProps> = ({
    height,
    width,
    children,
}) => {
    const divStyle = {
        height: `${height}px`,
        width: `${width}px`,
    }

    return (
        <div
            className="flex items-center justify-center h-screen "
            style={divStyle}
        >
            <div className="flex justify-center" style={divStyle}>
                {children}
            </div>
        </div>
    )
}

export default ResizableDiv
