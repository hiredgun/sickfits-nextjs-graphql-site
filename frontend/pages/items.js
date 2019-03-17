import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import faker from 'faker';
import Items from '../components/Items';
import UserForm from '../components/UserForm';
import { ITEMS_QUERY } from '../components/Items';

const ADD_USER_MUTATION = gql`
    mutation ADD_USER_MUTATION($name: String!, $email: String!, $password: String!) {
        createUser(data: { name: $name, email: $email, password: $password }) {
            id
            name
            email
        }
    }
`;

const items = () => {
    console.log('render');

    const [newUser, setUser] = useState({
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: 'dsafs',
    });

    const setNewUser = () => setUser({ name: faker.name.findName(), email: faker.internet.email(), password: 'dsafs' });

    return (
        <>
            <Mutation
                mutation={ADD_USER_MUTATION}
                update={(cache, { data: { createUser } }) => {
                    const { users } = cache.readQuery({ query: ITEMS_QUERY });
                    cache.writeQuery({ query: ITEMS_QUERY, data: { users: [...users, createUser] } });
                }}
            >
                {addUser => (
                    <UserForm
                        onSubmit={(...x) => {
                            addUser(...x);
                            setNewUser();
                        }}
                        user={newUser}
                    />
                )}
            </Mutation>
            <Items />
        </>
    );
};

export default items;
