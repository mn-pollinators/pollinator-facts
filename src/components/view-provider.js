import React, { useState } from 'react';
import { element } from 'prop-types';

export const viewContext = React.createContext();

const ViewProvider = props => {
    const [listLayout, setLayout] = useState(true);
        console.log(listLayout)
    return (
        <viewContext.Provider value={{
            listLayout,
            changeLayout: () => setLayout(!listLayout)
        }}>
            {props.children}
        </viewContext.Provider>
    )
};

export default ({ element }) => (
    <ViewProvider>
        {element}
    </ViewProvider>
);
