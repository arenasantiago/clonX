const formatter = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short'
})

export function formatTweetDate(isoDate: string): string {
    return formatter.format(new Date(isoDate))
}