export async function getAllJokes(page: number, limit?: number) {
    const res = await fetch(`https://retoolapi.dev/zu9TVE/jokes/?_page=${page}&_limit=${limit}`)
    const data = await res.json()
    return data
}