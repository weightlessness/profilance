import React, { useState, useEffect } from 'react';
import { onInputValid } from '../utils/inputValidation';
import InputLink from './InputLink';
import { useAddNewLink } from '../customHooks/useAddNewLink';
import LinksList from './Links/LinksList';
import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux'
import { appActions } from '../redux/reducer';

function LeftBlock() {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const links = useSelector((state: RootState) => state.appReducer.sessionLinks.links)

    const onInputChange = (inputValue: string) => {
        const valid = onInputValid(inputValue)
        if (valid === '') setValue(inputValue)
        return valid
    }

    const [addLink, { data }] = useAddNewLink()

    const onSubmit = () => {
        if (value) return addLink({ variables: { url: value } })
        else return null
    }

    useEffect(() => {
        if (data && data?.shorten_url?.operation_status?.status === 'success')
            dispatch(appActions.addLink({ link: data.shorten_url.short_url }))

    }, [data])

    return (
        <div className="container__Block noBorder">
            <InputLink onValid={onInputChange} onSubmit={onSubmit} />
            <LinksList title='Мои ссылки' links={links} />
        </div>
    );
}

export default LeftBlock;
