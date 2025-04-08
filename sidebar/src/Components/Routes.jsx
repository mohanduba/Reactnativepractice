import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import Header from "./Header";
import SideNav from "./SideNav";
import Dashboard from "./Dashboard";
import Patient from "./Patient";
import Prescription from "./Prescription";
import TreatmentPlans from "./TreatmentPlans";
import ReportsAnalytics from "./ReportsAnalytics";

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<LandingPage />} />
            {/* <Route path="Header" element={<Header />} /> */}
            <Route element={<SideNav />}>
                <Route />
                <Route path="Dashboard" element={<Dashboard />} />
                <Route path="Patient" element={<Patient />} />
                <Route path="Prescription" element={<Prescription />} />
                <Route path="TreatmentPlans" element={<TreatmentPlans />} />
                <Route path="ReportsAnalytics" element={<ReportsAnalytics />} />
            </Route>
        </Route>
    )
)

export default routes;