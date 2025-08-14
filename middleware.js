import { NextResponse } from 'next/server'

export function middleware(request) {
  // Vérifier si c'est une requête HTML
  if (
    request.nextUrl.pathname.endsWith('.html') ||
    request.nextUrl.pathname === '/'
  ) {
    const response = NextResponse.next()

    // Récupérer les variables d'environnement
    const gasUrl = process.env.NEXT_PUBLIC_GAS_URL
    const gasContactUrl = process.env.NEXT_PUBLIC_GAS_CONTACT_URL

    // Si les variables ne sont pas configurées, retourner une erreur
    if (!gasUrl || !gasContactUrl) {
      return new NextResponse(
        '<html><body><h1>Erreur de configuration</h1><p>Les variables NEXT_PUBLIC_GAS_URL et NEXT_PUBLIC_GAS_CONTACT_URL doivent être configurées.</p></body></html>',
        {
          status: 500,
          headers: { 'Content-Type': 'text/html' }
        }
      )
    }

    // Injecter les variables d'environnement dans le HTML
    response.headers.set('X-GAS-URL', gasUrl)
    response.headers.set('X-GAS-CONTACT-URL', gasContactUrl)

    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
}
