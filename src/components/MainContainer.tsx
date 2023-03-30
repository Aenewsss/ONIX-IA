import Head from "next/head";
import Script from "next/script";

const MainContainer = ({ children }: any) => {
    return (
        <>
            <Head>
                <title>Onix - IA</title>
                <meta name="description" content="Your virtual assistant" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/icons/favicon.svg" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" />
            </Head>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js" />

            <main>{children}</main>
        </>
    );
}

export default MainContainer;