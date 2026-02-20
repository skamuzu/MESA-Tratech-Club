import { HeadContent, Scripts, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { queryClient } from '@/lib/query-client';


import appCss from '../styles.css?url'
interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
   head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'MESA Tratech Club' },
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
  }),
  shellComponent: RootDocument,


}
)


function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
          <QueryClientProvider client={queryClient}>

          {children}
          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
          <Scripts />
            </QueryClientProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  )
}
