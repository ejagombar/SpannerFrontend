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

interface UserInfo {
    displayname: string
    followercount: string
    imageurl: string
}

interface Props {
    setSelected: (currentPage: Key) => void
    setSignedIn: React.Dispatch<React.SetStateAction<boolean>>
}
const AccountPage = ({ setSelected, setSignedIn }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [userInfo, setUserInfo] = useState<UserInfo>({
        displayname: '',
        followercount: '',
        imageurl: '',
    })

    const ConfirmSignOutBtn = () => {
        onOpen()
    }

    const signOutBtn = ({ setSelected, setSignedIn }: Props) => {
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
                    console.log('requested name')
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }

        return () => controller.abort()
    }, [])

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center pt-20 mb-10 max-w-1/2 ">
                    <p className="text-6xl pb-8">My Account</p>
                    <Divider></Divider>
                    <div className="flex flex-col justify-center pt-2 pb-2">
                            <div className="flex flex-col w-full justify-center items-center p-5">
                                    <Image
                                        width={200}
                                        height={200}
                                        alt="Profile Picture"
                                        src={userInfo.imageurl}
                                    />
                                <p className="text-2xl p-5">
                                    {userInfo.displayname}
                                </p>
                                <p>{userInfo.followercount} Followers</p>
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
