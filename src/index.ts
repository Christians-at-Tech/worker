addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request: Request): Promise<Response> {
  // Check if the request method is POST
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  try {
    // Get the request body
    const requestBody = await request.text()

    // Process the request body (you can perform any operations you need here)
    // For now, let's just echo back the request body
    const responseText = `Received POST request with data: ${requestBody}`

    // Return the response
    return new Response(responseText, { status: 200 })
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 })
  }
}

