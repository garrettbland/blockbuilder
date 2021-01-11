import React from 'react'
import Tabs from '@/components/builder/ModalTabs'
import ImageUrl from './ImageUrl'
import ImageAlt from './ImageAlt'
import BorderRadius from '../shared/BorderRadius'
import BoxShadow from '../shared/BoxShadow'
import MarginTop from '../shared/MarginTop'
import MarginBottom from '../shared/MarginBottom'
import ImagePreview from './ImagePreview'

const ImageEdit = () => {
    const tabComponents = [
        {
            title: 'Image',
            component: (
                <div className="space-y-6">
                    <ImagePreview />
                    <ImageUrl />
                    <ImageAlt />
                </div>
            ),
        },
        {
            title: 'Style',
            component: (
                <div className="space-y-6">
                    <BorderRadius />
                    <BoxShadow />
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

export default ImageEdit
