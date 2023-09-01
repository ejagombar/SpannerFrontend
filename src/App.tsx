import './App.css'
import Header from './components/header'
import Footer from './components/footer.tsx'
import PlaylistCard from './components/PlaylistCard.tsx'
import { PlaylistInfo } from './interfaces.tsx'
import { useState } from 'react'
import { Key } from 'react'
import Home from './Pages/home.tsx'

const playlistData: PlaylistInfo = {
    name: 'Waitrose Essentials',
    description: 'Get in the mood for summer with these upbeat tracks.',
    imageLink: 'https://example.com/summer-vibes.jpg',
    followers: 7533,
    trackCount: 912,
    metrics: [
        { name: 'Valence', value: 50 },
        { name: 'Mood', value: 25 },
        { name: 'Energy', value: 10 },
        { name: 'Upbeatness', value: 37 },
    ],
}

function App() {
    const pageNames: string[] = [
        'Home',
        'Playlist Analysis',
        'Playlist Comparison',
        'Top Tracks',
    ]
    const [selected, setSelected] = useState<Key>('Home')

    const handleSelectionChange = (key: Key) => {
        setSelected(key)
        console.log(key)
    }

    let content: JSX.Element

    switch (selected) {
        case 'Home':
            content = <Home></Home>
            break
        case 'Playlist Analysis':
            content = (
                <PlaylistCard
                    name={playlistData.name}
                    description={playlistData.description}
                    imageLink={playlistData.imageLink}
                    followers={playlistData.followers}
                    trackCount={playlistData.trackCount}
                    metrics={playlistData.metrics}
                />
            )

            break
        case 'Playlist Comparison':
            content = <p>hest</p>
            break
        case 'Top Tracks':
            content = <p>hest</p>
            break
        default:
            content = <p>Error. How did we get here?</p>
            break
    }

    return (
        <div className="flex flex-col min-h-screen ">
            <div className="flex-grow">
                <Header
                    pageNames={pageNames}
                    setCurrentPage={handleSelectionChange}
                    currentPage={selected}
                ></Header>

                {content}
            </div>
            <Footer />
        </div>
    )
}

export default App
