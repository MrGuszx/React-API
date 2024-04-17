function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-4 fixed bottom-0 w-full">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div>
                    <strong>Gustavo Henrique Camacho dos Santos</strong>
                    <p>RM:554184</p>
                </div>
                <div className="w-10 h-10">
                    <a href="https://github.com/MrGuszx" target="_blank">
                        <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Github-512.png" alt="GitHub"/>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;