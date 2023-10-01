import { Key, useEffect, useState } from 'react'
import apiClient from '../services/apiClient'
import {
    Card,
    Divider,
    Modal,
    Button,
    Image,
    ModalContent,
    useDisclosure,
    ModalHeader,
    ModalFooter,
} from '@nextui-org/react'
import { CanceledError } from 'axios'

export interface UserInfo {
    displayname: string
    followercount: string
    imageurl: string
}

interface SignOutBtnProps {
    setSelected: (currentPage: Key) => void
    setSignedIn: React.Dispatch<React.SetStateAction<boolean>>
}

interface Props {
    setSelected: (currentPage: Key) => void
    setSignedIn: React.Dispatch<React.SetStateAction<boolean>>
    userInfo: UserInfo
    setUserInfo: (userInfo: UserInfo) => void
}

const AccountPage = ({
    setSelected,
    setSignedIn,
    userInfo,
    setUserInfo,
}: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const ConfirmSignOutBtn = () => {
        onOpen()
    }

    const signOutBtn = ({ setSelected, setSignedIn }: SignOutBtnProps) => {
        console.log('Signed Out')
        apiClient.post<string>('/api/account/logout')
        onClose()
        setSignedIn(false)
        setSelected('Home')
    }

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
    }, [])

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
                            className="ml-10 mr-10 mb-5"
                            variant="bordered"
                            color="danger"
                            onPress={ConfirmSignOutBtn}
                        >
                            Sign Out
                        </Button>
                    </div>
                </div>
            </div>
            <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
                <>
                    <ModalContent className="max-w-xs">
                        <ModalHeader>Are you sure?</ModalHeader>
                        <ModalFooter>
                            <Button
                                color="danger"
                                variant="bordered"
                                onPress={() =>
                                    signOutBtn({
                                        setSelected,
                                        setSignedIn,
                                    })
                                }
                            >
                                Sign Out
                            </Button>
                            <Button color="danger" onPress={onClose}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </>
            </Modal>
        </>
    )
}
export default AccountPage
