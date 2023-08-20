export interface Metric {
    name: string
    value: number
}

export interface PlaylistInfo {
    name: string
    description: string
    imageLink: string
    followers: number
    trackCount: number
    metrics: metric[]
}
