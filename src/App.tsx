import { Router } from './Router'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/lib/apollo'
import { BrowserRouter } from 'react-router-dom'
import { DrawerProvider } from './contexts/DrawerContext'

export function App() {
  return (
    <DrawerProvider>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </DrawerProvider>
  )
}
