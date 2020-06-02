import {ErrorBoundary, Spinner} from '@components/atoms';
import React, {useLayoutEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {IVideo} from '@interfaces'
import YouTube from 'react-youtube';
import {fetchVideo} from '@redux/actions';
import style from './GalleryVideo.module.scss';

export const GalleryVideo = (props: { url: string }) => {

    const dispatch = useDispatch();
    const fetchToServer = useLayoutEffect((): any => dispatch(fetchVideo(props.url)), [props.url, dispatch]);
    useMemo(() => fetchToServer, [fetchToServer]);
    const videoReducer = useSelector((store: any) => store.videoReducer);
    const {videos,  videoIsLoading} = videoReducer;

    return (videoIsLoading ? <Spinner/> :
        <div className={style.wrap}>
            <ErrorBoundary>
                { videoIsLoading ? <Spinner/> :
                    videos.map(({src, _id}: IVideo) => {
                    const idRegExp: RegExp = /\w{11}/;
                    const opts = {
                        width: '290',
                        height: '250'
                    };
                    const videoId: string = src.match(idRegExp)![0];
                    if (videoId !== null ){
                        return <YouTube opts={opts} containerClassName={style.item} videoId={videoId} key={_id}/>
                    }
                })}
            </ErrorBoundary>
        </div>
    );
};