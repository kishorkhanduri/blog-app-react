import {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';
import {Container, PostCard} from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className=" text-gray-700 py-8">
                <Container>
                    <div className="flex flex-col items-center justify-center h-full">
                        <h1 className="text-3xl font-bold mb-4">Welcome to Our Blog Application</h1>
                        <p className="text-lg mb-4">
                            Our blog web application provides a platform for sharing and exploring diverse content
                            from various contributors. Whether you're interested in technology, lifestyle, travel,
                            or personal stories, our blog has something for everyone. Join our vibrant community
                            of writers and readers to engage in thought-provoking discussions, discover new perspectives,
                            and connect with like-minded individuals. Start your journey with us today and unleash
                            your creativity by sharing your own experiences and insights!
                        </p>
                        <p className="text-lg mb-4">
                            Our blog web application provides a platform for sharing and exploring diverse content
                            from various contributors. Whether you're interested in technology, lifestyle, travel,
                            or personal stories, our blog has something for everyone. Join our vibrant community
                            of writers and readers to engage in thought-provoking discussions, discover new perspectives,
                            and connect with like-minded individuals. Start your journey with us today and unleash
                            your creativity by sharing your own experiences and insights!
                        </p>
                        <p className="text-lg mb-4">Please login to read posts</p>
                        <div className="space-x-4">
                            <Link to="/login" className="btn btn-blue">
                                Login
                            </Link>
                            <Link to="/signup" className="btn btn-blue">
                                Sign up
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home