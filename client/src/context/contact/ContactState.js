import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import contatcReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTERS,
} from '../types';

const ContactState = (props) => {
    const initialState = {
        contacts: [
            {
                type: 'personal',
                id: '610317ae770427e175f9d87e',
                name: 'Ted Johnson',
                email: 'tedj@gmail.com',
                phone: '222-111-111',
            },
            {
                type: 'professional',
                id: '6103178e770427e175f9d87c',
                name: 'Sarah Smith',
                email: 'ssmith@gmail.com',
                phone: '111-111-111',
            },
        ],
        current: null,
        filtered: null,
    };

    const [state, dispatch] = useReducer(contatcReducer, initialState);

    // Add contact
    const addContact = (contact) => {
        contact.id = uuidv4();
        dispatch({ type: ADD_CONTACT, payload: contact });
    };

    // Delete contact
    const deleteContact = (id) => {
        dispatch({ type: DELETE_CONTACT, payload: id });
    };

    // Set Current Contact
    const setCurrent = (contact) => {
        dispatch({ type: SET_CURRENT, payload: contact });
    };
    // Clear Current Contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    };
    // Update Contact
    const updateContact = (contact) => {
        dispatch({ type: UPDATE_CONTACT, payload: contact });
    };
    // Filter Contacts
    const filterContacts = (text) => {
        dispatch({ type: FILTER_CONTACTS, payload: text });
    };
    // Clear filter
    const clearFilters = () => {
        dispatch({ type: CLEAR_FILTERS });
    };

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                addContact,
                deleteContact,
                updateContact,
                setCurrent,
                clearCurrent,
                filterContacts,
                clearFilters,
            }}
        >
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactState;
