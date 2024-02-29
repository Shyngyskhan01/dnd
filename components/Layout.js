import React from 'react';


function Layout({children}) {
    return (
        <div className="min-w-full min-h-screen  h-screen overflow-hidden">

            <main className="pl-40 pt-16">
                {children}
            </main>
        </div>
    );
}

export default Layout;