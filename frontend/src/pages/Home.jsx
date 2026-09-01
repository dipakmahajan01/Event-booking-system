import React, { useState , useEffect } from 'react'
import {Link} from 'react-router-dom'
import api from '../utils/axios'
import { FaCalendarAlt } from "react-icons/fa";

const Home = () =>{
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState('')
     

    useEffect(()=>{
        const timeoutId = setTimeout(()=>{
            fetchEvents()
        }, 500)
        return ()=> clearTimeout(timeoutId)     
    }, [search])
    const fetchEvents = async () =>{
        try{
            const response = await api.get('/events?search=${search}')
            setEvents(response.data.events);
        }catch(error){
            setError(error.message)
        }
        finally{
            setLoading(false)
        }
    }
    return (
        <div className='flex flex-col min-h-screen'>
            <div className = 'relative bg-black text-white rounded-3xl overflow-hidden mb-12 shadow-2xl'></div>
            <div className = 'absolute inset-0 opacity-40 bg-[url("https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center'></div>
            <div className = 'absolute inset-0 bg-gradient-to-r from-black to-transparent'>
                <div className = 'container mx-auto px-4'>
                    <div className = 'flex flex-col items-center justify-center h-screen'>
                        <h1 className = 'text-4xl font-bold text-center'>Events</h1>
                        <input type = 'text' placeholder = 'Search events' value = {search} onChange = {(e) => setSearch(e.target.value)} className = 'w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                        {loading ? (
                            <div className = 'flex justify-center items-center h-screen'>
                                <div className = 'animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white'></div>
                            </div>
                        ) : (
                            <div className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                {Array.isArray(events) && events.length > 0 && events.map((event) => (
                                    <div key = {event._id} className = 'bg-white text-black rounded-lg overflow-hidden shadow-lg'>
                                        <img src = {event.image} alt = {event.name} className = 'w-full h-48 object-cover' />
                                        <div className = 'p-4'>
                                            <h3 className = 'text-lg font-bold'>{event.name}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            // why choose us
            <div className = 'container mx-auto px-4'>
                <div className = 'flex flex-col items-center justify-center'>
                    <h2 className = 'text-4xl font-bold text-center'>Why Choose Us</h2>
                    <p className = 'text-gray-500 text-center'>We are a team of event planners who are dedicated to making your event a success.</p>
                </div>
                <div className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div className = 'bg-white text-black rounded-lg overflow-hidden shadow-lg'>
                        <img src = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt = 'Event' className = 'w-full h-48 object-cover' />
                        <div className = 'p-4'>
                            <h3 className = 'text-lg font-bold'>Event</h3>
                        </div>
                    </div>
                </div>
                <div className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div className = 'bg-white text-black rounded-lg overflow-hidden shadow-lg'>
                        <img src = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt = 'Event' className = 'w-full h-48 object-cover' />
                        <div className = 'p-4'>
                            <h3 className = 'text-lg font-bold'>Event</h3>
                        </div>
                    </div>
                </div>
                <div className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div className = 'bg-white text-black rounded-lg overflow-hidden shadow-lg'>
                        <img src = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt = 'Event' className = 'w-full h-48 object-cover' />
                        <div className = 'p-4'>
                            <h3 className = 'text-lg font-bold'>Event</h3>
                        </div>
                    </div>
                </div>
                <div className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div className = 'bg-white text-black rounded-lg overflow-hidden shadow-lg'>
                        <img src = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt = 'Event' className = 'w-full h-48 object-cover' />
                        <div className = 'p-4'>
                            <h3 className = 'text-lg font-bold'>Event</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home