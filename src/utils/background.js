export const backgroundAttachments = () => {
    /**
     * Not referencing tailwind theme because this is a core
     * plugin, and I can't figure out how
     */
    return ['bg-fixed', 'bg-local']
}

export const removeBackgroundAttachments = (classList) => {
    return classList.filter((className) => !backgroundAttachments().includes(className))
}
