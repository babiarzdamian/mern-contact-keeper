import React, { useContext, useEffect, useRef } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
    const contactContext = useContext(ContactContext);
    const text = useRef('');

    const { filterContacts, clearFilters, filtered } = contactContext;

    useEffect(() => {
        if (filtered === null) {
            text.current.value = '';
        }
    });

    const onChange = (e) => {
        e.preventDefault();
        if (text.current.value !== '') {
            filterContacts(e.target.value);
        } else {
            clearFilters();
        }
    };

    return (
        <form>
            <input
                type="text"
                ref={text}
                placeholder="Filter contacts"
                onChange={onChange}
            />
        </form>
    );
};

export default ContactFilter;
