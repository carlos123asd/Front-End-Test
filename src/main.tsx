import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/app/router/routes'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './api/config/queryClient'
import './styles/index.css'
import "toastify-js/src/toastify.css"
import "@/api/config/persistQueryClient";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
