import './App.css'
import Header from './components/header'
import Footer from './components/footer.tsx'
import PlaylistCard from './components/PlaylistCard.tsx'
import { PlaylistInfo } from './interfaces.tsx'
import { useState } from 'react'
import { Key } from 'react'
import Home from './Pages/home.tsx'
import MostListened from './Pages/mostlistened.tsx'
import { useEffect } from 'react'
import apiClient from './services/apiClient.ts'
import AccountPage from './Pages/account.tsx'

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
        'Most Listened',
    ]
    const [selected, setSelected] = useState<Key>('Home')
    const [signedIn, setSignedIn] = useState<boolean>(false)

    const handleSelectionChange = (key: Key) => {
        setSelected(key)
        console.log(key)
    }

    useEffect(() => {
        apiClient
            .get<string>('/api/account/authenticated')
            .then((response) => {
                if (response.data.toString() === 'true') {
                    setSignedIn(true)
                } else {
                    setSignedIn(false)
                }
                console.log('response:', signedIn)
            })
            .catch((error) => {
                console.error('Error fetching variable state:', error)
                setSignedIn(false)
            })
    }, [])

    useEffect(() => {
        console.log('Alert: signedIn:', signedIn)
    }, [signedIn])

    let content: JSX.Element

    switch (selected) {
        case 'Home':
            content = <Home signedIn={signedIn} />
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
            content = <p>Coming Soon</p>
            break
        case 'Most Listened':
            content = <MostListened />
            break
        case 'Account':
            content = (
                <AccountPage
                    setSignedIn={setSignedIn}
                    setSelected={setSelected}
                />
            )
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
                    signedIn={signedIn}
                    setSignedIn={setSignedIn}
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
