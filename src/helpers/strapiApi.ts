const STRAPI_BASE_URL =
    process.env.STRAPI_BASE_URL || 'http://localhost:1337/api'

export async function fetchStrapi(endpoint: string, options = {}) {
    try {
        const res = await fetch(`${STRAPI_BASE_URL}${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            ...options,
        })

        if (!res.ok) {
            throw new Error(`Erreur ${res.status}: ${res.statusText}`)
        }

        const data = await res.json()
        return data
    } catch (error) {
        console.error('Erreur dans fetchStrapi :', error)
        throw error
    }
}

export const fetchStrapiData = async (locale: string) => {
    try {
        const response = await fetchStrapi(`/news?locale=${locale}&populate=*`)
        if (!response.ok) {
            throw new Error(`Erreur ${response.status}: ${response.statusText}`)
        }

        return await response.json()
    } catch (error) {
        console.error('Erreur lors de la récupération des articles :', error)
    }
}
