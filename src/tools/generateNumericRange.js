export function generateYearsRange(start, end) {
    const years = [];
    for (let i = start; i <= end; i++) {
        years.push({ id: i, value: i.toString()});
    }
    return years;
}