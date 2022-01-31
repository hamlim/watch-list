let movieAPIKey = process.env.NEXT_PUBLIC_MOVIE_API_KEY

export async function search(title: string): Promise<any> {
  let res = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${movieAPIKey}&language=en-US&query=${title}&page=1&include_adult=false`,
  )
  let result = await res.json()

  return result
}

export let movieCache = new Map()
