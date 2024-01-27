import { Hero, Header, Playlist, Mid, Middle, Quotes, Footer, Copyright } from './components';
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div className='min-h-screen box-border bg-[#000] text-white  w-auto max-[375px]:bg-black max-[425px]:bg-black max-[375px]:w-[216vw]  max-[425px]:w-[152vw] h-auto'>
      <AnimatedCursor
        innerSize={20}
        outerSize={10}
        color='173, 181, 189'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={4} />
      <div className='h-screen'>
        <Header />
        <Hero />
      </div>

      <Playlist />
      <Mid />
      <Middle />
      <Quotes />
      <Footer />
      <Copyright />
    </div>
  )
}

export default App
