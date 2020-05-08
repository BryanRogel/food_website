  
import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat'; // Librery necessary for Facebook Chat.

const messengerChat = () => {
    return (<MessengerCustomerChat
          pageId="115815143166629" // Page ID (Important, see in the information about the page).
          appId="518654022260624" // Necessary for charts and other stadistic data, only in https://developers.facebook.com.
          themeColor="#F62DB3" // Color for the chat, in hex code.
          loggedInGreeting="Bienvenido" // Establishes the message greeting.
          loggedOutGreeting="Nos vemos" // Establishes the message farewell.
          language="es_LA" // Change the languaje: es_LA or es_ES is spanish, en_Us or en_GB is English.
          version="4.0" // Version of the plugin, in the moment of the implementing this plugin, the latest version is 4.0.
          shouldShowDialog={false} // The chat is open automatically.
        />)
}

export default messengerChat;