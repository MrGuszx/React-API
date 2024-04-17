import React, {useEffect, useState} from 'react';
import Menu from "./Menu"

interface Usuarios{
    name: String;
    username: String;
    email: String;
    address: Address;
}

interface Address{
    street: String;
    suite: String;
    city: String;
    zipcode: String;
}

const Usuarios: React.FC = () => {
    const[usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if(!response.ok){
                    throw new Error('Erro ao buscar usuários');
                }
                const data = await response.json();
                setUsuarios(data);
            } catch(error) {
                console.error('Erro ao buscar usuários:', error);
            }
        };
        fetchUsuarios();
    }, []);
    
    return (
        <div>
            <header className='bg-gray-900 py-4 fixed top-0 w-full'>
                <h1 className='text-center text-4xl font-bold text-gray-300 mb-8'>Usuários</h1>
                <Menu />
            </header>
            <div className="mx-auto mt-60 w-3/4">
                <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="py-2 px-4">Nome do usuário</th>
                            <th className="py-2 px-4">Email</th>
                            <th className="py-2 px-4">Cidade</th>
                            <th className="py-2 px-4">CEP</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {usuarios.map((usuario, index) => (
                            <tr key={index} className={(index % 2 === 0) ? 'bg-gray-200' : ''}>
                                <td className="py-2 px-4">{usuario.name}</td>
                                <td className="py-2 px-4">{usuario.email}</td>
                                <td className="py-2 px-4">{usuario.address.city}</td>
                                <td className="py-2 px-4">{usuario.address.zipcode}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Usuarios