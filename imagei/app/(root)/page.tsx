import { UserButton } from '@clerk/nextjs'

const Home = () => {
  return (
    <div>
      <p>
        Home
      </p>
      <UserButton fallbackRedirectUrl='/' />
      he
    </div>
  )
}

export default Home
