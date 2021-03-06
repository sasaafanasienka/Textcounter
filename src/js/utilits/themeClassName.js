export function themeClassName(themeProperties, baseClassName) {
    if (themeProperties.id === 0) {
        return baseClassName
    } else {
        return `${baseClassName} ${baseClassName}${themeProperties.modifierClass}`
    }
}