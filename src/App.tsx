import './App.css'
import Header from './components/header'
import Footer from './components/footer.tsx'
import Timeline from './components/timeline.tsx'
import { TimelineItem } from './interfaces.tsx'

const data: TimelineItem[] = [
    {
        title: 'Accommodation',
        description: 'Working on the app',
        progress: 25,
    },
    {
        title: 'Finance',
        description: 'Planning stage',
        progress: 15,
    },
    {
        title: 'Temp',
        description: 'IDK what elseto write',
        progress: 75,
    },

    {
        title: 'Temp2',
        description: 'IDK what elseto write',
        progress: 75,
    },

    {
        title: 'Temp3',
        description: 'IDK what elseto write',
        progress: 75,
    },
]
function App() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center">
            <Header></Header>
            <div className="flex-grow flex flex-col">
                <Timeline items={data} />
            </div>
            <Footer />
        </div>
    )
}

export default App
