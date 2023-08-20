import './App.css'
import Header from './components/header'
import Footer from './components/footer.tsx'
import PlaylistCard from './components/PlaylistCard.tsx'
import { PlaylistInfo } from './interfaces.tsx'

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
    return (
        <div className="flex flex-col min-h-screen ">
            <div className="flex-grow">
                <Header></Header>
                <PlaylistCard
                    name={playlistData.name}
                    description={playlistData.description}
                    imageLink={playlistData.imageLink}
                    followers={playlistData.followers}
                    trackCount={playlistData.trackCount}
                    metrics={playlistData.metrics}
                />
            </div>
            <Footer />
        </div>
    )
}

export default App
