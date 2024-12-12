
export const useFetchJsonPlaceholder = async (path, options = {}) => {
    const runtimeConfig = useRuntimeConfig()

    const { URL_JSON_PLACEHOLDER } = runtimeConfig.public

    const defaults = {
        baseURL: URL_JSON_PLACEHOLDER
    }

    console.log(defaults)

    return await $fetch(`${URL_JSON_PLACEHOLDER}${path}`, {
        ...options
    })
}