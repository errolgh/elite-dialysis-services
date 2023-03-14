export const pageAnimation = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.4,
        }
    }
}


export const leftToRight = {
    hidden: {
        opacity: 0,
        x: -100
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
        }
    }
}


export const rightToLeft = {
    hidden: {
        opacity: 0,
        x: 100
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
        }
    }
}


export const fromTheBottom = {
    hidden: {
        opacity: 0,
        y: -100
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
        }
    }
}


export const fromTheTop = {
    hidden: {
        opacity: 0,
        y: 100
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
        }
    }
}