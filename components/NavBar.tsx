import { Box } from "lucide-react"
import { Button } from "./ui/Buttion"
import { useOutletContext } from "react-router"

const NavBar = () => {
  const isLogin = true
  // const userName = 'mufees'

  const {isLoggedIn, signIn, signOut, userName}  = useOutletContext<AuthContext>()

  const handleAuthClick = async () => {

    if(isLoggedIn) {
      try {
        await signOut()
      } catch (error) {
        console.log(`puter sign out failed! ${error}`)
      }
      return;
    }

    try {
      await signIn()
    } catch (error) {
      console.log(`puter sign in failed! ${error}`)
    }
  }
  return (
    <header className="navbar">
      <nav className="inner">
        <div className="left">
          <div className="brand">
            <Box className="logo" />
            <span className="name">Roomify</span>
          </div>

          <ul className="links">
            <a href="#">Product</a>
            <a href="#">Product</a>
            <a href="#">Community</a>
            <a href="#">Enterprise</a>
          </ul>
        </div>

        <div className="actions">
          {isLoggedIn ? (
            <>
              <span className="greeting">
                {userName ? `Hi ${userName}` : 'Sign In'}
              </span>
              <Button className="btn" size="sm" onClick={handleAuthClick}>Log Out</Button>
            </>
          ) : (
            <>
              <Button className="login" size="sm" variant="ghost" onClick={handleAuthClick}>Log In</Button>
              <a href="#upload" className="cta">Get Started</a>
            </>
          )}
          
        </div>        
      </nav>
    </header>
  )
}

export default NavBar