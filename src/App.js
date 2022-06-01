import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/router';
//import { UserAgentProvider } from '@quentin-sommer/react-useragent';

import { MainLayout } from '~/layouts';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((e, index) => {
                        const Page = e.component;
                        let Layout = MainLayout;

                        if (e.layout) {
                            Layout = e.layout;
                        } else if (e.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                exact
                                path={e.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
