import { Header } from "../components/Header";

export default function Home(props) {
  return (
    <div>
      <h3>Building the PodcastR by RocketSeat</h3>
      <p>Next Level Week #5  |  <span>Riller Vincci</span></p>
    </div>

  )
}

export async function getStaticProps(){
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    }, 
    revalidate: 60 * 60 * 8,
  }
}
