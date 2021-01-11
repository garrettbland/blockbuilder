import React from 'react'
import { Router as MainRouter } from '@reach/router'
import Home from '@/views/Home'
import Page from '@/views/Page'

const Router = () => (
    <MainRouter>
        <Home path="/" />
        <Page path="/pages/:pageId" />
    </MainRouter>
)

export default Router
