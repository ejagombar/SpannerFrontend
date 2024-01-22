import './App.css'
import Header from './components/header'
import Footer from './components/footer.tsx'
import { PlaylistInfo } from './interfaces.tsx'
import { useState } from 'react'
import { Key } from 'react'
import Home from './Pages/home.tsx'
import MostListened, { MostListenedData } from './Pages/mostlistened.tsx'
import { useEffect } from 'react'
import apiClient from './services/apiClient.ts'
import AccountPage, { UserInfo } from './Pages/account.tsx'
import PlaylistAnalysis from './Pages/playlistanalysis.tsx'
import playlistMetadata  from './components/playlistSelector.tsx'

const playlistData: PlaylistInfo = {
    name: '',
    description: '',
    imageLink: '',
    followers: 7533,
    trackCount: 912,
    metrics: [ ],
}

function App() {
    const pageNames: string[] = [
        'Home',
        'Playlist Analysis',
        'Most Listened',
    ]
    const [selected, setSelected] = useState<Key>('Home')
    const signedIn = true

    const [userInfo, setUserInfo] = useState<UserInfo>({
        displayname: '',
        followercount: '',
        imageurl: '',
    })

    const [userPlaylists, setUserPlaylists] = useState<playlistMetadata[]>([])

    const [mostListenedData, setMostListenedData] = useState<MostListenedData>({
        shortTermTracks: [],
        longTermTracks: [],
        mediumTermTracks: [],
        shortTermArtists: [],
        mediumTermArtists: [],
        longTermArtists: [],
    })

    const handleSelectionChange = (key: Key) => {
        setSelected(key)
        console.log(key)
    }

    let content: JSX.Element

    switch (selected) {
        case 'Home':
            content = (
                <Home
                    signedIn={signedIn}
                    setCurrentPage={setSelected}
                />
            )
            break
        case 'Playlist Analysis':
            content = (
                <PlaylistAnalysis
                    userPlaylists={userPlaylists}
                    setUserPlaylists={setUserPlaylists}
                />
            )

            break
        case 'Playlist Comparison':
            content = <p>Coming Soon</p>
            break
        case 'Most Listened':
            content = (
                <MostListened
                    mostListenedData={mostListenedData}
                    setMostListenedData={setMostListenedData}
                />
            )
            break
        case 'Account':
            content = (
                <AccountPage
                    setSelected={setSelected}
                    setUserInfo={setUserInfo}
                    userInfo={userInfo}
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
