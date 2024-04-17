import React, {useState, useEffect} from 'react'
import Menu from "./Menu"

interface Post{
    title: String;
    body: String;
}

const Posts: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    useEffect(() => {
        const fetchPosts = async () => {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if(!response.ok){
                    throw new Error('Erro ao buscar posts');
                }
                const data = await response.json();
                setPosts(data);
            } catch(error) {
                console.error('Erro ao buscar posts: ', error);
            }
        };
        fetchPosts();
    }, []);
    return (
        <div>
            <header className='bg-gray-900 py-4 fixed top-0 w-full'>
                <h1 className='h-3 text-center text-4xl font-bold text-gray-300 mb-8'>Posts</h1>
                <Menu />
            </header>
            <ul className='mt-40 ml-2'>
                {posts.map((post, index) => (
                    <li key={index}>
                        <strong>{post.title}</strong>
                        <p className='p-2'>{post.body}</p>
                        <br></br>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Posts