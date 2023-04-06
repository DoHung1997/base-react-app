import { Fragment, useEffect } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import { privateRoutes, publicRoutes } from './router';
import DefaultLayout from './components/Layout/DefaultLayout';
import SecurityLayout from './components/Layout/SecurityLayout';

function App() {
    useEffect(() => {
        document.title = 'Speam';
    }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    {privateRoutes.map((route) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout === null) {
                            Layout = Fragment;
                        } else if (route.layout) {
                            Layout = route.layout;
                        }

                        return (
                            <Route
                                key={uuid()}
                                path={route.path}
                                element={
                                    <SecurityLayout>
                                        <Layout>
                                            {/* <AppConnection> */}
                                            <Page />
                                            {/* </AppConnection> */}
                                        </Layout>
                                    </SecurityLayout>
                                }
                            />
                        );
                    })}
                    {publicRoutes.map((route) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout === null) {
                            Layout = Fragment;
                        } else if (route.layout) {
                            Layout = route.layout;
                        }

                        return (
                            <Route
                                key={uuid()}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
