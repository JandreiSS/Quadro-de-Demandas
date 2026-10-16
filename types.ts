export type Status = 'todo' | 'doing' | 'done'
export type Priority = 'high' | 'medium' | 'low'

export interface Demand {
    id: number
    title: string
    client: string
    priority: Priority
    status: Status
}