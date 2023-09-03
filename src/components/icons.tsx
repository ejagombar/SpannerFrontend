import * as React from 'react'
import { SVGProps } from 'react'

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number
}

export const SpannerLogo: React.FC<IconSvgProps> = ({
    size = 35,
    width,
    height,
    color,
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
                        fill: '#21d561',
                        fillOpacity: 1,
                        stroke: '#21d561',
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
                        stroke: '#21d561',
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

export const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z" />
    </svg>
)
