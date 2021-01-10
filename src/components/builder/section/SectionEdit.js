import React from 'react'
import Tabs from '@/components/builder/ModalTabs'
import BackgroundColor from '../shared/BackgroundColor'
import BackgroundStyle from './BackgroundStyle'
import DividerShape from './DividerShape'
import DividerColor from './DividerColor'
import DividerAdd from './DividerAdd'
import DividerRemove from './DividerRemove'
import PaddingTop from '../shared/PaddingTop'
import PaddingBottom from '../shared/PaddingBottom'

const SectionEdit = () => {
    const tabComponents = [
        {
            title: 'Color',
            component: <BackgroundColor />,
        },
        {
            title: 'Background',
            component: (
                <div className="space-y-6">
                    <BackgroundStyle />
                </div>
            ),
        },
        {
            title: 'Top Divider',
            component: (
                <div className="space-y-6">
                    <DividerAdd position="top" />
                    <DividerShape position="top" />
                    <DividerColor position="top" />
                    <DividerRemove position="top" />
                </div>
            ),
        },
        {
            title: 'Bottom Divider',
            component: (
                <div className="space-y-6">
                    <DividerAdd position="bottom" />
                    <DividerShape position="bottom" />
                    <DividerColor position="bottom" />
                    <DividerRemove position="bottom" />
                </div>
            ),
        },
        {
            title: 'Spacing',
            component: (
                <div className="space-y-6">
                    <PaddingTop />
                    <PaddingBottom />
                </div>
            ),
        },
    ]
    return <Tabs tabComponents={tabComponents} />
}

export default SectionEdit
