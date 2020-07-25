import React, { useState } from 'react'

export const Context = React.createContext();

const Provider = props => {
    const [listLayout, setLayout] = useState(true);
    const [selectedTags, addToSelected] = useState([]);

    const changeLayout = () => {
        setLayout(!listLayout);
    }

    const handleClick = (singleTag) => {
        if (selectedTags.includes(singleTag)) {
          addToSelected(selectedTags.filter(tag => tag !== singleTag));
        } else {
          addToSelected(selectedTags.concat(singleTag));
        }
    };

    return (
        <Context.Provider value={ { listLayout, changeLayout, selectedTags, handleClick} }>
            {props.children}
        </Context.Provider>
    )
};

export default ({ element }) => (
    <Provider>
        {element}
    </Provider>
);
