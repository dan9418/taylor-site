import { PropsWithChildren } from "react"

const PageFrame: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <main className="min-h-screen theme-bg-gradient flex justify-center box-border shadow-xl">
            <div className="w-full max-w-5xl py-16 desktop:py-24 px-4 desktop:px-8 theme-l-bg-1 min-h-screen">
                {children}
            </div>
        </main>
    )
}

export default PageFrame