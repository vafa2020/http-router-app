import AddComment from "../pages/AddComment";
import FullCommentPage from "../pages/FullCommentPage";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

export const Routs = [
  { path: "/fullComment/:id", component: FullCommentPage },
  { path: "/newComments", component: AddComment },
  { path: "/", component: Home, exact: true },
  { path: "*", component: NotFound },
];

//نمونه ای از روت ها
// { path: "/blogs/:id", component: Blogs },
// { path: "/blogs", component: BlogsPage },
// { path: "/posts/:id([0-9]+)?", component: Post },//کاربر فقط باید عدد وارد کند(پارامتر ریجکت)
//   { path: "/posts/:id?([A-Za-z]+)", component: Post },//کاربر فقط باید حروف وارد کند
// { path: "/profile", component: Profile },
