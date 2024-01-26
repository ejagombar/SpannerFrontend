import { Key, useEffect} from 'react'
import apiClient from '../services/apiClient'
import {
    Button,
    Image,
} from '@nextui-org/react'
import { CanceledError } from 'axios'

export interface UserInfo {
    displayname: string
    followercount: string
    imageurl: string
}

interface Props {
    setSelected: (currentPage: Key) => void
    setSignedIn: React.Dispatch<React.SetStateAction<boolean>>
    userInfo: UserInfo
    setUserInfo: (userInfo: UserInfo) => void
}

const AccountPage = ({
    userInfo,
    setUserInfo,
}: Props) => {

    useEffect(() => {
        const controller = new AbortController()

        if (userInfo.displayname === '') {
            apiClient
                .get<UserInfo>('/api/profile/info', {
                    signal: controller.signal,
                })
                .then((res) => {
                    setUserInfo(res.data)
                    console.log('requested data')
                })
                .catch((err) => {
                    if (err instanceof CanceledError) return
                    console.log(err)
                })
        }

        return () => controller.abort()
    }, [setUserInfo, userInfo.displayname])

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center pt-20 mb-10 max-w-1/2 ">
                    <p className="text-6xl">{userInfo.displayname}</p>
                    <div className="flex flex-col justify-center pt-2 pb-2">
                        <div className="flex flex-col w-full justify-center items-center p-5">
                            <Image
                                width={200}
                                height={200}
                                alt="Profile Picture"
                                src={userInfo.imageurl}
                            />
                            <p className='pt-5'>{userInfo.followercount} Followers</p>
                        </div>
                        <Button
                            isDisabled
                            className="ml-10 mr-10 mb-5"
                            variant="bordered"
                            color="danger"
                        >
                            Sign Out
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AccountPage
