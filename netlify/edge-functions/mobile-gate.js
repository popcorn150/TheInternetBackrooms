export default function mobileGate(request) {
  const userAgent = request.headers.get('user-agent') ?? '';
  const mobileHint = request.headers.get('sec-ch-ua-mobile') === '?1';
  const mobileAgent = /Android|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(userAgent);

  if (mobileHint || mobileAgent) {
    return Response.redirect(new URL('/desktop-only/index.html', request.url), 302);
  }
}

export const config = {
  path: '/*',
  excludedPath: ['/desktop-only', '/desktop-only/*']
};
