import {
  SignInButton,
  UserButton,
} from '@clerk/clerk-react'
import { Authenticated, Unauthenticated } from 'convex/react'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <div className="w-full max-w-2xl">
      <div className='container flex  justify-between items-center py-1'>

      <p className="font-semibold">TodoIst App</p>
      <div>
        <Unauthenticated>
          <SignInButton>
            <Button size={'sm'}>Sign in</Button>
          </SignInButton>
        </Unauthenticated>
        <Authenticated>
          <UserButton />
        </Authenticated>
      </div>
      </div>
    </div>
  )
}

export default Navbar
