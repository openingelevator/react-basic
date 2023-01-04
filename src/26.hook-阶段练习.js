import { useWindowScroll } from './hooks/useWindowScroll'
import { useLocalStorage } from './hooks/useLocalStorage'

function App () {
  const [y] = useWindowScroll()
  const [message, setMessage] = useLocalStorage('hook-key', 'cp')
  setTimeout(() => {
    setMessage('df')
  }, 5000)
  return (
    <div style={{ height: '1200px' }}>
      {y}{message}
    </div>
  )
}