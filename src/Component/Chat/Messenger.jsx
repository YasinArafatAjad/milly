// import React from 'react';
// import { CustomChat, FacebookProvider } from 'react-facebook';

// const Messenger = () => {
//     return (
//         <>
//             <FacebookProvider appId="469331782335612" chatSupport>
//                 <CustomChat pageId="209309862270894" minimized={true}/>
//             </FacebookProvider> 
//         </>
//     );
// };

// export default Messenger;


import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Messenger = () => {
    return (
        <>
            <MessengerCustomerChat
                pageId="<209309862270894>"
                appId="<469331782335612>"
            />
        </>
    );
};

export default Messenger;