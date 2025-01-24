import { Button } from "@/components/ui/button";


interface AuthLayoutProps {
    children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <main className="bg-neutral-100 min-h-screen">
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex justify-between items-center">
                    <img src="/logo.svg" alt="logo" width={152} height={56} />
                    <Button variant="secondary">
                        Sign-Up Page
                    </Button>
                </nav>
                <div className="flex flex-col items-center  justify-center py-4 md:pt-14">
                    {children}
                </div>
            </div>
        </main>
    );
}

export default AuthLayout;