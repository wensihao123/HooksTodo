export interface IReduxState {
    readonly ui: IUIState
}

export interface IUIState {
    readonly toggle: boolean
}

export interface IUIAction {
    readonly toggleSwitch: () => {type: string, value: boolean}
}