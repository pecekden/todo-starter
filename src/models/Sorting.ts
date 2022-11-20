// TODO: Do it smarter?
//export type Sorting = "ascendingImportance" | "descendingImportance" | "ascendingTodoText" | "descendingTodoText" | "unsorted"
export type SortingColumn = "Importance" | "Text" 
export type SortingOrder = "ascending" | "descending" 
export type Sorting = {column: SortingColumn; order: SortingOrder}
