import React from 'react';
import { CustomChat, FacebookProvider } from 'react-facebook';

const Messenger = () => {
    return (
        <>
            <FacebookProvider appId="469331782335612" chatSupport>
                <CustomChat pageId="209309862270894" minimized={true}/>
            </FacebookProvider> 
        </>
    );
};

export default Messenger;