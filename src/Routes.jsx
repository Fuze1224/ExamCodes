import Body from "./Components/Body/Body";
import Form from "./Form";
import CrudPage from "./pages/CrudPage";

let Route1 = [
    {
        id: 1,
        path: "/",
        element: <Body/>
    },
    {
        id: 1,
        path: "/crud",
        element: <CrudPage/>
    }
]

let Route2 = [
    {
        id:1,
        path: "*",
        element: <Form/>
    }
]

export default Route1;
export {Route2};