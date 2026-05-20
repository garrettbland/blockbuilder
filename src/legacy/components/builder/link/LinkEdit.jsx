import React from 'react'
import Tabs from '@/components/builder/ModalTabs'
import BorderRadius from '../shared/BorderRadius'
import BoxShadow from '../shared/BoxShadow'
import BackgroundColor from '../shared/BackgroundColor'
import AutoMargin from '../shared/AutoMargin'
import FontSize from '../shared/FontSize'
import FontWeight from '../shared/FontWeight'
import TextColor from '../shared/TextColor'
import MarginTop from '../shared/MarginTop'
import MarginBottom from '../shared/MarginBottom'
import LinkTitle from './LinkTitle'
import LinkHref from './LinkHref'

const LinkEdit = () => {
    const tabComponents = [
        {
            title: 'Link',
            component: (
                <div className="space-y-6">
                    <LinkTitle />
                    <LinkHref />
                </div>
            ),
        },
        {
            title: 'Text',
            component: (
                <div className="space-y-6">
                    <FontSize />
                    <FontWeight />
                    <TextColor />
                </div>
            ),
        },
        {
            title: 'Button',
            component: (
                <div className="space-y-6">
                    <BackgroundColor />
                    <BorderRadius />
                    <BoxShadow />
                    <AutoMargin />
                </div>
            ),
        },
        {
            title: 'Spacing',
            component: (
                <div className="space-y-6">
                    <MarginTop />
                    <MarginBottom />
                </div>
            ),
        },
    ]
    return <Tabs tabComponents={tabComponents} />
}

export default LinkEdit
