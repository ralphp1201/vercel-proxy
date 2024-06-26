export const POST = async ({ request }) => {
    const { url, headers, method, body } = await request.json()
    const response = await fetch(url, {
        headers,
        method,
        body: body ? JSON.stringify(body) : undefined,
    })
    return response
}
