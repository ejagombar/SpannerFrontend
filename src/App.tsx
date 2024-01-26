import './App.css'
import Header from './components/header'
import Footer from './components/footer.tsx'
import { useState } from 'react'
import { Key } from 'react'
import Home from './Pages/home.tsx'
import MostListened, { MostListenedData } from './Pages/mostlistened.tsx'
import AccountPage, { UserInfo } from './Pages/account.tsx'
import PlaylistAnalysis from './Pages/playlistanalysis.tsx'
import { PlaylistAnalysisData } from './interfaces'
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
} from '@nextui-org/react'

function App() {
    const pageNames: string[] = ['Home', 'Playlist Analysis', 'Most Listened']
    const [selected, setSelected] = useState<Key>('Home')
    const [signedIn, setSignedIn] = useState<boolean>(true)

    const [isOpen, setOpen] = useState(true)
    const handleClose = () => setOpen(false)

    const [userInfo, setUserInfo] = useState<UserInfo>({
        displayname: '',
        followercount: '',
        imageurl: '',
    })

    const [userPlaylists, setUserPlaylists] = useState<PlaylistAnalysisData[]>(
        []
    )

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
                    setSignedIn={setSignedIn}
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
                    setSignedIn={setSignedIn}
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
        <div>
            <Modal
                isOpen={isOpen}
                onOpenChange={handleClose}
                size={'lg'}
                backdrop="opaque"
            >
                <ModalContent>
                    <ModalHeader className="justify-items-centre">
                        Thank you for visiting this site!
                    </ModalHeader>
                    <ModalBody>
                        <p>
                            Due to the long process required to obtain a fully
                            Spotify API key, this website is using a developer
                            API key.
                            <br />
                            <br />
                            This means that it is currently only able to display
                            data from my own Spotify account. However, the
                            website is still fully functional and updates in
                            real time.
                            <br />
                            <br />
                            Also, this website is not designed for mobile! It
                            will be very broken :(
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onPress={handleClose}>
                            Okay
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
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
        </div>
    )
}

export default App
