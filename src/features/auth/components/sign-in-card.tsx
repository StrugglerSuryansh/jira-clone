import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"

import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";


export const SignInCard = () => {
    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="justify-center flex items-center text-center p-7">
                <CardTitle className="text-2xl">
                    Welcome back!!
                </CardTitle>
            </CardHeader>
            <div className="px-7 mb-2">
                <DottedSeparator />
            </div>
            <CardContent className="p-7">
                <form className="space-y-4 pb-3">
                    <Input
                        required
                        type="email"
                        value={""}
                        onChange={() => { }}
                        placeholder="Enter email address"
                        disabled={false}
                    />
                    <Input
                        required
                        type="password"
                        value={""}
                        onChange={() => { }}
                        placeholder="password"
                        disabled={false}
                    />
                </form>

                <Button disabled={false} size="lg" className="w-full" >
                    login
                </Button>
            </CardContent>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className="p-7 flex flex-col gap-y-4">
                <Button
                    disabled={false}
                    variant="secondary"
                    size="lg"
                    className="w-full"


                >
                    <FcGoogle className="mr-2 size-5" />
                    Login With Google

                </Button>
                <Button
                    disabled={false}
                    variant="secondary"
                    size="lg"
                    className="w-full"

                >
                    <FaGithub className="mr-2 size-5" />
                    Login With Github

                </Button>

            </CardContent>

        </Card>
    )
}