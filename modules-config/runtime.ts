export const useRuntimeConfig = () => {
    return {
        runtimeConfig: {
            public: {
                URL_JSON_PLACEHOLDER: process.env.URL_JSON_PLACEHOLDER || 'https://jsonplaceholder.typicode.com/'
            }
        }
    }
}