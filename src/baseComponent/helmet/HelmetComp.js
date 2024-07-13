import { data } from 'isotope-layout';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import favicon from '../../assets/images/favicon.ico';
import logo from '../../assets/images/logo.png';

export default function HelmetComp({title, data}) {

    const typeKeyword  = "ask associates Coimbatore, ask associates palladam, ask associates cbe, askassociatescbe.com, construction material supplier coimbatore, construction material supplier palladam, redymix coimbatore, readymix palladam, sand in coimbatore, sand in palladam, cements in coimbatore, cements in palladam, Manufacturer, Wholesaler, Trader, Retailer, Distributor, jally stones, strong construction , strong building, crushed stones in coimbatore ,palladam, all brand cements supplier in coimbatore, all brand cement supplier in palladam";

    const siteTitle = title ? title + " | Ask Associates Coimbatore & Palladam | askassociatescbe.com " : "Ask Associates Coimbatore & Palladam | askassociatescbe.com";
    const description = data?.description ? data?.description : "Ask Associates Coimbatore and Palladam Construction Material Supplier such as Fly Ash Bricks, AAC Blocks, River Sand, Sand, Crushed Stones, Cements, Redymix Concretes and All Brand Cements. Manufacturer | Wholesaler | Trader | Retailer | Distributor";
    const keywords = data?.keywords ? data?.keywords + typeKeyword  : typeKeyword ;
    const url = window.location.href;
    const imageUrl = data?.imgUrl ? data?.imgUrl : logo;

    return (
        <Helmet>
            <title>{siteTitle}</title>
            <meta name="title" content={siteTitle}  />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="author" href="Ask Associates" />
            <link rel="canonical" href={url} />

            <link href={favicon} rel="icon"  />

            <meta property="og:url" content={url}/>
            <meta property="og:image" content={imageUrl} />
            <meta property="og:description" content={description} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:site_name" content="Ask Associates Coimbatore & Palladam | askassociatescbe.com" />
            <meta property="og:see_also" content="https://askassociatescbe.com/" />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:type" content="website" />
            <meta property="og:image:width" content="600" />
            <meta property="og:image:height" content="336" />


            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />

        </Helmet>
    )
}