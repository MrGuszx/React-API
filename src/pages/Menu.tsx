function Menu(){
    return(
        <div className="flex justify-center p-1">
            <a href="/" className="mx-4 text-gray-300 hover:text-white hover:border-b-2 hover:border-white">Posts</a>
            <a href="/usuarios" className="mx-4 text-gray-300 hover:text-white hover:border-b-2 hover:border-white">Usuarios</a>
            <a href="/fotos" className="mx-4 text-gray-300 hover:text-white hover:border-b-2 hover:border-white">Fotos</a>
        </div>
    )
}

export default Menu