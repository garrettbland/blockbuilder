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
                <>
                    <LinkTitle />
                    <LinkHref />
                </>
            ),
        },
        {
            title: 'Text',
            component: (
                <>
                    <FontSize />
                    <FontWeight />
                    <TextColor />
                </>
            ),
        },
        {
            title: 'Button',
            component: (
                <>
                    <BackgroundColor />
                    <BorderRadius />
                    <BoxShadow />
                    <AutoMargin />
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

export default LinkEdit
