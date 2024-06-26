import { json } from '@sveltejs/kit'

export const POST = async ({ request, fetch }) => {
    const { url, headers, method, body } = await request.json()
    const response = await fetch(url, {
        headers,
        method,
        body: body ? JSON.stringify(body) : undefined,
    })

    return json({
        status: response.status,
        statusText: response.statusText,
        ok: response.ok,
        headers: new Object(response.headers.entries()),
        body: await response.text(),
        setCookie: response.headers.getSetCookie(),
    })
}
