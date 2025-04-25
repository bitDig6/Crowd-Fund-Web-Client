import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import CampaignDetails from "../pages/CampaignDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddNewCampaign from "../pages/AddNewCampaign";
import PrivateRoute from "./PrivateRoute";
import AllCampaigns from "../pages/AllCampaigns";
import MyCampaign from "../pages/MyCampaign";
import MyDonations from "../pages/MyDonations";
import ErrorPage from "../pages/ErrorPage";
import Details from "../pages/Details";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://crowd-fund-web-app-server.vercel.app/runningCampaigns')
            },
            {
                path: '/runningCampaigns/:id',
                element: <PrivateRoute><CampaignDetails></CampaignDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://crowd-fund-web-app-server.vercel.app/runningCampaigns/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addCampaign',
                element: <PrivateRoute><AddNewCampaign></AddNewCampaign></PrivateRoute>
            },
            {
                path: '/campaigns',
                element: <AllCampaigns></AllCampaigns>,
                loader: () => fetch('https://crowd-fund-web-app-server.vercel.app/campaigns')
            },
            {
                path: '/campaigns/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({params}) => fetch(`https://crowd-fund-web-app-server.vercel.app/campaigns/${params.id}`)
            },
            {
                path: '/myCampaigns',
                element: <PrivateRoute><MyCampaign></MyCampaign></PrivateRoute>
            },
            {
                path: '/myDonations',
                element: <PrivateRoute><MyDonations></MyDonations></PrivateRoute>
            }
        ]
    }
]);

export default router;