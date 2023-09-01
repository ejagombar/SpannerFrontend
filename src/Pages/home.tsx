import { Image, Button, Link } from '@nextui-org/react'

import { SpannerLogo } from '../components/icons'
import backgroundpic from '/repeat.svg'

const Home = () => {
    const lineStyle = {
        height: '1260px',
    }

    return (
        <div className="flex flex-col items-center pt-32 mb-10 mr-5">
            <Image src={backgroundpic}></Image>
            <div className="flex flex-row">
                <div
                    className="relative w-1 bg-gray-300 hover:animate-pulse ml-2"
                    style={lineStyle}
                >
                    {/* Left Circle */}
                    <div className="w-3 h-3 bg-gray-300 rounded-full absolute top-0 left-0 transform -translate-y-2 -translate-x-1 glow"></div>

                    {/* Right Circle */}
                    <div className="w-3 h-3 bg-gray-300 rounded-full absolute bottom-0 left-0 transform translate-y-2 -translate-x-1 glow"></div>
                </div>
                <div className="flex flex-col pl-6 items-start max-w-lg">
                    <p className="Title text-7xl mt-10 mb-24 ">
                        Analyse your listening habits and trends with{' '}
                        <span className="text-primary font-bold">Spanner.</span>
                    </p>

                    <p className="text-3xl">Playlist Analysis</p>
                    <p className="text-xl mt-2 mb-16">
                        Sentiment analysis on lyrics and the traits of
                        individual songs will be evaluated to calculate the
                        theme of a the playlist.
                    </p>

                    <p className="text-3xl">Playlist Comparisons</p>
                    <p className="text-xl mt-2 mb-16">
                        Compare two playlists and compare themes and sentiment,
                        as well as finding duplicate songs.
                    </p>

                    <p className="text-3xl">Top Tracks and Artists</p>
                    <p className="text-xl mt-2 mb-24">
                        View your top songs and artists for the over the last 4
                        weeks, 6 months and all time favorites.
                    </p>

                    <div className="flex flex-row w-full justify-center">
                        <div className="flex flex-col items-center justify-center">
                            <Button
                                as={Link}
                                color="primary"
                                href="#"
                                variant="bordered"
                                radius="full"
                                className="mb-16 pt-6 pb-6 bg-success-50"
                            >
                                <p className="text-2xl align-middle text-primary">
                                    Sign In With Spotify
                                </p>
                            </Button>

                            <SpannerLogo size={150}></SpannerLogo>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-grow" />
        </div>
    )
}
export default Home
