import React from 'react';
import Helmet from 'react-helmet';


const ReactHelmet = ({description,title,keywords}) => {

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={description}/>
        </Helmet>
    );

}

export default ReactHelmet;