import React, { useEffect } from 'react';
import Echo from 'laravel-echo';
import io from "socket.io-client";
import { ShortUrl } from '../redux/reducer';

declare global {
    interface Window {
        io: any;
        Echo: Echo;
    }
}

type Options = {
    callBack: (payload: ListenerPayload) => void;
};

export type ListenerPayload = {
    short_url: ShortUrl,
    socket: object
}

function createSocketConnection() {
    if (!window.Echo) {
        window.Echo = new Echo({
            broadcaster: "socket.io",
            host: 'http://test-task.profilancegroup-tech.com:6002',
            transports: ["websocket", "polling", "flashsocket"]
        });
    }
}

function listen(callBack: (payload: ListenerPayload) => void) {
    window.Echo.listen('btti_database_short_urls', '.new_click', (payload: ListenerPayload) => {
        callBack(payload);
      });
}

export const useListenNewClick = ({ callBack }: Options) => {
    useEffect(() => {
        window.io = io;

        createSocketConnection();
        return listen(callBack);
    });
};