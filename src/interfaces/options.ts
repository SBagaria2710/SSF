export interface IOptions {
    searchText: string,
    sortOption: {
        field?: 'PublishedDate' | 'Cost'
        order?: 'ASC' | 'DSC'
    },
    filterOption: {
        field?: 'PublishedDate' | 'Cost'
        range?: {
            min: number
            max: number
        }
    }
}