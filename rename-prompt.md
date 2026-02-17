You are a naming assistant. Given a list of file paths and minimal context from a static website, suggest a new filename (basename only, same extension) for each file. Rules:
- Lowercase, kebab-case, no spaces. SEO-friendly and human-readable.
- For HTML: use page purpose (e.g. about-us.html, contact.html). Keep index.html as index.html.
- For CSS/JS: use purpose (e.g. main-styles.css, analytics.js).
- For images: use content (e.g. logo-infygate.webp, hero-banner.webp). Use alt/title when provided.
- Return a JSON object: keys = exact original path strings, values = new basename only (e.g. "main.css"). Preserve extension.
- Do not change path prefix (e.g. css/ stays css/ by returning "name.css" not "css/name.css").

Files and context:
[
  {
    "path": "404.html",
    "context": {
      "title": "",
      "first_heading": "404"
    }
  },
  {
    "path": "about-us.html",
    "context": {
      "title": "Sunshine Mining & Crushing Solutions LLP | About us",
      "first_heading": "ABOUT US"
    }
  },
  {
    "path": "contact-us.html",
    "context": {
      "title": "SUNSHINE Mining & Crushing Solutions LLP | Contact Us",
      "first_heading": "CONTACT US"
    }
  },
  {
    "path": "css/27ea6b5aea31a201edf6ca1b6941d9f0.css",
    "context": {
      "path": "css/27ea6b5aea31a201edf6ca1b6941d9f0.css"
    }
  },
  {
    "path": "css/559e64bf161e61fa0aca6e864c78191d.css",
    "context": {
      "path": "css/559e64bf161e61fa0aca6e864c78191d.css"
    }
  },
  {
    "path": "css/595cb6ccb56826a802ed411cef875f0e.css",
    "context": {
      "path": "css/595cb6ccb56826a802ed411cef875f0e.css"
    }
  },
  {
    "path": "css/84d4a0216f16f715d9b301db3a8da352.css",
    "context": {
      "path": "css/84d4a0216f16f715d9b301db3a8da352.css"
    }
  },
  {
    "path": "css/99c4e6f40ee9111eea53b6472f3e60f9.css",
    "context": {
      "path": "css/99c4e6f40ee9111eea53b6472f3e60f9.css"
    }
  },
  {
    "path": "css/d09d646f062b67daeff66ff1410b63fc.css",
    "context": {
      "path": "css/d09d646f062b67daeff66ff1410b63fc.css"
    }
  },
  {
    "path": "css/internal-styles.css",
    "context": {
      "path": "css/internal-styles.css"
    }
  },
  {
    "path": "imgs/03af5aa36c422a60e812bd29f2617d8f.webp",
    "context": {
      "refs": [
        {
          "alt": "Sunshine Mining & Crushing Solutions LLP",
          "title": ""
        },
        {
          "alt": "m",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/0de6acf23ddda19659d8c8eace777eac.webp",
    "context": {
      "refs": [
        {
          "alt": "Mining & Crushing Raising Contractors",
          "title": ""
        },
        {
          "alt": "Raising Contractors in Mining",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/33442837202592ddc006bd4fb15fb1b7.webp",
    "context": {
      "refs": [
        {
          "alt": "Manpower Supply",
          "title": ""
        },
        {
          "alt": "Manpower Services",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/4189f6a20a3ccfdb2d07e42486b36fd8.webp",
    "context": {
      "refs": [
        {
          "alt": "Crusher Operation And Maintenance Service",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/42d4101e691c84ba9eccda3354ad35ee.webp",
    "context": {
      "refs": [
        {
          "alt": "Operation And Maintenance Contractors",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/509334edb5269250ecaeaf2a366a0fd3.webp",
    "context": {
      "refs": [
        {
          "alt": "Approval from PWD",
          "title": ""
        },
        {
          "alt": "M.Sand / P.Sand product approval from PWD, Tamil Nadu & setting of Laboratory facilities at work sit",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/534ca6110a5e7e8de970505012832802.webp",
    "context": {
      "refs": [
        {
          "alt": "M.Sand And Aggregate Supply",
          "title": ""
        },
        {
          "alt": "TRADING ACTIVITIES - M.Sand And Aggregate Supply",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/5ffcea6b88ae1c613235d08359689cc1.webp",
    "context": {
      "refs": [
        {
          "alt": "New Crusher Erection & Plant Audits",
          "title": ""
        },
        {
          "alt": "New Crusher Erection & Plant Audits",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/66efdac52cfa37c03a56a878ca57c6c5.webp",
    "context": {
      "refs": [
        {
          "alt": "Sunshine\u00a0 Mining & Crushing Solutions LLP",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/8d27dca1b6b55f589e8acd39ebea1aa2.webp",
    "context": {
      "refs": [
        {
          "alt": "Accounting Job Work",
          "title": ""
        },
        {
          "alt": "Accounting Job Work",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/95bd7051eb04abd5d63528abf34e5542.webp",
    "context": {
      "refs": [
        {
          "alt": "Vision",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/b2111ea16ca2b801bf027bfd96dbbb75.webp",
    "context": {
      "refs": [
        {
          "alt": "Mission",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/bc907d4d2b79b8b0e473288fd6da81d1.webp",
    "context": {
      "refs": [
        {
          "alt": "All Statutory Permission For Mines And Crushers",
          "title": ""
        },
        {
          "alt": "All Statutory Permission For Mines And Crushers",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/d6794dbc638ba9a03efb2badea1f37ee.webp",
    "context": {
      "refs": [
        {
          "alt": "m",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/e2b9897078ddd0a36bd856a849677f3d.webp",
    "context": {
      "refs": [
        {
          "alt": "logo",
          "title": ""
        },
        {
          "alt": "logo",
          "title": ""
        },
        {
          "alt": "logo",
          "title": ""
        },
        {
          "alt": "logo",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "imgs/f13c96002436c2ced74473e7146d8c0d.webp",
    "context": {
      "refs": []
    }
  },
  {
    "path": "imgs/fb89572b24205c7c67b0423d01f61400.webp",
    "context": {
      "refs": [
        {
          "alt": "s",
          "title": ""
        }
      ]
    }
  },
  {
    "path": "index.html",
    "context": {
      "title": "Sunshine Mining & Crushing Solutions LLP | Reliable, energy efficient crushing solutions for mining works",
      "first_heading": "SUNSHINEMining & Crushing Solutions LLP"
    }
  },
  {
    "path": "js/03b2eaae6007054a68c38e495f894dba.js",
    "context": {
      "path": "js/03b2eaae6007054a68c38e495f894dba.js"
    }
  },
  {
    "path": "js/0a105d712b6a6c836c48dd97d0f0cac1.js",
    "context": {
      "path": "js/0a105d712b6a6c836c48dd97d0f0cac1.js"
    }
  },
  {
    "path": "js/0c46896987137b0016246f6bc2243099.js",
    "context": {
      "path": "js/0c46896987137b0016246f6bc2243099.js"
    }
  },
  {
    "path": "js/165d7b0ddfa33362140feea997351b77.js",
    "context": {
      "path": "js/165d7b0ddfa33362140feea997351b77.js"
    }
  },
  {
    "path": "js/16df9ef05001a1741857bf99f5a5738f.js",
    "context": {
      "path": "js/16df9ef05001a1741857bf99f5a5738f.js"
    }
  },
  {
    "path": "js/2a85c11e395a8380b5915443e926b569.js",
    "context": {
      "path": "js/2a85c11e395a8380b5915443e926b569.js"
    }
  },
  {
    "path": "js/34be5330971fdbd18985525bd994b0aa.js",
    "context": {
      "path": "js/34be5330971fdbd18985525bd994b0aa.js"
    }
  },
  {
    "path": "js/35c5f9e096d4da33d2a62031daf14248.js",
    "context": {
      "path": "js/35c5f9e096d4da33d2a62031daf14248.js"
    }
  },
  {
    "path": "js/3d70953a848219e749fedc2cdb906675.js",
    "context": {
      "path": "js/3d70953a848219e749fedc2cdb906675.js"
    }
  },
  {
    "path": "js/3e940a33e44b65c1c0af8bb80a893530.js",
    "context": {
      "path": "js/3e940a33e44b65c1c0af8bb80a893530.js"
    }
  },
  {
    "path": "js/544d012df7acf9c3f0920f67c9e322b9.js",
    "context": {
      "path": "js/544d012df7acf9c3f0920f67c9e322b9.js"
    }
  },
  {
    "path": "js/57d119d998d518b01f9d5ccb5e4d4c52.js",
    "context": {
      "path": "js/57d119d998d518b01f9d5ccb5e4d4c52.js"
    }
  },
  {
    "path": "js/67f6e2f99c3c3133e0dc669919fff5c5.js",
    "context": {
      "path": "js/67f6e2f99c3c3133e0dc669919fff5c5.js"
    }
  },
  {
    "path": "js/6ec87416dacb99fa6bb9b22985a752d9.js",
    "context": {
      "path": "js/6ec87416dacb99fa6bb9b22985a752d9.js"
    }
  },
  {
    "path": "js/7045b35c5bd0e9c7cf59f1900eeeec41.js",
    "context": {
      "path": "js/7045b35c5bd0e9c7cf59f1900eeeec41.js"
    }
  },
  {
    "path": "js/7260bab328b0ad74815a5efb377bcc67.js",
    "context": {
      "path": "js/7260bab328b0ad74815a5efb377bcc67.js"
    }
  },
  {
    "path": "js/893de96f1b6da546bd7c814964723eca.js",
    "context": {
      "path": "js/893de96f1b6da546bd7c814964723eca.js"
    }
  },
  {
    "path": "js/93e29fe348ddc9b71aba9c842adc18b8.js",
    "context": {
      "path": "js/93e29fe348ddc9b71aba9c842adc18b8.js"
    }
  },
  {
    "path": "js/9455859483e31e4da0e28f10d0742c2a.js",
    "context": {
      "path": "js/9455859483e31e4da0e28f10d0742c2a.js"
    }
  },
  {
    "path": "js/9db10375d298678e53777a2347b87073.js",
    "context": {
      "path": "js/9db10375d298678e53777a2347b87073.js"
    }
  },
  {
    "path": "js/9f9b6e54f82a6bbc8bac9b89327024bc.js",
    "context": {
      "path": "js/9f9b6e54f82a6bbc8bac9b89327024bc.js"
    }
  },
  {
    "path": "js/a2261649751fa61b606222c9b2ea3b80.js",
    "context": {
      "path": "js/a2261649751fa61b606222c9b2ea3b80.js"
    }
  },
  {
    "path": "js/b0bade6d42c2702ca85774296cc507c4.js",
    "context": {
      "path": "js/b0bade6d42c2702ca85774296cc507c4.js"
    }
  },
  {
    "path": "js/cd1ed86c1e7f06d985fd71bc10bd4b04.js",
    "context": {
      "path": "js/cd1ed86c1e7f06d985fd71bc10bd4b04.js"
    }
  },
  {
    "path": "js/cecb447a04bbe3e8982190dd6e697120.js",
    "context": {
      "path": "js/cecb447a04bbe3e8982190dd6e697120.js"
    }
  },
  {
    "path": "js/d80b370d82680fc786dcc943a327b9f2.js",
    "context": {
      "path": "js/d80b370d82680fc786dcc943a327b9f2.js"
    }
  },
  {
    "path": "js/df80c5cbcb312a9c7c0b2ebb6ac5f592.js",
    "context": {
      "path": "js/df80c5cbcb312a9c7c0b2ebb6ac5f592.js"
    }
  },
  {
    "path": "js/f1e5dbc1ece900d164c2e9aa2d6a1386.js",
    "context": {
      "path": "js/f1e5dbc1ece900d164c2e9aa2d6a1386.js"
    }
  },
  {
    "path": "js/f3f02c438592c8e1bbe551f4dbbf4f5c.js",
    "context": {
      "path": "js/f3f02c438592c8e1bbe551f4dbbf4f5c.js"
    }
  },
  {
    "path": "js/faf9ce4e848522206b5c3043551fb2d7.js",
    "context": {
      "path": "js/faf9ce4e848522206b5c3043551fb2d7.js"
    }
  },
  {
    "path": "services.html",
    "context": {
      "title": "Sunshine Mining & Crushing Solutions LLP | Services",
      "first_heading": "SERVICES"
    }
  }
]

Return only a JSON object mapping each path to its new basename (same extension). No other text.