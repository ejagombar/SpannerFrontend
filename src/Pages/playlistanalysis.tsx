import { useEffect, useState } from 'react'
import apiClient from '../services/apiClient'
import { CanceledError } from 'axios'
import { Select, SelectItem, Avatar } from '@nextui-org/react'

interface Props {
    userPlaylists: playlistMetadata[]
    setUserPlaylists: React.Dispatch<React.SetStateAction<playlistMetadata[]>>
}

export interface playlistMetadata {
    id: string
    name: string
    description: string
    imagelink: string
    trackcount: number
}

const PlaylistAnalysis = ({ userPlaylists, setUserPlaylists }: Props) => {
    const [error, setError] = useState('')

    useEffect(() => {
        const controller = new AbortController()

        if (userPlaylists.length > 0) return

        apiClient
            .get<playlistMetadata[]>('/api/profile/userplaylists', {
                signal: controller.signal,
            })
            .then((res) => {
                setUserPlaylists(res.data)
                setError('')
            })
            .catch((err) => {
                if (err instanceof CanceledError) return
                setError(err.message)
                console.log(err.message)
            })

        console.log(userPlaylists)
        return () => controller.abort()
    }, [])

    return (
        <>
            {error && <p className="text-warning pt-5 text-xl">{error}</p>}
            <Select
                items={userPlaylists}
                label="Select Playlist"
                className="max-w-xs"
                variant="bordered"
                classNames={{
                    label: 'group-data-[filled=true]:-translate-y-5',
                    trigger: 'min-h-unit-16',
                    listboxWrapper: 'max-h-[400px]',
                }}
                listboxProps={{
                    itemClasses: {
                        base: [
                            'rounded-md',
                            'text-default-500',
                            'transition-opacity',
                            'data-[hover=true]:text-foreground',
                            'data-[hover=true]:bg-default-100',
                            'dark:data-[hover=true]:bg-default-50',
                            'data-[selectable=true]:focus:bg-default-50',
                            'data-[pressed=true]:opacity-70',
                            'data-[focus-visible=true]:ring-default-500',
                        ],
                    },
                }}
                popoverProps={{
                    classNames: {
                        base: 'p-0 border-small border-divider bg-background',
                        arrow: 'bg-default-200',
                    },
                }}
                renderValue={(items) => {
                    return items.map((playlist) => (
                        <div
                            key={playlist.key}
                            className="flex items-center gap-2"
                        >
                            <Avatar
                                alt={playlist.data?.name}
                                className="flex-shrink-0"
                                size="sm"
                                src={playlist.data?.imagelink}
                            />
                            <div className="flex flex-col">
                                <span>{playlist.data?.name}</span>
                                <span className="text-default-500 text-tiny">
                                    {playlist.data?.description}
                                </span>
                            </div>
                        </div>
                    ))
                }}
            >
                {(user) => (
                    <SelectItem key={user.id} textValue={user.name}>
                        <div className="flex gap-2 items-center">
                            <Avatar
                                alt={user.name}
                                className="flex-shrink-0"
                                size="sm"
                                src={user.imagelink}
                            />
                            <div className="flex flex-col">
                                <span className="text-small">{user.name}</span>
                                <span className="text-tiny text-default-400">
                                    {user.description || '\u00A0\u00A0\u00A0'}
                                </span>
                            </div>
                        </div>
                    </SelectItem>
                )}
            </Select>
        </>
    )
}
export default PlaylistAnalysis
