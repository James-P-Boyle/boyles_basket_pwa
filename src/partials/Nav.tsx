import NavigateLink from "@/components/NavigateLink"
import RoundedButton from "@/components/RoundedButton"
import { useLocation, useNavigate } from "react-router-dom";

export default function Nav() {

  const navigate = useNavigate()
  const location = useLocation();
  const isHomePage = location.pathname === "/"
  const handleBack = () => {
    navigate(-1)
  }

  return (
    <nav>

      <div id="leftNav">
        {!isHomePage && (
          <RoundedButton
            className="backButton"
            onClick={handleBack}
            title="Go back"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={2.2} fill="none" style={{ padding: "0.3rem "}}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
            </svg>
          </RoundedButton>
        )}
      </div>

      <div id="innerNav">
        <RoundedButton>
          <NavigateLink
            title="Go back items page"
            to="/items"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} style={{ padding: "0.3rem "}}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </NavigateLink>
        </RoundedButton>

        <RoundedButton>
          <NavigateLink
            title="Go back to home page"
            to="/"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" style={{ padding: "0.3rem "}}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </NavigateLink>
        </RoundedButton>

        <RoundedButton>
          <NavigateLink
            title="Create new list"
            to="/list/create"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </NavigateLink>
        </RoundedButton>
      </div>

      <div id="rightNav">

      </div>


    </nav>
  )
}
