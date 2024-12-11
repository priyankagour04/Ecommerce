import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ProtectedRoute from './ProtectedRoute';
// import PublicRoutes from './PublicRoutes';
import routes from './routes';

// Lazy load components for better performance
const Home = lazy(() => import('../pages/home/Home'));
// const About = lazy(() => import('../pages/About'));
// const Dashboard = lazy(() => import('../pages/Dashboard'));
const Login = lazy(() => import('../features/auth/Login'));
// const NotFound = lazy(() => import('../pages/NotFound'));
const SignUp = lazy(() => import("../features/auth/SignUp"));

const AppRoutes = () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {/* Public Routes */}
                <Route
                    path={routes.home.path}
                    element={<Home />}
                />
                {/* <Route
                    path={routes.about.path}
                    element={<About />}
                /> */}
                <Route
                    path={routes.login.path}
                    element={
                        // <PublicRoutes>
                            <Login />
                        // </PublicRoutes>
                    }
                />
                <Route
                    path={routes.signup.path}
                    element={
                        // <PublicRoutes>
                            <SignUp />
                        // </PublicRoutes>
                    }
                />

                {/* Protected Routes */}
                {/* <Route
                    path={routes.dashboard.path}
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                /> */}

                {/* 404 Page */}
                {/* <Route
                    path={routes.notFound.path}
                    element={<NotFound />}
                /> */}
            </Routes>
        </Suspense>
    </Router>
);

export default AppRoutes;
