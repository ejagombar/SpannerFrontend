import * as React from 'react'
import { SVGProps } from 'react'

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number
}

export const SpannerLogo: React.FC<IconSvgProps> = ({
    size = 45,
    width,
    height,
    ...props
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width={size || width}
            height={size || height}
            viewBox="0 0 24.408 24.408"
            {...props}
        >
            <g transform="translate(166.678 -112.415)">
                <path
                    d="M-150.543 119.436a6.48 6.48 0 0 1 2.542 3.631c.057.24.1.485.13.73l-.773-.445h0l-3.669-2.117-4.013 2.316v4.636l3.667 2.117.346.2.428.247a6.479 6.479 0 0 1-.699.254 6.48 6.48 0 0 1-8.06-7.365l-3.523-2.033 2.236-3.872 3.522 2.033a6.48 6.48 0 0 1 7.866-.333z"
                    style={{
                        color: '#000',
                        fill: '#239534',
                        fillOpacity: 1,
                        stroke: '#239534',
                        strokeWidth: 1.20334,
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeDasharray: 'none',
                        strokeOpacity: 1,
                        paintOrder: 'stroke fill markers',
                    }}
                />
                <circle
                    cx={71.469}
                    cy={185.16}
                    r={11.138}
                    style={{
                        fill: 'none',
                        fillOpacity: 1,
                        stroke: '#239534',
                        strokeWidth: 2.13747,
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeDasharray: 'none',
                        strokeOpacity: 1,
                        paintOrder: 'stroke fill markers',
                    }}
                    transform="scale(-1 1) rotate(-30)"
                />
            </g>
        </svg>
    )
}
