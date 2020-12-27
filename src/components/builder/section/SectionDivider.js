import { generateShapes } from '@/utils/shapes'

const SectionDivider = ({ block }) => {
    const shapes = generateShapes()

    return (
        <div
            data-type="section-divider"
            className={[...block.classList, 'z-30'].join(' ')}
            key={block.id}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                className={`w-full h-full ${
                    block.type === 'section-divider-top' ? 'transform rotate-180' : ''
                }`}
            >
                <path fill="currentColor" fillOpacity="1" d={shapes[block.data.shape]}></path>
            </svg>
        </div>
    )
}

export default SectionDivider
