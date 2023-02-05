const apiKey = 'bad8607b4ca6494241c1a3dfe3069e66'
const url = 'https://api.themoviedb.org/3'

export default defineEventHandler(async (event) => {


  const requestToken = await createRequestToken()

  await createSessionWithLogin(requestToken)

  const sessionId = await createSession(requestToken)

  const accountId = await getDetails(sessionId)

  const movies = await getRatedMovies(sessionId, accountId)


  return movies
})

interface CreateTokenProps {
  success: boolean
  expires_at: string
  request_token: string
}

async function createRequestToken () {
  const body: CreateTokenProps = await $fetch(`${url}/authentication/token/new?`, {
    params: {
      api_key: apiKey,
    },
  })

  return body.request_token
}

async function createSessionWithLogin (requestToken: string) {
  await $fetch(`${url}/authentication/token/validate_with_login`, {
    method: 'POST',
    params: {
      api_key: apiKey,
    },
    body: {
      username: 'Pings7664',
      password: '^X29^tc&2pN@Ab',
      request_token: requestToken,
    },
  })
}

interface CreateSessionProps {
  success: boolean
  session_id: string
}

async function createSession (requestToken: string) {
  const body: CreateSessionProps = await $fetch(`${url}/authentication/session/new`, {
    method: 'POST',
    params: {
      api_key: apiKey,
    },
    body: {
      request_token: requestToken,
    },
  })

  return body.session_id
}

interface GetDetailsProps {
  avatar: {
    gravatar: {
      hash: string
    }
  }
  id: number
  iso_639_1: string
  iso_3166_1: string
  name: string
  include_adult: boolean
  username: string
}

async function getDetails (sessionId: string) {
  const body: GetDetailsProps = await $fetch(`${url}/account`, {
    params: {
      api_key: apiKey,
      session_id: sessionId,
    },
  })

  return body.id
}

async function getRatedMovies (session_id: string, account_id: number) {
  const body = await $fetch(`${url}/account/${account_id}/rated/movies`, {
    params: {
      api_key: apiKey,
      session_id,
      language: 'zh-CN',
      sort_by: 'created_at.asc',
      page: 1,
    },
  })

  return body
}
