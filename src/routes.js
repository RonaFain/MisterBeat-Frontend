import { WelcomePage } from "./pages/WelcomePage";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { LibraryPage } from "./pages/LibraryPage";
import { LoginSignup } from "./pages/LoginSignup";
import { Friends } from "./pages/Friends";
// import { UserDetails } from "./pages/UserDetails";
import { CreatePlaylist } from "./cmps/CreatePlaylist";
// import  {StationDetails}  from "./pages/StationDetails";
import { LikedSongs } from "./pages/LikedSongs";

const routes = [
  {
    path: "station/create",
    component: <CreatePlaylist />,
  },
  // {
  //   path: "/station/:stationId",
  //   component: <StationDetails />,
  // },
  {
    path: "/friends",
    component: <Friends />
  },
  {
    path: "/search",
    component: <SearchPage />,
  },
  {
    path: "/library",
    component: <LibraryPage />,
  },
  {
    path: "/likedSongs",
    component: <LikedSongs />,
  },
  {
    path: "/login",
    component: <LoginSignup />,
  },
  {
    path: "/signup",
    component: <LoginSignup />,
  },
  {
    path: "/",
    component: <HomePage />,
  },
  // {
  //   path: "/",
  //   component: <WelcomePage />,
  // },
  // {
  //   path: "/home",
  //   component: <HomePage />,
  // },
];

export default routes;
