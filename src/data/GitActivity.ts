export type WeekActivity = {
    week: number
    commitDays: number
}

export type GitActivity = {
    year: number
    month: number
    weeks: WeekActivity[]
}

export const gitActivity: GitActivity = {
    year: 2026,
    month: 9,
    weeks: [
        { week: 1, commitDays: 5 },
        { week: 2, commitDays: 3 },
        { week: 3, commitDays: 1 },
        { week: 4, commitDays: 5 },
        { week: 5, commitDays: 2 },
    ],
}