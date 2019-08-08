import React, { Suspense, lazy } from "react";

import ErrorBoundary from "./ErrorBoundary";

const OtherComponent = lazy(() => import("./OtherComponent"));
const AnotherComponent = lazy(() => import("./AnotherComponent"));

const App = () => (
    <div>
        <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
                <section>
                    <OtherComponent />
                    <AnotherComponent />
                </section>
            </Suspense>
        </ErrorBoundary>
    </div>
);

export default App;
