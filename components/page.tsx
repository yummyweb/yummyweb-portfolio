import React from 'react'
import Footer from './footer'
import Header from './header'
import Transition from './transition'

const Page = (props): JSX.Element => {
    return (
        <>
            <div className="container">
                <Header active={props.active} />
                <Transition>
                    {props.children}
                </Transition>
                <Footer />
            </div>
        </>
    )
}

export default Page
