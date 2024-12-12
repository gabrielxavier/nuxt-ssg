
export const useJsonPlaceholderRepository = () => {

    return {
        getAll() {
            return useFetchJsonPlaceholder(`todos`)
        }
    }
}