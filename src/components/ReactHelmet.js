import React, {useState, useEffect} from 'react';
import Helmet from 'react-helmet';


const ReactHelmet = (props) => {
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [keywords, setKeywords] = useState('');

    useEffect(() => {
        setDescription(props.description);
        setTitle(props.title);
        setKeywords(props.keywords);
    });

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