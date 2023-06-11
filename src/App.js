import React, { useState, useEffect } from "react"
import Header from "./components/header/Header"
import Video from "./components/video/Video"
import Sidebar from "./components/sidebar/Sidebar"
import { Container } from "react-bootstrap"
import HomeScreen from "./screens/homeScreens/HomeScreen"
import './_app.scss'
import {  Route, Routes, useNavigate } from 'react-router-dom'
import LoginScreen from "./screens/loginScreen/LoginScreen"
import { useSelector } from 'react-redux'
import WatchScreen from "./screens/watchScreen/WatchScreen"
import SearchScreen from "./screens/SearchScreen"
import SubscriptionsScreen from "./screens/subscriptionsScreen/SubscriptionsScreen"
import ChannelScreen from "./screens/channelScreen/ChannelScreen"



const Layout = ({ children }) => {
    const [sidebar, toggleSidebar] = useState(false)

    const handleToggleSidebar = () => toggleSidebar(value => !value)

    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className='app__container'>
                <Sidebar
                    sidebar={sidebar}
                    handleToggleSidebar={handleToggleSidebar}
                />
                <Container fluid className='app__main '>
                    {children}
                </Container>
            </div>
        </>
    )
}


const App = () => {


    const { accessToken, loading } = useSelector(state => state.auth)

    const navigate = useNavigate()
 
    useEffect(() => {
       if (!loading && !accessToken) {
          navigate('/auth')
       }
    }, [accessToken, loading, navigate])



    return (
        <>

            <Routes>
                <Route path='/' exact element={
                    <Layout>
                        <HomeScreen />
                    </Layout>
                } />



                <Route path='/auth' element={
                    <LoginScreen />
                } />

                <Route path='/search/:query'  element={
                    <Layout>
                        <SearchScreen/>
                    </Layout>
                } />

                <Route path='/watch/:id'  element={
                    <Layout>
                        <WatchScreen/>
                    </Layout>
                } />

                <Route path='/feed/subscriptions'  element={
                    <Layout>
                        <SubscriptionsScreen/>
                    </Layout>
                } />

                <Route path='/channel:channelId'  element={
                    <Layout>
                         <ChannelScreen />
                    </Layout>
                } />

                <Route path="*" element={
                    <Layout>
                        <HomeScreen />
                    </Layout>
                }></Route>



            </Routes>



        </>
    )
}

export default App;
