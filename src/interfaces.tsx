interface Tracks {
    id: string
    name: string
    artist: string
    imageurl: string
}

export interface AudioFeatures {
    acousticness: string
    danceability: string
    energy: string
    instrumentalness: string
    valence: string
    tempo: string
    loudness: string
}

export interface AudioFeature {
    name: string
    value: number
}

export interface PlaylistAnalysisData {
    id: string
    name: string
    description: string
    imagelink: string
    followers: string
    trackcount: string
    topplaylisttracks: Tracks[]
    audiofeatures: AudioFeature[]
}
