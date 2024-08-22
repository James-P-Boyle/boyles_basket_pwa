import NavigateLink from "@/components/NavigateLink"
import RoundedButton from "@/components/RoundedButton"
import { useLocation } from "react-router-dom"

export default function Nav() {

  const location = useLocation()
  const isHomePage = location.pathname === "/"
  const isListRoute = location.pathname.startsWith("/list")

  return (
    <nav>

      <div id="leftNav">
        {!isHomePage && (
          <RoundedButton>
            <NavigateLink
              title="Go back"
              to=".."
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={2.2} fill="none" style={{ padding: "0.3rem "}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
              </svg>
            </NavigateLink>
          </RoundedButton>
        )}
      </div>

      <div id="innerNav">
        <RoundedButton>
          <NavigateLink
            title="Go back items page"
            to="/items"
          >
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} style={{ padding: "0.3rem "}}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg> */}
            <svg className="withFill" style={{ padding: "0.4rem "}} viewBox="0 0 33.402473 33.659542"><g transform="translate(-79.088296,-126.70005)"><path strokeWidth={0.1} d="m 95.890508,137.09688 c -1.05154,-0.23818 -1.902041,0.19111 -2.910421,0.0649 -1.361123,-0.17031 -2.535397,-1.0115 -3.96875,-1.05447 -3.86416,-0.11578 -6.710918,3.12851 -6.879167,6.81037 -3.282738,0.0388 -4.36581,5.13697 -1.058333,5.82084 0.0019,2.79452 1.023514,5.29669 1.845336,7.9375 0.345546,1.11019 0.583618,2.48099 1.674681,3.12763 1.035976,0.6141 2.731002,0.31195 3.888316,0.31195 h 9.260418 c 2.333912,0 7.545132,0.96943 9.465482,-0.46091 0.91254,-0.67971 1.07368,-1.96373 1.38906,-2.97867 0.821,-2.64134 1.84362,-5.14271 1.84547,-7.9375 2.01745,-0.41712 2.71383,-3.73248 1.23878,-5.20756 -0.84402,-0.84407 -2.2688,-0.61328 -3.35545,-0.61328 0,-3.91924 -2.03068,-6.90245 -2.50137,-10.58333 -0.19526,-1.52805 1.27662,-2.87216 0.33734,-4.45873 -0.82814,-1.39882 -7.737032,-1.45036 -8.752082,-0.21966 -1.19771,1.45219 0.23381,2.94148 0.1968,4.41381 -0.0396,1.57342 -1.2247,3.51686 -1.71611,5.02708 m 8.995842,-8.73125 v 1.85208 h -6.350012 v -1.85208 h 6.350012 m 2.11666,14.55208 c -3.39857,-0.10054 -6.84933,-3.21384 -9.789592,-4.7625 0.35552,-2.63803 2.619558,-9.32479 6.511412,-6.19035 2.54317,2.04833 3.27792,7.94039 3.27818,10.95285 m -14.816673,-4.23333 v 0.26458 c -3.027257,2.8973 -4.575228,3.96875 -8.73125,3.96875 0.382164,-4.34983 5.054229,-7.03614 8.73125,-4.23333 m 10.318753,4.23333 H 90.06967 c 0.763429,-1.33315 2.958412,-3.92927 4.497918,-4.30315 1.77707,-0.43159 6.814082,2.99272 7.937502,4.30315 m -21.347142,1.48257 c 1.869916,-0.92012 5.775457,-0.15965 7.853389,-0.15965 6.656601,0 14.333813,-1.07723 20.886483,0.0392 1.13665,0.19368 1.57295,2.13268 0.64982,2.86388 -1.31419,1.04087 -5.60229,0.27194 -7.24879,0.27194 H 88.217587 c -2.056739,0 -4.866164,0.50189 -6.839982,-0.0841 -1.053756,-0.31285 -1.207267,-2.44528 -0.219657,-2.93124 m 6.001305,4.33827 c 0,1.79432 -0.885533,6.99822 0.424233,8.30712 0.934244,0.93345 2.62644,0.25929 2.93124,-0.90382 0.577585,-2.20424 0.08411,-5.12551 0.08411,-7.4033 h 1.058333 c 0,2.27779 -0.493474,5.19906 0.08411,7.4033 0.3048,1.16311 1.996996,1.83727 2.931239,0.90382 1.30977,-1.3089 0.42424,-6.5128 0.42424,-8.30712 h 1.32291 c 0,1.79432 -0.88553,6.99822 0.42423,8.30712 0.93425,0.93345 2.626438,0.25929 2.931238,-0.90382 0.577594,-2.20424 0.0841,-5.12551 0.0841,-7.4033 h 1.058344 c 0,2.27779 -0.49348,5.19906 0.0841,7.4033 0.3048,1.16311 1.99707,1.83727 2.93132,0.90382 1.30969,-1.3089 0.42413,-6.51277 0.42413,-8.30712 h 4.49792 c -2.7e-4,2.41696 -0.52388,7.94543 -2.49502,9.63003 -1.02288,0.87419 -3.3888,0.42413 -4.64874,0.42413 H 89.805087 c -1.259973,0 -3.625797,0.45006 -4.648782,-0.42413 -1.971067,-1.6846 -2.494703,-7.21307 -2.494968,-9.63003 h 4.497916 m 1.852084,0 v 7.40833 H 88.48217 v -7.40833 h 0.529167 m 4.7625,0 v 7.40833 H 93.24467 v -7.40833 h 0.529167 m 4.497921,0 v 7.40833 h -0.52917 v -7.40833 h 0.52917 m 4.762492,0 v 7.40833 h -0.52916 v -7.40833 z"/></g></svg>
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


      </div>

      <div id="rightNav">
        {isListRoute ? (
          <RoundedButton>
            <NavigateLink
              title="Go back items page"
              to="/items"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} style={{ padding: "0.4rem "}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </NavigateLink>
          </RoundedButton>
          ) : (
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
        )}

      </div>


    </nav>
  )
}
