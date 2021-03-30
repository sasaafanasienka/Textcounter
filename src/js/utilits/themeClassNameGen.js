export function themeClassNameGen(themeName, baseClassName) {
    if (themeName === 'light') {
        return baseClassName
    } else {
        return `${baseClassName} ${baseClassName}_dark`
    }
}