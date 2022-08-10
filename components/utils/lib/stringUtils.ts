



export const truncateString = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
}