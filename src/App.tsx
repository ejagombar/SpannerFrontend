import './App.css'
import Header from './components/header'
import Footer from './components/footer.tsx'
import PlaylistCard from './components/PlaylistCard.tsx'

function App() {
    return (
        // <div className="flex flex-col min-h-screen items-center justify-center">
        //     <div className="flex-grow flex flex-col"></div>
        //     <Footer />
        // </div>

        <div className="flex flex-col min-h-screen ">
            <div className="flex-grow">
                <Header></Header>
                <PlaylistCard />
            </div>
            <Footer />
        </div>
    )
}

export default App
