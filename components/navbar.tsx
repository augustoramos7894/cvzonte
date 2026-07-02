export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-8 py-4 border-b">
            <h1 className="text-2xl font-bold">CVzonte</h1>
            <div className="flex gap-6">
                <a href="#">Recursos</a>
                <a href="#">Sobre</a>   
                <a href="#">Contato</a>
            </div>
        </nav>
    )
}