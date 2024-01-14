import * as React from 'react'
import { SVGProps } from 'react'

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number
}

export const SpannerLogo: React.FC<IconSvgProps> = ({
    size = 40,
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
                        fill: '#3ea5ab',
                        fillOpacity: 1,
                        stroke: '#3ea5ab',
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
                        stroke: '#3ea5ab',
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

export const UserIcon: React.FC<IconSvgProps> = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path
            style={{
                fill: '#3ea5ab',
                fillOpacity: 1,
            }}
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"
        />
    </svg>
)

export const MoonIcon: React.FC<IconSvgProps> = ({
    size = 24,
    width,
    height,
    ...props
}) => {
    return (
        <svg
            aria-hidden="true"
            focusable="false"
            height="1em"
            role="presentation"
            viewBox="0 0 24 24"
            width="1em"
            {...props}
        >
            <path
                clipRule="evenodd"
                fill="currentColor"
                fillRule="evenodd"
                d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
            />
        </svg>
    )
}

export const SunIcon: React.FC<IconSvgProps> = ({
    size = 24,
    width,
    height,
    ...props
}) => {
    return (
        <svg
            aria-hidden="true"
            focusable="false"
            height="1em"
            role="presentation"
            viewBox="0 0 24 24"
            width="1em"
            {...props}
        >
            <g fill="currentColor">
                <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
                <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
            </g>
        </svg>
    )
}
