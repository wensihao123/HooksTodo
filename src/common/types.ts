export interface IReduxState {
    readonly ui: IUIState
}

export interface IUIState {
    readonly toggle: boolean
}