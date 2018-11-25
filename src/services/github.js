const getHeaders = gh => {
  let headers = new Headers()
  headers.append(
    'Authorization',
    'Basic ' + Buffer.from(gh.user + ':' + gh.token).toString('base64')
  )
  return headers
}

export const getGists = async gh =>
  fetch(`${gh.url}/users/${gh.user}/gists`, {
    method: 'GET',
    headers: getHeaders(gh),
  })
    .then(response => response.json())
    .then(json =>
      json.map(gist => ({
        id: gist.id,
        name: gist.description,
        files: Object.values(gist.files),
      }))
    )

export const getGist = async (gh, id) =>
  fetch(`${gh.url}/gists/${id}`, {
    method: 'GET',
    headers: getHeaders(gh),
  })
    .then(response => response.json())
    .then(json => json.files)
