import '@/styles/globals.css'
import '@/styles/normalize.css'

export default function App({ Component, pageProps }) {
  return (
    <div className='container'>
      <Component {...pageProps} />
    </div>
  )
}
