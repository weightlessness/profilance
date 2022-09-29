import React, {useEffect} from 'react'
import { gql, useMutation } from "@apollo/client";

export const useAddNewLink = () => {

    const newMutation = gql`
    mutation ($url: String) {
        shorten_url (url: $url){
            short_url {
                id
                url
                short_url
                clicks
                created_at
                updated_at
            }
            operation_status {
                status
            }
        }
    }
    `
    return useMutation(newMutation)
};