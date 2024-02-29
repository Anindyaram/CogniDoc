import { AppRouter } from '@/trpc/_app'
import {createTRPCReact} from '@trpc/react-query'

export const trpc = createTRPCReact<AppRouter>({})