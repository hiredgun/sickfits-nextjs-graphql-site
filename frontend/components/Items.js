import React, { useState } from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import UserForm from './UserForm';
import styled from '../lib/css-in-js';

const UPDATE_USER_MUTATION = gql`
    mutation UPDATE_USER_MUTATION($id: ID!, $name: String!, $email: String!, $password: String!) {
        updateUser(data: { name: $name, email: $email, password: $password }, where: { id: $id }) {
            id
            name
            email
        }
    }
`;

export const ITEMS_QUERY = gql`
    query {
        users {
            id
            name
            email
        }
    }
`;

const DELETE_USER_MUTATION = gql`
    mutation DELETE_USER_MUTATION($id: ID!) {
        deleteUser(where: { id: $id }) {
            id
            name
            email
        }
    }
`;

const UserEditForm = ({ user }) => (
    <Mutation mutation={UPDATE_USER_MUTATION}>{(editUser, a) => <UserForm onSubmit={editUser} user={user} />}</Mutation>
);

const UserDeleteButton = ({ id }) => (
    <Mutation
        mutation={DELETE_USER_MUTATION}
        update={(cache, { data: { deleteUser } }) => {
            const data = cache.readQuery({ query: ITEMS_QUERY });
            data.users = data.users.filter(user => user.id !== deleteUser.id);
            cache.writeData({ query: ITEMS_QUERY, data });
        }}
        variables={{ id }}
    >
        {(deleteUser, { loading, error }) => (
            <>
                {error && <span>Error: {error}</span>}
                <button onClick={deleteUser} type="button">
                    {loading ? 'loading ...' : 'Delete'}
                </button>
            </>
        )}
    </Mutation>
);

const StyledUserItem = styled.div`
    border: 1px solid red;
    max-width: 500px;
`;

const Items = () => {
    const [editableUser, setEditable] = useState();

    return (
        <Query query={ITEMS_QUERY}>
            {({ data, loading, error }) => {
                if (loading) {
                    return 'Loading ..';
                }
                if (error) {
                    return error;
                }
                return data.users.map(user => (
                    <StyledUserItem key={user.id}>
                        {user.id}
                        <br />
                        {user.email}
                        <br />
                        {user.name}
                        <br />
                        {editableUser !== user.id && (
                            <button type="button" onClick={() => setEditable(user.id)}>
                                Edit
                            </button>
                        )}
                        <UserDeleteButton id={user.id} />
                        {editableUser === user.id && <UserEditForm key={user.id} user={user} />}
                    </StyledUserItem>
                ));
            }}
        </Query>
    );
};

export default Items;
