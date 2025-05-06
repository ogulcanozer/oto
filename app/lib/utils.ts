/**
 * Utility function to format dates in a consistent way
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Utility function to generate a random visitor count (purely for retro aesthetic)
 */
export function getVisitorCount(): number {
  // Generate a random number between 1000 and 9999
  return Math.floor(Math.random() * 9000) + 1000;
}

/**
 * Utility function to truncate text to a specified length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
}

/**
 * Utility function to generate a loading message in retro style
 */
export function getRetroLoadingMessage(): string {
  const messages = [
    "LOADING DATA...",
    "PLEASE WAIT...",
    "ACCESSING DATABASE...",
    "COMPUTING RESPONSE...",
    "INITIALIZING SYSTEMS...",
    "GENERATING CONTENT...",
    "BUFFERING..."
  ];
  
  return messages[Math.floor(Math.random() * messages.length)];
}

/**
 * Get a random error message in retro style
 */
export function getRetroErrorMessage(): string {
  const messages = [
    "SYSTEM ERROR: PLEASE REBOOT",
    "FATAL ERROR: DATA CORRUPTION DETECTED",
    "SYNTAX ERROR: UNEXPECTED TOKEN",
    "CONNECTION LOST: PLEASE RETRY",
    "404: FILE NOT FOUND",
    "BUFFER OVERFLOW: MEMORY DUMP INITIATED"
  ];
  
  return messages[Math.floor(Math.random() * messages.length)];
}

/**
 * Check if the user is viewing the site in dark mode
 */
export function isDarkMode(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * Generate a unique ID for form submissions, etc.
 */
export function generateTransactionId(): string {
  return Math.random().toString(36).substring(2, 10).toUpperCase();
}