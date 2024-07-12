import React from "react";
import { Helmet } from "react-helmet-async";

const HelmetComp = ({ title, data }) => {
    return (
        <>
            <Helmet>
                {/* <title>{data?.meta_title || title}</title>
                <meta content={data?.meta_title || title} name="title" />
                <meta content={data?.meta_description || ''} name="description" />
                <meta content={data?.meta_keywords || ''} name="keywords" />

                <meta property="og:title" content={data?.meta_title || title}/>
                <meta property="og:type" content="website" />
                <meta property="og:URL" content="https://askassociatescbe.com/" />
                <meta property="og:image" content={data?.meta_images ||"https://muthuvelagency.netlify.app/"} />
                <meta property="og:description" content={data?.meta_description || ''}  />
                 */}

                <title>Ask Associatescbe</title>
                <meta name="description" content="Ask Associates" />
                <meta name="keywords" content="{{keywords}}" />
                <link rel="author" href="https://plus.google.com/{{googlePlusId}}" />
                <link rel="canonical" href="{{pageUrl}}" />
                <meta name="robots" content="index,follow" />

                <meta property="og:url" content="{{pageUrl}}" />
                <meta property="og:image" content="{{imageUrl}}" />
                <meta property="og:description" content="{{description}}" />
                <meta property="og:title" content="{{pageTitle}}" />
                <meta property="og:site_name" content="{{siteTitle}}" />
                <meta property="og:see_also" content="{{homepageUrl}}" />


                <meta name="twitter:card" content="summary" />
                <meta name="twitter:url" content="{{pageUrl}}" />
                <meta name="twitter:title" content="{{pageTitle}}" />
                <meta name="twitter:description" content="{{description}}" />
                <meta name="twitter:image" content="{{imageUrl}}" />


            </Helmet>
        </>
    )
}

export default HelmetComp;