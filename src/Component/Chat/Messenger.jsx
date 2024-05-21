import React from 'react';
import { CustomChat, FacebookProvider } from 'react-facebook';

const Messenger = () => {
    return (
        <>
            <FacebookProvider appId="462465849450202" chatSupport>
                <CustomChat pageId="61555778263558" minimized={true}/>
            </FacebookProvider> 
        </>
    );
};

export default Messenger;