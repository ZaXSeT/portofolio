// Example utility functions
// Add your helper functions here

/**
 * Format a date to a readable string
 */
export function formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(date)
}

/**
 * Truncate a string to a specified length
 */
export function truncateString(str: string, maxLength: number): string {
    if (str.length <= maxLength) return str
    return str.slice(0, maxLength) + '...'
}

/**
 * Generate a random ID
 */
export function generateId(): string {
    return Math.random().toString(36).substring(2, 9)
}
