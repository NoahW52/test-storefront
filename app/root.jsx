import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import appStyles from './styles/app.css';
import favicon from '../public/favicon.svg';
import CountryBar from './components/CountryBar';

export const links = () => {
  return [
    {rel: 'stylesheet', href: appStyles},
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    },
    {rel: 'icon', type: 'image/svg+xml', href: favicon},
  ];
};

export async function loader({context}) {
  const layout = await context.storefront.query(LAYOUT_QUERY);
  const country = await context.storefront.query(COUNTRY_QUERY)
  return {layout, country };
}

export default function App() {
  const data = useLoaderData();

  const {name} = data.layout.shop;
  const { localization } = data.country
  console.log(data.country)

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        
        <CountryBar />

        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

const LAYOUT_QUERY = `#graphql
  query layout {
    shop {
      name
      description
    }
  }
`;

const COUNTRY_QUERY = `
  #graphql
  query country {
    localization {
      availableCountries {
        isoCode
        name
      }
    }
  }
`