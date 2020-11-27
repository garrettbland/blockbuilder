export const backgroundAttachments = () => {
    return ['bg-fixed', 'bg-local']
}

export const removeBackgroundAttachments = (classList) => {
    return classList.filter((className) => !backgroundAttachments().includes(className))
}
