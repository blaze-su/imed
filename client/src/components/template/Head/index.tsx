import React from 'react';
import Head from 'next/head';

interface IProps {
    title: string;
    description: string;
    keywords: string;
}

export const PageHead: React.FunctionComponent<IProps> = ({title, description, keywords}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8'/>
            <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no'/>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'/>
            <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'/>
            <meta name="google-site-verification" content="9YEzwcWojx3l6zSgF6EBm0qIGqry_x2RKPHdY6MFCCc" />
        </Head>
    );
};
