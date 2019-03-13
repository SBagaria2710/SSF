import { ReportData } from './types'

export interface IReports {
    isLoaded: boolean
    error: string | null
    items?: ReportData[]
    filtered?: ReportData[]
}