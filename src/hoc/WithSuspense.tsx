import React, {Component} from "react"
import Preloader from "components/Common/Preloader/Preloader"

export function withSuspense<P>(Component: React.ComponentType & any) {
    return (props: P) => {
        return (
            <React.Suspense fallback={<Preloader/>}>
                <Component {...props} />
            </React.Suspense>
        )
    }
}