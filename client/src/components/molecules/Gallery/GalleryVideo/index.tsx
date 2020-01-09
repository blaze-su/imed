import style from './index.scss';
import React, {useLayoutEffect, useMemo} from 'react';
import {fetchVideo} from '@redux/actions';
import {Spinner, ErrorBoundary} from '@components/atoms';
import {useDispatch, useSelector} from 'react-redux';
import YouTube from 'react-youtube';
import {IVideo} from '@interfaces'


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