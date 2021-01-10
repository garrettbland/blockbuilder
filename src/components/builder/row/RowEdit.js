import React from 'react'
import Tabs from '@/components/builder/ModalTabs'
import BorderRadius from '../shared/BorderRadius'
import BoxShadow from '../shared/BoxShadow'
import BackgroundColor from '../shared/BackgroundColor'
import MaxWidth from './MaxWidth'
import BackgroundOpacity from './BackgroundOpacity'
import PaddingTop from '../shared/PaddingTop'
import PaddingBottom from '../shared/PaddingBottom'

const RowEdit = () => {
    const tabComponents = [
        {
            title: 'Color',
            component: (
                <div className="space-y-6">
                    <BackgroundColor />
                    <BackgroundOpacity />
                </div>
            ),
        },
        {
            title: 'Width',
            component: <MaxWidth />,
        },
        {
            title: 'Border',
            component: <BorderRadius />,
        },
        {
            title: 'Shadow',
            component: <BoxShadow />,
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

export default RowEdit
