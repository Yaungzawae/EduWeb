import HomePage from "./pages/HomePage"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Template from "./pages/templates/Template";
import StudentLoginPage from "./pages/Auth/StudentLoginPage"
import TeacherLoginPage from "./pages/Auth/TeacherLoginPage";
import StudentRegisterPage from "./pages/Auth/StudentRegisterPage";
import TeacherDetailPage, {teacherDetailPageLoader} from "./pages/TeacherDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/login/",
        element: <StudentLoginPage/>
      },
      {
        path: "/login/teacher",
        element: <TeacherLoginPage/>
      },
      {
        path: "/register",
        element: <StudentRegisterPage/>
      },
      {
        path: "/teacher/:name",
        element: <TeacherDetailPage/>,
        loader: teacherDetailPageLoader
      }
    ]
  },
]);

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App;
