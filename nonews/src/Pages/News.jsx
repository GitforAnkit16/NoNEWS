import React, { useState } from 'react';
import '../components/header.css';

const sampleData = [
   
    {
        source : {name: "Uxdesign.cc"},
            author: "Stephen Farrugia",
            title: "Complicated sticks",
            description: "Complicated products that are useful for everything and nothing in particular.",
            url: "https://uxdesign.cc/complicated-sticks-6ce8bec56b43",
            urlToImage: "https://miro.medium.com/v2/resize:fit:1200/1*V3NAQX7Ki3bYVro-NJLELQ.png",
            publishedAt: "2024-05-12T07:27:32Z",
            content: "This week, Apple shared an ad for the newest iPad, which shows musical instruments, arts media, various creative tools, and entertainment products stacked inside a giant hydraulic press which, predic… [+4957 chars]"
    },
    {
        source: {
        id: null,
        name: "Politiken.dk"
        },
        author: null,
        title: "The Danish Car Designer Henrik Fisker and his Wife Were Called a \"Billionaire Power Couple.\" Now, Former Employees Speak Out About Brutal Management and Fear",
        description: "Fisker Inc. was a billion-dollar business and was ready to challenge Tesla. But the company has been destroyed by brutal management and has released cars with critical issues, according to criticism from former executives and employees. Fisker Inc.  dismissed…",
        url: "https://politiken.dk/News_In_English_/art9894597/The-Danish-Car-Designer-Henrik-Fisker-and-his-Wife-Were-Called-a-Billionaire-Power-Couple.-Now-Former-Employees-Speak-Out-About-Brutal-Management-and-Fear",
        urlToImage: "https://politiken.dk/incoming/img9883930.aicaxl/ALTERNATES/p16x9_960/Gitte%20fortryder%20ikke%20sit%20k%C3%B8b%20at%20hun%20har%20k%C3%B8bt%20en%20bil%20af%20konkurstruede%20Fisker%20Det%20er%20den%20bedste%20bil%20jeg%20nogensinde%20har%20haft",
        publishedAt: "2024-05-12T05:35:58Z",
        content: "Geeta Gupta-Fisker has a Ph.D. in biotechnology and many years of experience in the finance industry in the UK and the US, but she had not worked in the car industry before she took the job as Chief … [+3827 chars]"
        },
        {
        source: {
        id: null,
        name: "ETF Daily News"
        },
        author: "MarketBeat News",
        title: "Zacks Research Weighs in on Tesla, Inc.’s Q2 2024 Earnings",
        description: "Tesla, Inc. (NASDAQ:TSLA – Free Report) – Equities researchers at Zacks Research cut their Q2 2024 EPS estimates for Tesla in a research report issued on Tuesday, May 7th. Zacks Research analyst R. Singhi now anticipates that the electric vehicle producer wil…",
        url: "https://www.etfdailynews.com/2024/05/12/zacks-research-weighs-in-on-tesla-inc-s-q2-2024-earnings-nasdaqtsla/",
        urlToImage: "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo-1200x675.png?v=20221020135629&w=240&h=240&zc=2",
        publishedAt: "2024-05-12T05:28:43Z",
        content: "Tesla, Inc. (NASDAQ:TSLA – Free Report) – Equities researchers at Zacks Research cut their Q2 2024 EPS estimates for Tesla in a research report issued on Tuesday, May 7th. Zacks Research analyst R. S… [+6148 chars]"
        },
        {
        source: {
        id: null,
        name: "New Zealand Herald"
        },
        author: "Chris Keall",
        title: "Solar storm causes Autopilot wobbles for Kiwi Tesla owners, micro-outages for some Starlink users",
        description: "There were broadband satellite and GPS satellite issues.",
        url: "https://www.nzherald.co.nz/business/solar-storm-causes-autopilot-wobbles-for-kiwi-tesla-owners-some-starlink-users/GDMIDIBRCVH2PEGKMEDNEJQIIQ/",
        urlToImage: "https://www.nzherald.co.nz/resizer/v2/TDN27E62WRC6VOZ74JJX3OVW3M.jpg?auth=516ffa7f9b1e12a8e9a25e0e65d2aab57ded36107aa643a4e6d357be6ade2404&width=1200&height=675&quality=70&focal=748%2C876&smart=false",
        publishedAt: "2024-05-12T05:28:21Z",
        content: "Elon Musks high-tech empire seems to be largely standing up to what the sun can throw it.\r\nBut a few local Starlink users and Tesla drivers have reported service wobbles which seem to be related to t… [+3533 chars]"
        },
        {
        source: {
        id: null,
        name: "Biztoc.com"
        },
        author: "newsweek.com",
        title: "Richest Americans now pay less tax than working class in historical first",
        description: "America's richest are paying less tax than working-class people in a historical first. Data published by The New York Times shows that America's top billionaires are now paying less taxes than they have for decades. In the 1960s, the 400 richest Americans pai…",
        url: "https://biztoc.com/x/fb530d27ff144cff",
        urlToImage: "https://c.biztoc.com/p/fb530d27ff144cff/s.webp",
        publishedAt: "2024-05-12T05:24:07Z",
        content: "America's richest are paying less tax than working-class people in a historical first.Data published by The New York Times shows that America's top billionaires are now paying less taxes than they ha… [+293 chars]"
        },
        {
        source: {
        id: null,
        name: "CleanTechnica"
        },
        author: "Jennifer Sensiba",
        title: "Domestic US Automakers Still Need To Prepare For Chinese Competition",
        description: "News recently broke that the Biden administration plans to jack import taxes up on Chinese EVs, raising them from the current 25% to 100%. This would double the price of Chinese EVs, which would also not be eligible for federal point-of-sale tax credits. This…",
        url: "https://cleantechnica.com/2024/05/12/domestic-automakers-still-need-to-prepare-for-chinese-competition/",
        urlToImage: "https://cleantechnica.com/wp-content/uploads/2024/04/Chevy-Bolt-EUV-White-Sands-National-Park-800x445.png",
        publishedAt: "2024-05-12T05:14:14Z",
        content: "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nNews recently broke that the Biden administration plans to jack import taxes up on Chinese EVs, raising them … [+7493 chars]"
        },
        {
        source: {
        id: null,
        name: "NDTV News"
        },
        author: null,
        title: "Meta Is \"Super Greedy\": Elon Musk Hits Out At Rival Over Ad Campaigns",
        description: "Tesla and SpaceX CEO Elon Musk on Sunday said that Mark Zuckerberg-run Meta is \"super greedy\" at taking credit for advertisers who run campaigns on its platform.",
        url: "https://www.ndtv.com/world-news/meta-is-super-greedy-elon-musk-hits-out-at-rival-over-ad-campaigns-5644410",
        urlToImage: "https://c.ndtvimg.com/2024-04/elbr9jfg_elon-musk_625x300_29_April_24.jpeg",
        publishedAt: "2024-05-12T04:49:37Z",
        content: "The rivalry between Elon Musk and Mark Zuckerberg is well known.\r\nNew Delhi: Tesla and SpaceX CEO Elon Musk on Sunday said that Mark Zuckerberg-run Meta is \"super greedy\" at taking credit for adverti… [+1277 chars]"
        },
        {
        source: {
        id: null,
        name: "CleanTechnica"
        },
        author: "Jennifer Sensiba",
        title: "Anker Introduces Modular Whole-Home Battery System",
        description: "Years ago, Anker made a name for itself in the United States selling small consumer battery devices like phone power banks, laptop batteries, and chargers. Unlike some other brands from the 2010s that are no longer with us, Anker’s quality stood out from the …",
        url: "https://cleantechnica.com/2024/05/12/anker-introduces-modular-whole-home-battery-system/",
        urlToImage: "https://cleantechnica.com/wp-content/uploads/2024/04/Anker-SOLIX-X1-Press-Photo-Garage-1600x890-1.png",
        publishedAt: "2024-05-12T04:16:40Z",
        content: "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nYears ago, Anker made a name for itself in the United States selling small consumer battery devices like phon… [+4971 chars]"
        },
        {
        source: {
        id: null,
        name: "BusinessLine"
        },
        author: "Renil  S Varghese , Hari Viswanath & Rowan Barnett",
        title: "Tesla CEO Elon Musk’s China trip: Why the shift from India?",
        description: "Discover the significance of Elon Musk's unexpected visit to China, Tesla's second-largest market, and the reason for postponing his India trip.",
        url: "https://www.thehindubusinessline.com/multimedia/video/tesla-ceo-elon-musks-china-trip-why-the-shift-from-india/article68165523.ece",
        urlToImage: "https://bl-i.thgim.com/public/incoming/yivkh5/article68165544.ece/alternates/LANDSCAPE_1200/2024-04-28T050819Z_794719466_RC2C91AOTXLK_RTRMADP_3_TESLA-CHINA.JPG",
        publishedAt: "2024-05-12T03:30:00Z",
        content: "On April 28, #Tesla CEO #ElonMusk made an unannounced visit to #China, the #electric vehicle giants second-largest market.Musks visit to China came shortly after the postponement of his #India trip d… [+194 chars]"
        },
        {
        source: {
        id: null,
        name: "Freerepublic.com"
        },
        author: "Telegraph via Yahoo",
        title: "Watch: Left-wing activists overwhelm police to storm Tesla gigafactory",
        description: "Hundreds of Left-wing activists have stormed Tesla’s Berlin gigafactory after overwhelming local police. Protesters wearing blue baseball caps and face coverings broke through lines of police who failed to stop them despite using pepper spray. Local reports s…",
        url: "https://freerepublic.com/focus/f-news/4237241/posts",
        urlToImage: null,
        publishedAt: "2024-05-12T03:02:45Z",
        content: "Skip to comments.\r\nWatch: Left-wing activists overwhelm police to storm Tesla gigafactoryTelegraph via Yahoo ^\r\n | May 10, 2024\r\n | James Titcomb\r\nPosted on 05/11/2024 8:02:45 PM PDT by grundle\r\nHund… [+1878 chars]"
        },
        {
        source: {
        id: null,
        name: "CleanTechnica"
        },
        author: "Steve Hanley",
        title: "GM Will Pull The Plug On Chevy Malibu To Make Room For 2nd-Generation Bolt",
        description: "The Chevrolet Malibu is scheduled to go out of production at the end of 2024 to make room for the second generation Chevy Bolt. \nThe post GM Will Pull The Plug On Chevy Malibu To Make Room For 2nd-Generation Bolt appeared first on CleanTechnica.",
        url: "https://cleantechnica.com/2024/05/11/gm-will-pull-the-plug-on-the-chevy-malibu-to-make-room-for-2nd-generation-bolt/",
        urlToImage: "https://cleantechnica.com/wp-content/uploads/2024/05/Malibu.jpg",
        publishedAt: "2024-05-12T02:59:24Z",
        content: "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nThe Chevy Malibu is the Rodney Dangerfield of cars — it gets no respect. (Apologies to any readers who drive … [+3810 chars]"
        },
        {
        source: {
        id: null,
        name: "AOL"
        },
        author: "Brie Stimson",
        title: "Self-driving cars could lead to a fourth, white traffic signal — or no signals at all: researchers",
        description: "With more self-driving cars likely on the road in the not-too-distant future, traffic light technology, which hasn't changed much in the last century, may...",
        url: "https://www.aol.com/finance/self-driving-cars-could-lead-020644074.html",
        urlToImage: "https://s.yimg.com/ny/api/res/1.2/KPwK6rQmvcQuyAmMQfS_4A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/aol_fox_business_239/a143f950db48ecbb84885aac336fb19b",
        publishedAt: "2024-05-12T02:06:44Z",
        content: "The advent of self-driving cars could lead to a number of changes to traffic laws down the road, including a possible fourth traffic signal, researchers say.\r\nOn top of the ubiquitous red, yellow and… [+3402 chars]"
        },
        {
        source: {
        id: null,
        name: "Independent.ie"
        },
        author: "Adrian Weckler",
        title: "Adrian Weckler: Could the US probe of Elon Musk’s boosterism knock down his entire house of cards?",
        description: "The walls may be starting to close in on Tesla and on Elon Musk.",
        url: "https://www.independent.ie/opinion/comment/adrian-weckler-could-the-us-probe-of-elon-musks-boosterism-knock-down-his-entire-house-of-cards/a1022772674.html",
        urlToImage: "https://focus.independent.ie/thumbor/NA1LbhNhs6mBw4mI0rH02SV6wuM=/629x460/smart/prod-mh-ireland/e8c80a99-0aab-42b5-934c-78171061ed2e/575c89a2-18bd-493c-8e04-0aaf280f7e32/2151264625%20%282%29.jpg",
        publishedAt: "2024-05-12T01:30:00Z",
        content: "The walls may be starting to close in on Tesla and on Elon Musk.\r\nAs Musk continues to make lofty claims about Teslas ability to drive itself safely on roads and its potential as a robotaxi, US autho… [+140 chars]"
        },
        {
        source: {
        id: null,
        name: "Hoover.org"
        },
        author: "May 12, 2024",
        title: "Articles On: China’s CICC, Cool Battery Boom, Electric Vehicles, Cognac Diplomacy, Middle East, Tesla, Deflation, Trade War, South Korean and Japanese Shipyards, Gold and more",
        description: "This section highlights articles and reports on the harmful impacts of the commercial and economic policies employed by the Chinese Communist Party.",
        url: "https://www.hoover.org/research/articles-chinas-cicc-cool-battery-boom-electric-vehicles-cognac-diplomacy-middle-east",
        urlToImage: "https://www.hoover.org/sites/default/files/styles/facebook/public/research/images/csgp_industrialpolicies.jpg?itok=dPkGHoSi",
        publishedAt: "2024-05-12T00:00:00Z",
        content: "Chinas CICC Demotes Senior Bankers, Cuts Pay to Slash Costsby Pei Li and Cathy Chanvia Bloomberg on May 5, 2024\r\nChina Moves to Cool Battery Boom Amid Overcapacity Concernsby Danny Leevia Bloomberg o… [+2257 chars]"
        },
        {
        source: {
        id: null,
        name: "Biztoc.com"
        },
        author: "wmur.com",
        title: "Tesla dealership, service center coming to southern New Hampshire town",
        description: "A Tesla dealership and service center is coming to southern New Hampshire.Londonderry town officials told News 9 that the dealership and service center is being built near the Manchester-Boston Regional Airport, on Industrial Drive in their town. Tesla broke …",
        url: "https://biztoc.com/x/b6179f22f79f57dd",
        urlToImage: "https://c.biztoc.com/p/b6179f22f79f57dd/og.webp",
        publishedAt: "2024-05-11T23:58:04Z",
        content: "A Tesla dealership and service center is coming to southern New Hampshire.Londonderry town officials told News 9 that the dealership and service center is being built near the Manchester-Boston Regio… [+323 chars]"
        }
];

function News() {
    const [articles] = useState(sampleData);
    
    const [curSelectedNav, setCurSelectedNav] = useState(null);

    const reload = () => {
        window.location.reload();
    };

   

   

    const fillDataInCard = (article) => {
        const date = new Date(article.publishedAt).toLocaleString("en-US", {
            timeZone: "Asia/Jakarta",
        });

        return (
            <div className="cards" key={article.url} onClick={() => window.open(article.url, "_blank")}>
            {article.urlToImage && (
                <div className="card-header">
                    <img src={article.urlToImage} alt="news-image" id="news-img" />
                </div>
            )}
            <div className="card-content">
                <h3 id="news-title">{article.title}</h3>
                <h6 className="news-source" id="news-source">{`${article.source.name} · ${date}`}</h6>
                <p className="news-desc" id="news-desc">{article.description}</p>
            </div>
        </div>
        );
    };

    return (
        <div>
            <nav>
                <div className="main-nav containers flex">
                    <div className="nav-links">
                        <ul className="flex">
                            <li className={`hover-link nav-item ${!curSelectedNav && 'active'}`} onClick={reload}>Home</li>
                           
                        </ul>
                    </div>
                   
                </div>
            </nav>

            <main>
                <div className="cards-container container flex">
                    {articles.map((article) => fillDataInCard(article))}
                </div>
            </main>
        </div>
    );
}

export default News;
