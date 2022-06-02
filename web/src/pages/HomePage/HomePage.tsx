import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <header>
        <h1>HomePage</h1>
      </header>

      <ArticlesCell />
    </>
  )
}

export default HomePage
