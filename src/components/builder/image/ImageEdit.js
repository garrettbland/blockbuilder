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
                <>
                    <ImagePreview />
                    <ImageUrl />
                    <ImageAlt />
                </>
            ),
        },
        {
            title: 'Style',
            component: (
                <>
                    <BorderRadius />
                    <BoxShadow />
                </>
            ),
        },
        {
            title: 'Spacing',
            component: (
                <>
                    <MarginTop />
                    <MarginBottom />
                </>
            ),
        },
    ]
    return <Tabs tabComponents={tabComponents} />
}

export default ImageEdit
