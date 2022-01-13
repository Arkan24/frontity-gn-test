const settings = {
  "name": "goldnet",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Goldnet Resnova",
      "description": "Internet Service Provider Vicenza"
    }
  },
  "packages": [
    "@aamodtgroup/frontity-contact-form-7",
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Connettività",
              "/connettivita"
            ],
            [
              "Data Center",
              "/data-center/"
            ],
            [
              "Supporto",
              "/supporto/"
            ],
            [
              "Web Agency",
              "/web-agency/"
            ],
            [
              "Prova",
              "/prova/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://devgrnwp.goldnet.it",
          "homepage": "/internet-service-provider/"          
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
