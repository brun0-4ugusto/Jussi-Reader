

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
  'Content-Type': 'application/json',
};

const content = {
  "news": [
    {
      "title": "Google opens beta for future Pixel feature drops",
      "excerpt": "Resumo da notícia",
      "image": "bfarsace_211014_4802_0002.0.jpg",
      "url": "https://www.theverge.com/22960060/kia-ev6-review-electric-specs-price",
      "date_published": "2022-03-10T13:04:35.000Z",
      "categories": [
        {
          "name": "Android",
          "slug": "android"
        }
      ]
    },
    {
      "title": "Titulo da noticia",
      "excerpt": "Resumo da notícia",
      "image": "rbaldwin_220217_5051_0011.0.jpg",
      "url": "https://www.theverge.com/22960060/kia-ev6-review-electric-specs-price",
      "date_published": "2022-03-10T13:00:00.000Z",
      "categories": []
    },
    {
      "title": "PlayStation 5 consoles are available at Target for store pick-up orders (update: sold out)",
      "excerpt": "Resumo da notícia",
      "image": "vpavic_4261_20201023_0018.0.jpg",
      "url": "https://www.theverge.com/2022/3/10/22937311/sony-playstation-5-console-restock-ps5-target-avaibility-check-inventory",
      "date_published": "2022-03-10T12:47:58.000Z",
      "categories": [
        {
          "name": "Playstation",
          "slug": "playstation"
        },
        {
          "name": "Sony",
          "slug": "sony"
        }
      ]
    },
    {
      "title": "Apple’s Studio Display should work with Windows — including the webcam",
      "excerpt": "Resumo da notícia",
      "image": "Apple_Studio_Display.0.png",
      "url": "https://www.theverge.com/2022/3/9/22969789/apple-studio-display-windows-pc-compatibility-camera-5k-thunderbolt",
      "date_published": "2022-03-09T23:59:09.000Z",
      "categories": [
        {
          "name": "Apple",
          "slug": "apple"
        },
        {
          "name": "Windows",
          "slug": "windows"
        }
      ]
    },
    {
      "title": "Square Enix showed off lots of new games and none of them were Final Fantasy XVI",
      "excerpt": "Resumo da notícia",
      "image": "ffxvi.0.jpg",
      "url": "https://www.theverge.com/2022/3/9/22969466/final-fantasy-square-enix-sony-march-2022-state-of-play",
      "date_published": "2022-03-09T23:45:25.000Z",
      "categories": [
        {
          "name": "Games",
          "slug": "games"
        }
      ]
    },
    {
      "title": "Uber Eats brings bill splitting to deliveries",
      "excerpt": "Resumo da notícia",
      "image": "1231061423.0.jpg",
      "url": "https://www.theverge.com/2022/3/9/22969561/uber-eats-bill-splitting-deliveries-takeout",
      "date_published": "2022-03-09T22:43:08.000Z",
      "categories": [
        {
          "name": "Uber",
          "slug": "uber"
        }
      ]
    }
  ]
}


exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    headers,
    body: JSON.stringify(content)
  });
};