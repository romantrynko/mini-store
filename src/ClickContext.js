import React from 'react';

const ClickContext = React.createContext();

export const ClickProvider = ClickContext.Provider;
export const ClickConsumer = ClickContext.Consumer;

export default ClickContext;
