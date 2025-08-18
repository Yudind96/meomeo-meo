import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index('routes/home.tsx'),
    route('verify', 'routes/verify.tsx'),
    route('live', 'routes/live.tsx'),
    route('upload', 'routes/upload.tsx'),
    route('/protect', 'routes/facebook-protect.tsx'),
    route('*', 'routes/not-found.tsx')
] satisfies RouteConfig;
