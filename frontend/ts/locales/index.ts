import enOrdersWebhookDescription from './orders/webhooks/description.en.html';
import deOrdersWebhookDescription from './orders/webhooks/description.de.html';

import enComponentswebhookExplorerPlaceholderCardContent from './components/webhook-explorer/placeholder-card-content.en.html';
import deComponentswebhookExplorerPlaceholderCardContent from './components/webhook-explorer/placeholder-card-content.de.html';

export default {
  de: {
    components: {
      accountConnects: {
        shopify: {
          title: 'Shopify-Konto',
          info:
            'Das Shopify-Konto, in dem Sie diese App installiert haben oder Zugriff gewährt bekommen haben.',
          notConnected:
            'Diese App wurde noch nicht mit Shopify verbunden. Geben Sie unten ihre Shopify-Domain ein um diese App mit Shopify zu verbinden.',
        },
        connect: 'Jetzt verbinden',
        disconnect: 'Trennen',
        logout: 'Abmelden',
      },
      plans: {
        title: 'App-Tarif',
        info: 'Ihr Tarif für diese App.',
        plan: 'Tarif',
        activated_on: 'Aktivert am',
        price: 'Preis',
        price_html: '{{price}} USD / Monat',
        trial: {
          ends_on: 'Testversion endet am {{date}}',
          ended_on: 'Testversion endete am {{date}}',
          days: 'Testzeitraum',
          days_html: '{{days}} Tage',
        },
        activate: 'Aktivieren',
        name: {
          customers: 'Kundentarif',
          default: 'Standardtarif',
        },
      },
      apiExplorer: {
        input: {
          placeholder: 'Rest-API URL zum Testen',
        },
        send: 'Senden',
        edit: 'Bearbeiten',
        freestyle: {
          short_desc:
            'Probiere die API selber aus indem du die die URL selber eingibst.',
        },
        roles: {
          'shopify-staff-member': {
            label: 'Nur Backend',
            info:
              'Diese API kann aus Sicherheitsgründen nur im Backend und nicht im Theme verwendet werden.',
          },
        },
        query: {
          title: 'Aktiviere optionale Query-Parameter',
        },
        shopify: {
          themes: {
            all: {
              short_desc: 'Ruft eine Liste aller Themes ab.',
            },
            theme_id: {
              short_desc: 'Ruft ein einzelnes Theme ab.',
            },
            active: {
              short_desc: 'Ruft das einzelne aktive Theme ab.',
            },
            assets: {
              list: {
                short_desc: 'Ruft eine Liste aller Assets eines Themes ab.',
              },
              assets_filename: {
                short_desc:
                  'Ruft eine einzelne Asset-Datei eines Themes anhand seines Dateinamens ab.',
              },
              templates_filename: {
                short_desc:
                  'Ruft eine einzelne Template-Datei eines Themes anhand seines Dateinamens ab.',
              },
              snippets_filename: {
                short_desc:
                  'Ruft eine einzelne Snippet-Datei eines Themes anhand seines Dateinamens ab.',
              },
              config_filename: {
                short_desc:
                  'Ruft eine einzelne Config-Datei eines Themes anhand seines Dateinamens ab.',
              },
              layout_filename: {
                short_desc:
                  'Ruft eine einzelne Layout-Datei eines Themes anhand seines Dateinamens ab.',
              },
              locales_filename: {
                short_desc:
                  'Ruft eine einzelne Locales-Datei eines Themes anhand seines Dateinamens ab.',
              },
              sections_filename: {
                short_desc:
                  'Ruft eine einzelne Sections-Datei eines Themes anhand seines Dateinamens ab.',
              },
              key: {
                short_desc:
                  'Ruft ein einzelnes Assets eines Themes anhand seines Keys ab.',
              },
            },
            locales: {
              all: {
                short_desc: 'Ruft alle Übersetzungen eines Themes ab.',
              },
              list: {
                short_desc: 'Ruft eine Liste von Asset-Sprachdateien ab.',
              },
              json: {
                short_desc:
                  'Ruft eine einzelne Asset-Sprachdatei eines Themes anhand seines Dateinamens ab.',
              },
              liquid: {
                short_desc:
                  'Ruft ein einzelnes Snippet Sprachobject eines Themes anhand des Liquid-Dateinamens ab.',
              },
              property_path: {
                short_desc:
                  'Ruft eine Untermenge oder eine Übersetzung eines Themes anhand des Json-Pfad ab.',
              },
            },
          },
          products: {
            short_desc: 'Ruft eine Liste von Produkten ab.',
            count: {
              short_desc: 'Ruft eine Anzahl von Produkten ab.',
            },
            product_id: {
              short_desc: 'Ruft ein einzelnes Produkt ab.',
            },
          },
        },
      },
      webhookExplorer: {
        placeholderCard: {
          content_html: deComponentswebhookExplorerPlaceholderCardContent,
        },
        simulate: {
          label: 'Simuliere',
          info:
            'Erzeugt ein Dummy-Produkt und entfernt es wieder um die entsprechenden Webhooks auszulösen.',
        },
      },
      socketEventCard: {
        roles: {
          'shopify-staff-member': {
            label: 'Nur Backend',
            info:
              'Dieser Webhook kann aus Sicherheitsbedenken nur im Backend und nicht im Theme empfangen werden.',
          },
        },
      },
    },
    titles: {
      overview: 'Übersicht',
      settings: 'Einstellungen',
      orders: 'Bestellungen',
      'webhooks-api': 'Webhook Websocket-API',
    },
    overview: {
      settings_desc: 'Generelle Einstellungen und Konto-Anbindungen',
      orders_desc: 'Zeige dir die übertragenen Bestellungen an',
    },
    orders: {
      webhooks: {
        title: 'Zeige gerade empfange Order-Webhooks',
        description_html: deOrdersWebhookDescription,
      },
    },
  },
  en: {
    components: {
      accountConnects: {
        shopify: {
          title: 'Shopify account',
          info:
            'The Shopify account where you installed this app or have been granted access.',
          notConnected:
            'This app has not yet been connected with Shopify. Enter your Shopify domain below to connect this app with Shopify.',
        },
        connect: 'Connect now',
        disconnect: 'Disconnect',
        logout: 'Logout',
      },
      plans: {
        title: 'App plan',
        info: 'Your plan for this app.',
        plan: 'Plan',
        activated_on: 'Activated on',
        price: 'Price',
        price_html: '{{price}} USD / month',
        trial: {
          ends_on: 'Trial ends on {{date}}',
          ended_on: 'Trial ended on {{date}}',
          days: 'Testing period',
          days_html: '{{days}} days',
        },
        activate: 'Activate',
        name: {
          customers: 'Customers tariff',
          default: 'Standard tariff',
        },
      },
      apiExplorer: {
        input: {
          placeholder: 'Rest API URL for testing',
        },
        send: 'Send',
        edit: 'Edit',
        freestyle: {
          short_desc: 'Try the API itself by enter the URL yourself.',
        },
        roles: {
          'shopify-staff-member': {
            label: 'Backend only',
            info:
              'For security reasons, this API can only be used in the backend and not in the theme.',
          },
        },
        query: {
          title: 'Activate optional query parameters',
        },
        shopify: {
          themes: {
            all: {
              short_desc: 'Retrieves a list of themes.',
            },
            theme_id: {
              short_desc: 'Retrieves a single theme.',
            },
            active: {
              short_desc: 'Retrieves the single active theme.',
            },
            assets: {
              list: {
                short_desc: 'Retrieve a list of all assets for a theme',
              },
              assets_filename: {
                short_desc:
                  'Retrieves a single theme asset file for a theme by its filename.',
              },
              templates_filename: {
                short_desc:
                  'Retrieves a single theme template file for a theme by its filename.',
              },
              snippets_filename: {
                short_desc:
                  'Retrieves a single theme snippets file for a theme by its filename.',
              },
              config_filename: {
                short_desc:
                  'Retrieves a single theme config file for a theme by its filename.',
              },
              layout_filename: {
                short_desc:
                  'Retrieves a single theme layout file for a theme by its filename.',
              },
              locales_filename: {
                short_desc:
                  'Retrieves a single theme locales file for a theme by its filename.',
              },
              sections_filename: {
                short_desc:
                  'Retrieves a single theme sections file for a theme by its filename.',
              },
              key: {
                short_desc:
                  'Retrieves a single theme file for a theme by its key.',
              },
            },
            locales: {
              all: {
                short_desc: 'Retrieve all language translations for a theme.',
              },
              list: {
                short_desc:
                  'Retrieve a list of locale asset files for a theme.',
              },
              json: {
                short_desc:
                  'Retrieves a single locale asset file for a theme by its filename.',
              },
              liquid: {
                short_desc:
                  'Retrieves a single section locale object for a theme by its liquid filename.',
              },
              property_path: {
                short_desc:
                  'Retrieves a locale subset or translation for a theme by its property path.',
              },
            },
          },
          products: {
            short_desc: 'Retrieves a list of products.',
            count: {
              short_desc: 'Retrieves a count of products.',
            },
            product_id: {
              short_desc: 'Retrieves a single product.',
            },
          },
        },
      },
      webhookExplorer: {
        placeholderCard: {
          content_html: enComponentswebhookExplorerPlaceholderCardContent,
        },
        simulate: {
          label: 'Simulate',
          info:
            'Creates a dummy product and removes it again to trigger the appropriate webhooks.',
        },
      },
      socketEventCard: {
        roles: {
          'shopify-staff-member': {
            label: 'Backend only',
            info:
              'For security reasons, this webhook can only be received in the backend and not in the theme.',
          },
        },
      },
    },
    titles: {
      overview: 'Overview',
      settings: 'Settings',
      orders: 'Orders',
      'webhooks-api': 'Webhook Websocket API',
    },
    overview: {
      settings_desc: 'General settings and account connections',
      orders_desc: 'Show you the transferred orders',
    },
    orders: {
      webhooks: {
        title: 'Show current received order webhooks',
        description_html: enOrdersWebhookDescription,
      },
    },
  },
};
