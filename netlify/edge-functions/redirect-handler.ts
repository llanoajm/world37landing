export default async (request: Request) => {
    const url = new URL(request.url);
    
    // Check if the request is coming to world37.app
    if (url.hostname === 'world37.app' || url.hostname === 'www.world37.app') {
      // Redirect to w37.ai preserving the path
      const newUrl = new URL(url);
      newUrl.hostname = 'w37.ai';
      newUrl.protocol = 'https:';
      
      return Response.redirect(newUrl.toString(), 301);
    }
    
    // Continue with the request if not from world37.app
    return;
  };