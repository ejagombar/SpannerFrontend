import { Key } from 'react'
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

interface Props {
    setSelected: (currentPage: Key) => void
    setSignedIn: React.Dispatch<React.SetStateAction<boolean>>
}
const AccountPage = ({ setSelected, setSignedIn }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

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

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center pt-20 mb-10 max-w-1/2 ">
                    <p className="text-6xl pb-8">My Account</p>
                    <Divider></Divider>
                    <div className="flex flex-col justify-center pt-2 pb-2">
                        <Card className="mb-5">
                            <div className="flex flex-col w-full justify-center items-center p-2">
                                <Image
                                    width={300}
                                    alt="Profile Picture"
                                    src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                                />
                                <p className="pt-2 text-2xl">Ed Agombar</p>
                                <p>23 Followers</p>
                            </div>
                        </Card>
                        <Button
                            className="ml-10 mr-10"
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
