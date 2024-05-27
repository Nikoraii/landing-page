export default function Footer() {
    return (
        <footer className="bg-zinc-900 text-zinc-300 font-light p-3 flex flex-col text-center">
            <div className="flex">
                <div className="flex flex-col w-1/2">
                    <a href="#home" className="text-center">Home</a>
                    <a href="#about" className="text-center">About</a>
                    <a href="#pricing" className="text-center">Pricing</a>
                    <a href="#contact" className="text-center">Contact</a>
                </div>
                <div className="w-1/2 text-center text-sm">This is a portfolio site made for educational purposes and serves no real purposes. All companies and people used here are either made up or used only as an example.</div>
            </div>
            <div className="text-zinc-400 text-sm">Made with &hearts; by <a href="https://www.nikolastancic.com/" target="_blank" rel="noreferrer" className="font-semibold">Nikola</a></div>
        </footer>
    )
}