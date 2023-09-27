import { Card, Divider, Button, Image } from '@nextui-org/react'

const AccountPage = () => {
    return (
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
                    >
                        Sign Out
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default AccountPage
