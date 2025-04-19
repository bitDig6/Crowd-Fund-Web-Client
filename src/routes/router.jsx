import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import CampaignDetails from "../pages/CampaignDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://crowd-fund-web-app-server.vercel.app/runningCampaigns')
            },
            {
                path: '/runningCampaigns/:id',
                element: <CampaignDetails></CampaignDetails>,
                loader: ({params}) => fetch(`https://crowd-fund-web-app-server.vercel.app/runningCampaigns/${params.id}`)
            }
        ]
    }
]);

export default router;