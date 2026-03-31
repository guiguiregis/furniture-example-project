/* eslint-disable import/no-cycle */

import { Color, ProductConfig } from '@/helpers/contentful/contentful.types';

export const ORIGINAL_COLOR_OPTIONS: Color[] = [
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/5T51DXlQpExCvzOgXkSCxm/43a7ca9bf240bf82f918c4460d3fde8a/Screen_Shot_2021-08-31_at_4.13.38_PM.png?fm=webp',
      alt: 'Dark Grey swatchData',
      blurImageUrl:
        'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACQAQCdASoEAAQAAUAmJaQAAudFtmAA/sqV/3jT/R2kI9jr7rfTaRCxGUS8AAAA',
    },
    desc: 'Our most popular color. You’ll love it for its timelessness and practicality.  ',
    tags: [
      {
        title: 'Pet-friendly',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/4pUj1ErNAvJUAJflf1tMfv/d4f43f56558c9126ffef85219472bea5/pet.svg?fm=webp',
      },
      {
        title: 'Easy-to-clean',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/2iLCWbzwJZ84UBRzNVggM5/62ae6e75bc30f0af6a691ed60fa2314d/clean.svg?fm=webp',
      },
    ],
    accessoryUpsells: [
      {
        tag: undefined,
        price: 35,
        link: '/lumbar-cushion/dark-grey-lumbar-cushion',
        variantId: 'gid://shopify/ProductVariant/42210920792262',
        title: 'Lumbar',
        upsellTitle: 'Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://downloads.ctfassets.net/z0vszzs4am30/5DSpN2Kjo63hY3t1gRkrZy/e41cce6918bbf1b9e599669c38d09f4d/DarkGreyLumbar1.png',
        },
      },
      {
        tag: undefined,
        price: 65,
        link: '/traversin-cushion/dark-grey-traversin-cushion',
        variantId: 'gid://shopify/ProductVariant/42210959491270',
        title: 'Traversin',
        upsellTitle: 'Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/3yNXG4DXuoCg5GpI1RG1YU/764b7e3a40dd9469774db954ea602b91/DarkGreyTraversin.jpg',
        },
      },
      {
        tag: {
          color: '#BDCFE3',
          title: 'Best Value',
        },
        price: 155,
        link: '/style-sets/golden-glow-style-set-bundle',
        variantId: 'gid://shopify/ProductVariant/41824117162182',
        title: 'Golden Glow Set',
        upsellTitle: '3 Cushions, 1 Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/1DEwLy8GIe2J0KaP5hyCfn/a019c48791d8f7e69d76d71597754e52/GoldenGlow_StyleSet_Lead.jpg',
        },
      },
      {
        tag: {
          color: '#E5D5A0',
          title: "Designer's Pick",
        },
        price: 42,
        link: '/june-cushion/golden-glow-june-cushion',
        variantId: 'gid://shopify/ProductVariant/41828757143750',
        title: 'June',
        upsellTitle: 'Hand Woven Textured Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/7ikzezN9EPlV7Wg3eu873j/48d1438f03f56307df8c9523e91a5d97/June_GoldenGlow_Top.jpg',
        },
      },
      {
        tag: {
          color: '#E5D5A0',
          title: "Designer's Pick",
        },
        price: 72,
        link: '/bauer-throw/cream-bauer-throw',
        variantId: 'gid://shopify/ProductVariant/41828769628358',
        title: 'Bauer',
        upsellTitle: 'Hand Woven Waffled Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/4NddqSbZ6CsVv4Z4dyCVEc/091da818d5881645a88bcb1b0ee60be2/Bauer_Cream_top.jpg',
        },
      },
    ],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/6x9E1X3qzuGmMeDQ8jJIHp/d41e0fba548ce0388a24107b1fad19fd/Cozey_TeamFelix588x588.jpg?fm=webp',
    hex: '#4a4a4a',
    title: 'Dark Grey',
    value: 'dark-grey',
    isLimited: false,
    blurImageUrl:
      'data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoEAAQAAUAmJZwCdAEO9p5AAP3CF1R/2/sb/+mGW202ksto3s9qE+1k1i8mIAAA',
  },
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/4II5mn0V3kJROXeEhe5uwx/32aeb00ba13f6570a594ee34bd50f728/Screen_Shot_2021-08-31_at_4.18.30_PM.png?fm=webp',
      alt: 'Charcoal swatchData',
      blurImageUrl:
        'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACQAQCdASoEAAQAAUAmJaQAAudFrAAA4n9Vn0tN/n/3ht/0l+G6NrovO4AAAA==',
    },
    desc: 'A beloved, versatile color. Perfect for a modern design.',
    tags: [
      {
        title: 'Pet-friendly',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/4pUj1ErNAvJUAJflf1tMfv/d4f43f56558c9126ffef85219472bea5/pet.svg?fm=webp',
      },
      {
        title: 'Easy-to-clean',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/2iLCWbzwJZ84UBRzNVggM5/62ae6e75bc30f0af6a691ed60fa2314d/clean.svg?fm=webp',
      },
    ],
    accessoryUpsells: [
      {
        tag: undefined,
        price: 35,
        link: '/lumbar-cushion/charcoal-lumbar-cushion',
        variantId: 'gid://shopify/ProductVariant/42210920923334',
        title: 'Lumbar',
        upsellTitle: 'Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/3TIEUeKg4dPvnaLECKGmEg/01506dd482e917da65750fa2163fcf85/CharcoalLumbar.jpg',
        },
      },
      {
        tag: undefined,
        price: 65,
        link: '/traversin-cushion/charcoal-traversin-cushion',
        variantId: 'gid://shopify/ProductVariant/42210959622342',
        title: 'Traversin',
        upsellTitle: 'Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/4P4bY2ZZrRgkga9oFZAP8M/45c6d67b72562d7322e9785f81bfeb1c/Charcoal_Traversin.jpg',
        },
      },
      {
        tag: {
          color: '#BDCFE3',
          title: 'Best Value',
        },
        price: 155,
        link: '/style-sets/line-it-up-style-set-bundle',
        variantId: 'gid://shopify/ProductVariant/41828790436038',
        title: 'Line It Up Set',
        upsellTitle: '3 Cushions, 1 Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/4W72ym1wIM1evya0vKcZ0y/e331604d9e246e961980f4912fd545b7/LineItUp_Style_Set.jpg',
        },
      },
      {
        tag: {
          color: '#E5D5A0',
          title: "Designer's Pick",
        },
        price: 42,
        link: '/june-cushion/cream-june-cushion',
        variantId: 'gid://shopify/ProductVariant/41828757110982',
        title: 'June',
        upsellTitle: 'Hand Woven Textured Cushion',
        buttonText: 'Add To Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/31QArQ6aOPrlkhrK74EBye/2c1f4d5ed776cc8e5371341e9064238a/June_Cream_top.jpg',
        },
      },
      {
        tag: {
          color: '#E5D5A0',
          title: "Designer's Pick",
        },
        price: 72,
        link: '/charles-throw/cream-and-simply-grey-charles-throw',
        variantId: 'gid://shopify/ProductVariant/41828778541254',
        title: 'Charles',
        upsellTitle: 'Striped Cotton Blend Hand Woven',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/5djp4US9uZpwyNPtrEVg7G/e83069feeed85106e49bc1414bdde9e5/Charles_Lead.jpg',
        },
      },
    ],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/74jie9E0xTGUNB78ljzxwZ/b081a9da4c3d0448de80cdd3ecbb44c8/adapt.png?fm=webp',
    hex: '#313233',
    title: 'Charcoal',
    value: 'charcoal',
    isLimited: false,
    blurImageUrl:
      'data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoDAAQAAUAmJYwCdAEO/ae0AAD8P4QhT2MGv/X9BX+05LyaAuks2ekeHd5pbdJtbjSDtoAA',
  },
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/4KKoCCjGJRhJRIFGbJXl5R/9854a39eed3be57d8cb2ebd60901327f/Screen_Shot_2021-08-31_at_4.17.02_PM.png?fm=webp',
      alt: 'Light Grey swatchData',
      blurImageUrl:
        'data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAACQAQCdASoEAAQAAUAmJaQAAudZtgAA/tJt/6vT7mSiqf4G23AAAAAA',
    },
    desc: 'A tone that is not too light, nor too dark, the ideal in-between.  ',
    tags: [
      {
        title: 'Pet-friendly',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/4pUj1ErNAvJUAJflf1tMfv/d4f43f56558c9126ffef85219472bea5/pet.svg?fm=webp',
      },
      {
        title: 'Easy-to-clean',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/2iLCWbzwJZ84UBRzNVggM5/62ae6e75bc30f0af6a691ed60fa2314d/clean.svg?fm=webp',
      },
    ],
    accessoryUpsells: [
      {
        tag: undefined,
        price: 35,
        link: '/lumbar-cushion/light-grey-lumbar-cushion',
        variantId: 'gid://shopify/ProductVariant/42210920825030',
        title: 'Lumbar',
        upsellTitle: 'Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/7g6wlwJ5gt6HlW26q5aCwz/acaf71de03ef633b5a63cba861dbcb33/LightGreyLumbar.jpg',
        },
      },
      {
        tag: undefined,
        price: 65,
        link: '/traversin-cushion/light-grey-traversin-cushion',
        variantId: 'gid://shopify/ProductVariant/42210959524038',
        title: 'Traversin',
        upsellTitle: 'Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/6K02LK7YoTkJbhqWhJpKGO/bad0816981e71a0e1eca8de8eea97eb3/LightGreyTraversin.jpg',
        },
      },
      {
        tag: {
          color: '#BDCFE3',
          title: 'Best Value',
        },
        price: 155,
        link: '/style-sets/sunshine-style-set-bundle',
        variantId: 'gid://shopify/ProductVariant/41828790403270',
        title: 'Sunshine Set',
        upsellTitle: '3 Cushions, 1 Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/6RCnnQK1Og9e42ClvF0dHP/fb1396d555bb15749f035caff5410778/Sunshine_StyleSet_Lead.jpg',
        },
      },
      {
        tag: {
          color: '#E5D5A0',
          title: "Designer's Pick",
        },
        price: 42,
        link: '/clarke-cushion/multi-clarke-cushion',
        variantId: 'gid://shopify/ProductVariant/41828759208134',
        title: 'Clarke',
        upsellTitle: 'Hand Woven Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/1uI5Iql9fuklvRRa9ZtgvQ/3418c4b42fbd828651c8801c7c314575/Clarke_Lead.jpg',
        },
      },
      {
        tag: {
          color: '#E5D5A0',
          title: "Designer's Pick",
        },
        price: 72,
        link: '/bauer-throw/golden-glow-bauer-throw',
        variantId: 'gid://shopify/ProductVariant/41828769693894',
        title: 'Bauer',
        upsellTitle: 'Hand Woven Waffled Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/4Xn5MWUbNZ6buyJkbrC7LS/b09b7af88b9fe78264a77ae08539e0be/Bauer_GoldenGlow_top.jpg',
        },
      },
    ],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/HxQX9pFc2brNVqR2GySyi/1b742d708f67b1b32f494abc047f18b8/reivew.png?fm=webp',
    hex: '#CBCDD3',
    title: 'Light Grey',
    value: 'light-grey',
    isLimited: false,
    blurImageUrl:
      'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoEAAQAAUAmJZwAAudZt7gA/oYLpj+fyIIdnkRbZOdMta8jUG72yd4gAAA=',
  },
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/19wOxNcmdUC00xROdBUoVl/a0d89ac4361dfd322bf27afb259ddba6/color.png?fm=webp',
      alt: 'Navy Blue swatchData',
      blurImageUrl:
        'data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADwAQCdASoEAAIAAUAmJQBOl0AAYR45UAAAzj//1dmotBb534c3dJeTV9zms/NmsPaqWMSLktcAAA==',
    },
    desc: 'A classic hue that pairs perfectly with neutrals like greys and whites.  ',
    tags: [
      {
        title: 'Pet-friendly',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/4pUj1ErNAvJUAJflf1tMfv/d4f43f56558c9126ffef85219472bea5/pet.svg?fm=webp',
      },
      {
        title: 'Easy-to-clean',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/2iLCWbzwJZ84UBRzNVggM5/62ae6e75bc30f0af6a691ed60fa2314d/clean.svg?fm=webp',
      },
    ],
    accessoryUpsells: [
      {
        tag: undefined,
        price: 35,
        link: '/lumbar-cushion/navy-blue-lumbar-cushion',
        variantId: 'gid://shopify/ProductVariant/42210920890566',
        title: 'Lumbar',
        upsellTitle: 'Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/U56eRyw0rAVLAVUh63faA/64100285dc418dd3cc4d1998550b4755/NavyLumbar.jpg',
        },
      },
      {
        tag: undefined,
        price: 65,
        link: '/traversin-cushion/navy-blue-traversin-cushion',
        variantId: 'gid://shopify/ProductVariant/42210959589574',
        title: 'Traversin',
        upsellTitle: 'Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/IcHrxVuGh9PW7AD5VTYDd/3f17edd5cba7fecbc94b2cd55f034cb3/NavyTraversin.jpg',
        },
      },
      {
        tag: {
          color: '#BDCFE3',
          title: 'Best Value',
        },
        price: 155,
        link: '/style-sets/celestial-style-set-bundle',
        variantId: 'gid://shopify/ProductVariant/41824117227718',
        title: 'Celestial Set',
        upsellTitle: '3 Cushions, 1 Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/5hdbtl67xgz5DisBs7cwiR/33de6d0dab29c6b51f7feb674bcf18e3/Celestial_StyleSet_Lead.jpg',
        },
      },
      {
        tag: {
          color: '#E5D5A0',
          title: "Designer's Pick",
        },
        price: 72,
        link: '/bauer-throw/cream-bauer-throw',
        variantId: 'gid://shopify/ProductVariant/41828769628358',
        title: 'Bauer',
        upsellTitle: 'Hand Woven Waffled Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/4NddqSbZ6CsVv4Z4dyCVEc/091da818d5881645a88bcb1b0ee60be2/Bauer_Cream_top.jpg',
        },
      },
      {
        tag: {
          color: '#E5D5A0',
          title: "Designer's Pick",
        },
        price: 42,
        link: '/lucie-cushion/midnight-and-cream-lucie-cushion',
        variantId: 'gid://shopify/ProductVariant/41828758880454',
        title: 'Lucie',
        upsellTitle: 'Textured Hand Woven',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/5eJgoqR4CfycrBmuRk0Cqq/180a2fadbc4b5540f52c9bee7606db3c/Lucie_Lead.jpg',
        },
      },
    ],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/2KlquxTZXWnxo81SwC0s1E/4a793802c545722059f4ba578be6be1b/swatchDataes.png?fm=webp',
    hex: '#191944',
    title: 'Navy Blue',
    value: 'navy-blue',
    isLimited: false,
    blurImageUrl:
      'data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoDAAQAAUAmJZQCdAEO+KbQAP6bh/8VRmvtjJ5Z9id/L+nPNHuWikUVeryuAAAA',
  },
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/ZEE4p5pdlSfg0FEaJ68FM/d8ccd80bd00db31ff180d91464d53674/Screen_Shot_2021-08-31_at_4.18.14_PM.png?fm=webp',
      alt: 'Ivory swatchData',
      blurImageUrl:
        'data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoEAAQAAUAmJYwCdAEO92RQAPsj/GmnIT+09D4AGxAwA9Ab5ycYTSTmUUVzAAAA',
    },
    desc: 'An inviting, soft shade of off-white that embodies comfort and elegance.',
    tags: [
      {
        title: 'Pet-friendly',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/4pUj1ErNAvJUAJflf1tMfv/d4f43f56558c9126ffef85219472bea5/pet.svg?fm=webp',
      },
      {
        title: 'Easy-to-clean',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/2iLCWbzwJZ84UBRzNVggM5/62ae6e75bc30f0af6a691ed60fa2314d/clean.svg?fm=webp',
      },
    ],
    accessoryUpsells: [
      {
        tag: undefined,
        price: 35,
        link: '/lumbar-cushion/ivory-lumbar-cushion',
        variantId: 'gid://shopify/ProductVariant/42210920857798',
        title: 'Lumbar',
        upsellTitle: 'Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/1pPZO4iu3wNdul4NB8TWHr/cc3b4e550516d9953ad0cb5583e3b86c/IvoryLumbar.jpg',
        },
      },
      {
        tag: undefined,
        price: 65,
        link: '/traversin-cushion/ivory-traversin-cushion',
        variantId: 'gid://shopify/ProductVariant/42210959556806',
        title: 'Traversin',
        upsellTitle: 'Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/1I9JMSAydOtqBOazrqnUzp/5291ff78281b744d38c36aceac27dc02/IvoryTraversin.jpg',
        },
      },
      {
        tag: {
          color: '#BDCFE3',
          title: 'Best Value',
        },
        price: 155,
        link: '/style-sets/celestial-style-set-bundle',
        variantId: 'gid://shopify/ProductVariant/41824117227718',
        title: 'Celestial Set',
        upsellTitle: '3 Cushions, 1 Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/5hdbtl67xgz5DisBs7cwiR/33de6d0dab29c6b51f7feb674bcf18e3/Celestial_StyleSet_Lead.jpg',
        },
      },
      {
        tag: {
          color: '#E5D5A0',
          title: "Designer's Pick",
        },
        price: 42,
        link: '/stella-cushion/midnight-stella-cushion',
        variantId: 'gid://shopify/ProductVariant/41828752588998',
        title: 'Stella',
        upsellTitle: 'Jacquard Woven Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/yIdgK1ZX3uVnEE40lyTyP/bf267583f649ea7ba1e6ad14c3a89866/Stella__Lead.jpg',
        },
      },
      {
        tag: {
          color: '#E5D5A0',
          title: "Designer's Pick",
        },
        price: 72,
        link: '/bauer-throw/midnight-bauer-throw',
        variantId: 'gid://shopify/ProductVariant/41828769661126',
        title: 'Bauer',
        upsellTitle: 'Hand Woven Waffled Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/3MZljU8k8NAD9imcSnj0fu/4e218dea256f72cf166bcb41ab5433c0/Bauer_Midnight_top.jpg',
        },
      },
    ],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/74jie9E0xTGUNB78ljzxwZ/b081a9da4c3d0448de80cdd3ecbb44c8/adapt.png?fm=webp',
    hex: '#e3e0da',
    title: 'Ivory',
    value: 'ivory',
    isLimited: false,
    blurImageUrl:
      'data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoDAAQAAUAmJYwCdAEO/ae0AAD8P4QhT2MGv/X9BX+05LyaAuks2ekeHd5pbdJtbjSDtoAA',
  },
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/6xsKLQg97Md2DHpif5Umc8/94fb83b5ea6b8084c8db8b31e5f019ae/Screen_Shot_2021-11-22_at_11.05.11_PM.png?fm=webp',
      alt: 'Sand swatchData',
      blurImageUrl:
        'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoEAAQAAUAmJZQCdAEO+Kf2AAD+iU2b3qHv5NE/5zk6NrPzVolTNxGWwwmDaJ8AAAA=',
    },
    desc: 'The best of both worlds. Perfect for its warm but classy look.',
    tags: [
      {
        title: 'Pet-friendly',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/4pUj1ErNAvJUAJflf1tMfv/d4f43f56558c9126ffef85219472bea5/pet.svg?fm=webp',
      },
      {
        title: 'Easy-to-clean',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/2iLCWbzwJZ84UBRzNVggM5/62ae6e75bc30f0af6a691ed60fa2314d/clean.svg?fm=webp',
      },
    ],
    accessoryUpsells: [
      {
        tag: undefined,
        price: 35,
        link: '/lumbar-cushion/sand-lumbar-cushion',
        variantId: 'gid://shopify/ProductVariant/42210920956102',
        title: 'Lumbar',
        upsellTitle: 'Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/1T4EOkaZ3rEG0mZ1FbQi6D/ff67614bfc19d2c96fbf61df32eb6b85/SandLumbar.jpg',
        },
      },
      {
        tag: undefined,
        price: 65,
        link: '/traversin-cushion/sand-traversin-cushion',
        variantId: 'gid://shopify/ProductVariant/42210959655110',
        title: 'Traversin',
        upsellTitle: 'Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/6UulDzY3OGdCjXyHUBWB3T/b95806dcfef62786cf398474377df3d6/SandTraversin.jpg',
        },
      },
      {
        tag: {
          color: '#BDCFE3',
          title: 'Best Value',
        },
        price: 155,
        link: '/style-sets/iced-chai-style-set-bundle',
        variantId: 'gid://shopify/ProductVariant/41824117293254',
        title: 'Chai Latte Set',
        upsellTitle: '3 Cushions, 1 Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/cwVLEMZcWKlkkKeSZfE7A/3ca44bd7dca63664eb37fef3cb704011/ChaiLatte_StyleSet_Lead.jpg',
        },
      },
      {
        tag: {
          color: '#E5D5A0',
          title: "Designer's Pick",
        },
        price: 42,
        link: '/sherbrooke-cushion/chai-sherbrooke-cushion',
        variantId: 'gid://shopify/ProductVariant/41828752752838',
        title: 'Sherbrooke',
        upsellTitle: 'Jacquard Woven Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/23VlqQVXvMM4eOHY0QTZZQ/75a428219bfdfa3ce8850e1c387fdb61/Shebrooke_Lead.jpg',
        },
      },
      {
        tag: {
          color: '#E5D5A0',
          title: "Designer's Pick",
        },
        price: 72,
        link: '/ferrier-throw/chai-ferrier-throw',
        variantId: 'gid://shopify/ProductVariant/41828763566278',
        title: 'Ferrier Throw in Chai',
        upsellTitle: 'Handwoven 50"X60"',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/25HQ2Hyerm47UxslosbGe1/5418079cdbbb8de52413d5a48e7da3fc/Ferrier__Chai_Lead.jpg',
        },
      },
    ],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/4aC8oJDRUaVDmtRwkkLXEq/013b497011e27eb180b6e20d99890cd6/example.jpeg?fm=webp',
    hex: '#CAC3BB',
    title: 'Sand',
    value: 'sand',
    isLimited: false,
    blurImageUrl:
      'data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADQAQCdASoEAAMAAUAmJZgCdAEO/gPIAAD+8LctI1G/+RWSZeYzaOF538lbK00f3dxAj/6MV0Qf+wM1Wu4cjK1LsmQAAA==',
  },
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/3kBnh8L540UksNuJ5DQyQ/b46df9fd50442c92fb4898f04aed16f5/MicrosoftTeams-image__16_.png?fm=webp',
      alt: 'Velvet Sapphire Swatch',
      blurImageUrl:
        'data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoEAAQAAUAmJQBOgCHe08gAAP7b6//odWX5n94gHOhBsuk5Hb9dFIzGE0kdgAAA',
    },
    desc: 'Sapphire: A true gem. Fits right in a modern decor.',
    tags: [
      {
        title: 'Easy-to-clean',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/2iLCWbzwJZ84UBRzNVggM5/62ae6e75bc30f0af6a691ed60fa2314d/clean.svg?fm=webp',
      },
      {
        title: 'Pet-friendly',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/4pUj1ErNAvJUAJflf1tMfv/d4f43f56558c9126ffef85219472bea5/pet.svg?fm=webp',
      },
    ],
    accessoryUpsells: [],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/1DAmVBkZCAcNkBUJyes3MB/6944185b1333d0aa9b16a20f48313dbb/example.jpeg?fm=webp',
    hex: '#153758',
    title: 'Velvet Sapphire',
    value: 'velvet-blue',
    isLimited: true,
    blurImageUrl:
      'data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADQAQCdASoDAAQAAUAmJYgCdAEO/gOOAAD+id/sZ/++3tvv9y7GfvnVJQbyI7uHD0QbAOJN8npABQ3ByJBJPtS+OYAAAA==',
  },
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/1YnF9VN01IzOpDzp4OTd0Z/d7a152a49f239713bde007925deb40a9/MicrosoftTeams-image__15_.png?fm=webp',
      alt: 'Velvet Emerald',
      blurImageUrl:
        'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACwAQCdASoEAAQAAUAmJYwCdAEO9qIgAP7qAf/50HNWwf+gszC1kYsN09AAAA==',
    },
    desc: 'Emerald: A soft & luxurious feel, a contemporary look.\n',
    tags: [
      {
        title: 'Easy-to-clean',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/2iLCWbzwJZ84UBRzNVggM5/62ae6e75bc30f0af6a691ed60fa2314d/clean.svg?fm=webp',
      },
      {
        title: 'Pet-friendly',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/4pUj1ErNAvJUAJflf1tMfv/d4f43f56558c9126ffef85219472bea5/pet.svg?fm=webp',
      },
    ],
    accessoryUpsells: [],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/WiIqLgKDaOGal4hI7z0cx/b5d57b1657225bd804f326a97a415f97/green_sofa.jpeg?fm=webp',
    hex: '#2b473b',
    title: 'Velvet Emerald',
    value: 'velvet-green',
    isLimited: true,
    blurImageUrl:
      'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACQAQCdASoEAAMAAUAmJZwAAudLLzgA/vTHSP/Fh6SgteAp1ZcQMJPaHwAAAA==',
  },
];

export const CIELLO_COLOR_OPTIONS: Color[] = [
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/NBwNceLIbexiRQrhkVwKh/f91c72f33b630bb7aa9f88fde81d3516/dream-grey.png?fm=webp',
      alt: 'Dream Grey swatchData',
      blurImageUrl:
        'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoEAAMAAUAmJZwCdAEO+xCgAAD+82fzL09LLJQ6e5qsctnh9UAAAA==',
    },
    desc: 'This shade is as elegant as it is versatile',
    tags: [
      {
        title: 'Easy-to-clean',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/2iLCWbzwJZ84UBRzNVggM5/62ae6e75bc30f0af6a691ed60fa2314d/clean.svg?fm=webp',
      },
    ],
    accessoryUpsells: [
      {
        tag: {
          color: '#E5D5A0',
          title: "Designer's Pick",
        },
        price: 42,
        link: '/june-cushion/simply-grey-june-cushion',
        variantId: 'gid://shopify/ProductVariant/41828757438662',
        title: 'June',
        upsellTitle: 'Hand Woven Textured Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/4tHT6xHlMYYvCaiac84Q2t/0f8cc9f0536c23f8dc908e784f8d4032/June_SimplyGrey_top.jpg',
        },
      },
      {
        tag: {
          color: '#BDCFE3',
          title: 'Best Value',
        },
        price: 155,
        link: '/style-sets/keep-it-simple-style-set-bundle',
        variantId: 'gid://shopify/ProductVariant/41828790370502',
        title: 'Keep It Simple Set',
        upsellTitle: '3 Cushions, 1 Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/xz6fUVptGlntT7I93YEUN/1f2c0c297067fad9f210005e3c7de57b/Keep_it_Simple_StyleSet_Lead.jpg',
        },
      },
      {
        tag: {
          color: '#E5D5A0',
          title: "Designer's Pick",
        },
        price: 72,
        link: '/ferrier-throw/simply-grey-ferrier-throw',
        variantId: 'gid://shopify/ProductVariant/41828763533510',
        title: 'Ferrier',
        upsellTitle: 'Patterned Hand Woven Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/1qVMFvC6KNBvtKk0aqQKUG/90ad8f84c2324e6ae92fc86e3434725d/Ferrier__SimplyGrey_Top.jpg',
        },
      },
    ],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/7A6wTLLiWfyNVHFBxL7nTM/e364c001cbe938ec51e1630514836031/storm-grey.png?fm=webp',
    hex: '#999693',
    title: 'Dream Grey',
    value: 'dream-grey',
    isLimited: false,
    blurImageUrl:
      'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoEAAIAAUAmJZwAAudFuiAA/upf/w8hceD+OsDE7WbZ0G0pBlk6b3BAAAA=',
  },
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/7A6wTLLiWfyNVHFBxL7nTM/e364c001cbe938ec51e1630514836031/storm-grey.png?fm=webp',
      alt: 'Storm Grey',
      blurImageUrl:
        'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoEAAIAAUAmJZwAAudFuiAA/upf/w8hceD+OsDE7WbZ0G0pBlk6b3BAAAA=',
    },
    desc: 'Timeless & classic. Mixes with any decor.',
    tags: [
      {
        title: 'Easy-to-clean',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/2iLCWbzwJZ84UBRzNVggM5/62ae6e75bc30f0af6a691ed60fa2314d/clean.svg?fm=webp',
      },
    ],
    accessoryUpsells: [
      {
        tag: {
          color: '#E5D5A0',
          title: "Designer's Pick",
        },
        price: 42,
        link: '/toledo-cushion/golden-glow-toledo-cushion',
        variantId: 'gid://shopify/ProductVariant/41828758716614',
        title: 'Toledo',
        upsellTitle: 'Hand Embroidered Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/4JzDanVD6KOB6Uxg36fDEC/5ebce22529a28bfdefd57b0f322cdc54/Toledo_Lead.jpg',
        },
      },
      {
        tag: {
          color: '#BDCFE3',
          title: 'Best Value',
        },
        price: 155,
        link: '/style-sets/golden-glow-style-set-bundle',
        variantId: 'gid://shopify/ProductVariant/41824117162182',
        title: 'Golden Glow Set',
        upsellTitle: '3 Cushions, 1 Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/1DEwLy8GIe2J0KaP5hyCfn/a019c48791d8f7e69d76d71597754e52/GoldenGlow_StyleSet_Lead.jpg',
        },
      },
      {
        tag: {
          color: '#E5D5A0',
          title: "Designer's Pick",
        },
        price: 72,
        link: '/bauer-throw/cream-bauer-throw',
        variantId: 'gid://shopify/ProductVariant/41828769628358',
        title: 'Bauer',
        upsellTitle: 'Hand Woven Waffled Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/4NddqSbZ6CsVv4Z4dyCVEc/091da818d5881645a88bcb1b0ee60be2/Bauer_Cream_top.jpg',
        },
      },
    ],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/6u7AGcAlFySWju0M437V2n/f43ac3be11983faab412cb563d2b0cb5/CLOUD_3_SEATER_-_STORM_GREY.jpeg?fm=webp',
    hex: '#46484a',
    title: 'Storm Grey',
    value: 'storm-grey',
    isLimited: false,
    blurImageUrl:
      'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAAAQAgCdASoEAAMAAUAmJZwCdAaKAWbWXhYAAP76vv9f/hb/aEI/mWL9akyo18aAAAA=',
  },
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/3lO6HOtDKZXv26Smfs8q3c/8568d501cc54e64b5963f30197718487/sunset-beige.png?fm=webp',
      alt: 'Sunset Beige',
      blurImageUrl:
        'data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoEAAIAAUAmJZQCdAEO9p5AAP5tIZ19of/P///Vc/SqttB+X9SytgxcYTSTobKBPNAAAA==',
    },
    desc: 'A statement color for a statement piece. Catches the eye and the imagination.',
    tags: [
      {
        title: 'Easy-to-clean',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/2iLCWbzwJZ84UBRzNVggM5/62ae6e75bc30f0af6a691ed60fa2314d/clean.svg?fm=webp',
      },
    ],
    accessoryUpsells: [
      {
        tag: {
          color: '#E5D5A0',
          title: "Designer's Pick",
        },
        price: 42,
        link: '/florence-cushion/natural-beige-florence-cushion',
        variantId: 'gid://shopify/ProductVariant/41828752687302',
        title: 'Florence',
        upsellTitle: 'Mutli-Texture Cushion',
        buttonText: 'Add To Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/b8s0GUSvikTO5lZM0tPiY/f5d983ea0b01560ec8b1ca0cdb0cfa3c/Florence_Lead.jpg',
        },
      },
      {
        tag: {
          color: '#BDCFE3',
          title: 'Best Value',
        },
        price: 155,
        link: '/style-sets/iced-chai-style-set-bundle',
        variantId: 'gid://shopify/ProductVariant/41824117293254',
        title: 'Chai Latte Set',
        upsellTitle: '3 Cushions, 1 Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/cwVLEMZcWKlkkKeSZfE7A/3ca44bd7dca63664eb37fef3cb704011/ChaiLatte_StyleSet_Lead.jpg',
        },
      },
      {
        tag: {
          color: '#E5D5A0',
          title: "Designer's Pick",
        },
        price: 72,
        link: '/ferrier-throw/chai-ferrier-throw',
        variantId: 'gid://shopify/ProductVariant/41828763566278',
        title: 'Ferrier Throw in Chai',
        upsellTitle: 'Handwoven 50"X60"',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/25HQ2Hyerm47UxslosbGe1/5418079cdbbb8de52413d5a48e7da3fc/Ferrier__Chai_Lead.jpg',
        },
      },
    ],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/1VZJfUd2w0q6BJiddX4NWs/752a47ef51489ce87e92123a21fba426/CLOUD_3_SEATER_-_BEIGE.jpeg?fm=webp',
    hex: '#d2ccc2',
    title: 'Sunset Beige',
    value: 'sunset-beige',
    isLimited: false,
    blurImageUrl:
      'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoEAAMAAUAmJZwAAudHyhgA/vq+/vL+Fv8RuKv/zLLy1e6BsGohyktLMAA=',
  },
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/NBwNceLIbexiRQrhkVwKh/f91c72f33b630bb7aa9f88fde81d3516/dream-grey.png?fm=webp',
      alt: 'Dream Grey swatchData',
      blurImageUrl:
        'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoEAAMAAUAmJZwCdAEO+xCgAAD+82fzL09LLJQ6e5qsctnh9UAAAA==',
    },
    desc: 'This shade is as elegant as it is versatile',
    tags: [
      {
        title: 'Easy-to-clean',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/2iLCWbzwJZ84UBRzNVggM5/62ae6e75bc30f0af6a691ed60fa2314d/clean.svg?fm=webp',
      },
    ],
    accessoryUpsells: [
      {
        tag: {
          color: '#E5D5A0',
          title: "Designer's Pick",
        },
        price: 42,
        link: '/june-cushion/simply-grey-june-cushion',
        variantId: 'gid://shopify/ProductVariant/41828757438662',
        title: 'June',
        upsellTitle: 'Hand Woven Textured Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/4tHT6xHlMYYvCaiac84Q2t/0f8cc9f0536c23f8dc908e784f8d4032/June_SimplyGrey_top.jpg',
        },
      },
      {
        tag: {
          color: '#BDCFE3',
          title: 'Best Value',
        },
        price: 155,
        link: '/style-sets/keep-it-simple-style-set-bundle',
        variantId: 'gid://shopify/ProductVariant/41828790370502',
        title: 'Keep It Simple Set',
        upsellTitle: '3 Cushions, 1 Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/xz6fUVptGlntT7I93YEUN/1f2c0c297067fad9f210005e3c7de57b/Keep_it_Simple_StyleSet_Lead.jpg',
        },
      },
      {
        tag: {
          color: '#E5D5A0',
          title: "Designer's Pick",
        },
        price: 72,
        link: '/ferrier-throw/simply-grey-ferrier-throw',
        variantId: 'gid://shopify/ProductVariant/41828763533510',
        title: 'Ferrier',
        upsellTitle: 'Patterned Hand Woven Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/1qVMFvC6KNBvtKk0aqQKUG/90ad8f84c2324e6ae92fc86e3434725d/Ferrier__SimplyGrey_Top.jpg',
        },
      },
    ],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/7A6wTLLiWfyNVHFBxL7nTM/e364c001cbe938ec51e1630514836031/storm-grey.png?fm=webp',
    hex: '#818F96',
    title: 'Celeste',
    value: 'celeste',
    isLimited: false,
    blurImageUrl:
      'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoEAAIAAUAmJZwAAudFuiAA/upf/w8hceD+OsDE7WbZ0G0pBlk6b3BAAAA=',
  },
];

export const COMPARE_MISTRAL_COLOR_OPTIONS: Color[] = [
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/62IWxXqnGq7iKXAbxZ7O3d/cd7ae59629ece21dcb38903015a6fc2c/MISTRAL-Sandcastle.webp',
      alt: 'MISTRAL-Sandcastle',
      blurImageUrl:
        'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoEAAMAAUAmJZwCdAEO+xCgAAD+82fzL09LLJQ6e5qsctnh9UAAAA==',
    },
    desc: 'A beloved, versatile color. Perfect for a modern design.',
    tags: [],
    accessoryUpsells: [],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/7A6wTLLiWfyNVHFBxL7nTM/e364c001cbe938ec51e1630514836031/storm-grey.png?fm=webp',
    hex: '#DACAB8',
    title: 'Sandcastle',
    value: 'sandcastle',
    isLimited: false,
    blurImageUrl:
      'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoEAAIAAUAmJZwAAudFuiAA/upf/w8hceD+OsDE7WbZ0G0pBlk6b3BAAAA=',
  },
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/77DI43hl9XhRqxhgKIHL9D/286ac97ee45005622727f5de82361366/MISTRAL-CoolWater.webp',
      alt: 'MISTRAL-CoolWater',
      blurImageUrl:
        'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoEAAMAAUAmJZwCdAEO+xCgAAD+82fzL09LLJQ6e5qsctnh9UAAAA==',
    },
    desc: 'A beloved, versatile color. Perfect for a modern design.',
    tags: [],
    accessoryUpsells: [],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/7A6wTLLiWfyNVHFBxL7nTM/e364c001cbe938ec51e1630514836031/storm-grey.png?fm=webp',
    hex: '#39546F',
    title: 'Cool Water',
    value: 'coolwater',
    isLimited: false,
    blurImageUrl:
      'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoEAAIAAUAmJZwAAudFuiAA/upf/w8hceD+OsDE7WbZ0G0pBlk6b3BAAAA=',
  },
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/5B7NJ3ItsI5VMQcjIE1etZ/08a0d36c7ee7dc3979cd7b6ea9d80d2c/MISTRAL-SilverShade.webp',
      alt: 'MISTRAL-SilverShade',
      blurImageUrl:
        'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoEAAMAAUAmJZwCdAEO+xCgAAD+82fzL09LLJQ6e5qsctnh9UAAAA==',
    },
    desc: 'A beloved, versatile color. Perfect for a modern design.',
    tags: [],
    accessoryUpsells: [],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/7A6wTLLiWfyNVHFBxL7nTM/e364c001cbe938ec51e1630514836031/storm-grey.png?fm=webp',
    hex: '#CACACA',
    title: 'Silver Shade',
    value: 'silvershade',
    isLimited: false,
    blurImageUrl:
      'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoEAAIAAUAmJZwAAudFuiAA/upf/w8hceD+OsDE7WbZ0G0pBlk6b3BAAAA=',
  },
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/5FGosuIjmOiDKEpZskpRKn/fe68de51eaf39386e8af4f346d5bc96c/MISTRAL-Patio.webp',
      alt: 'MISTRAL-Patio',
      blurImageUrl:
        'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoEAAMAAUAmJZwCdAEO+xCgAAD+82fzL09LLJQ6e5qsctnh9UAAAA==',
    },
    desc: 'A beloved, versatile color. Perfect for a modern design.',
    tags: [],
    accessoryUpsells: [],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/7A6wTLLiWfyNVHFBxL7nTM/e364c001cbe938ec51e1630514836031/storm-grey.png?fm=webp',
    hex: '#5A5A5A',
    title: 'Patio',
    value: 'patio',
    isLimited: false,
    blurImageUrl:
      'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoEAAIAAUAmJZwAAudFuiAA/upf/w8hceD+OsDE7WbZ0G0pBlk6b3BAAAA=',
  },
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/42z2gE471Sxzxg1hjkFJMI/6290004e756760c5c305383fcbf65f63/MISTRAL-Shadow.webp',
      alt: 'MISTRAL-Shadow',
      blurImageUrl:
        'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoEAAMAAUAmJZwCdAEO+xCgAAD+82fzL09LLJQ6e5qsctnh9UAAAA==',
    },
    desc: 'A beloved, versatile color. Perfect for a modern design.',
    tags: [],
    accessoryUpsells: [],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/7A6wTLLiWfyNVHFBxL7nTM/e364c001cbe938ec51e1630514836031/storm-grey.png?fm=webp',
    hex: '#292B2D',
    title: 'Shadow',
    value: 'shadow',
    isLimited: false,
    blurImageUrl:
      'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoEAAIAAUAmJZwAAudFuiAA/upf/w8hceD+OsDE7WbZ0G0pBlk6b3BAAAA=',
  },
];

export const MISTRAL_COLOR_OPTIONS: Color[] = [
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/5B7NJ3ItsI5VMQcjIE1etZ/08a0d36c7ee7dc3979cd7b6ea9d80d2c/MISTRAL-SilverShade.webp',
      alt: 'MISTRAL-SilverShade',
      blurImageUrl:
        'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoEAAMAAUAmJZwCdAEO+xCgAAD+82fzL09LLJQ6e5qsctnh9UAAAA==',
    },
    desc: 'A beloved, versatile color. Perfect for a modern design.',
    tags: [],
    accessoryUpsells: [],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/7A6wTLLiWfyNVHFBxL7nTM/e364c001cbe938ec51e1630514836031/storm-grey.png?fm=webp',
    hex: '#CACACA',
    title: 'Silver Shade',
    value: 'silvershade',
    isLimited: false,
    blurImageUrl:
      'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoEAAIAAUAmJZwAAudFuiAA/upf/w8hceD+OsDE7WbZ0G0pBlk6b3BAAAA=',
  },
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/5FGosuIjmOiDKEpZskpRKn/fe68de51eaf39386e8af4f346d5bc96c/MISTRAL-Patio.webp',
      alt: 'MISTRAL-Patio',
      blurImageUrl:
        'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoEAAMAAUAmJZwCdAEO+xCgAAD+82fzL09LLJQ6e5qsctnh9UAAAA==',
    },
    desc: 'A beloved, versatile color. Perfect for a modern design.',
    tags: [],
    accessoryUpsells: [],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/7A6wTLLiWfyNVHFBxL7nTM/e364c001cbe938ec51e1630514836031/storm-grey.png?fm=webp',
    hex: '#5A5A5A',
    title: 'Patio',
    value: 'patio',
    isLimited: false,
    blurImageUrl:
      'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoEAAIAAUAmJZwAAudFuiAA/upf/w8hceD+OsDE7WbZ0G0pBlk6b3BAAAA=',
  },
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/42z2gE471Sxzxg1hjkFJMI/6290004e756760c5c305383fcbf65f63/MISTRAL-Shadow.webp',
      alt: 'MISTRAL-Shadow',
      blurImageUrl:
        'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoEAAMAAUAmJZwCdAEO+xCgAAD+82fzL09LLJQ6e5qsctnh9UAAAA==',
    },
    desc: 'A beloved, versatile color. Perfect for a modern design.',
    tags: [],
    accessoryUpsells: [],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/7A6wTLLiWfyNVHFBxL7nTM/e364c001cbe938ec51e1630514836031/storm-grey.png?fm=webp',
    hex: '#292B2D',
    title: 'Shadow',
    value: 'shadow',
    isLimited: false,
    blurImageUrl:
      'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoEAAIAAUAmJZwAAudFuiAA/upf/w8hceD+OsDE7WbZ0G0pBlk6b3BAAAA=',
  },
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/62IWxXqnGq7iKXAbxZ7O3d/cd7ae59629ece21dcb38903015a6fc2c/MISTRAL-Sandcastle.webp',
      alt: 'MISTRAL-Sandcastle',
      blurImageUrl:
        'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoEAAMAAUAmJZwCdAEO+xCgAAD+82fzL09LLJQ6e5qsctnh9UAAAA==',
    },
    desc: 'A beloved, versatile color. Perfect for a modern design.',
    tags: [],
    accessoryUpsells: [],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/7A6wTLLiWfyNVHFBxL7nTM/e364c001cbe938ec51e1630514836031/storm-grey.png?fm=webp',
    hex: '#DACAB8',
    title: 'Sandcastle',
    value: 'sandcastle',
    isLimited: false,
    blurImageUrl:
      'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoEAAIAAUAmJZwAAudFuiAA/upf/w8hceD+OsDE7WbZ0G0pBlk6b3BAAAA=',
  },
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/77DI43hl9XhRqxhgKIHL9D/286ac97ee45005622727f5de82361366/MISTRAL-CoolWater.webp',
      alt: 'MISTRAL-CoolWater',
      blurImageUrl:
        'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoEAAMAAUAmJZwCdAEO+xCgAAD+82fzL09LLJQ6e5qsctnh9UAAAA==',
    },
    desc: 'A beloved, versatile color. Perfect for a modern design.',
    tags: [],
    accessoryUpsells: [],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/7A6wTLLiWfyNVHFBxL7nTM/e364c001cbe938ec51e1630514836031/storm-grey.png?fm=webp',
    hex: '#39546F',
    title: 'Cool Water',
    value: 'coolwater',
    isLimited: false,
    blurImageUrl:
      'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoEAAIAAUAmJZwAAudFuiAA/upf/w8hceD+OsDE7WbZ0G0pBlk6b3BAAAA=',
  },
];

export const ATMOSPHERE_COLOR_OPTIONS: Color[] = [
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/5KtFYMibNo38wUiG6Gk26B/9633a6e0ccecf4877b096efb1cf5378f/ATMOS-smoke.webp',
      alt: 'ATMOS-smoke',
      blurImageUrl:
        'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoEAAMAAUAmJZwCdAEO+xCgAAD+82fzL09LLJQ6e5qsctnh9UAAAA==',
    },
    desc: 'A beloved, versatile color. Perfect for a modern design.',
    tags: [
      {
        title: 'Pet-friendly',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/4pUj1ErNAvJUAJflf1tMfv/d4f43f56558c9126ffef85219472bea5/pet.svg',
      },
      {
        title: 'Easy-to-clean',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/2iLCWbzwJZ84UBRzNVggM5/62ae6e75bc30f0af6a691ed60fa2314d/clean.svg',
      },
    ],
    accessoryUpsells: [
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 155,
        link: '/style-set/amber-glow-style-set',
        variantId: 'gid://shopify/ProductVariant/42422488268998',
        title: 'Amber Glow Style Set',
        upsellTitle: '3 Cushions, 1 Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/4tHT6xHlMYYvCaiac84Q2t/0f8cc9f0536c23f8dc908e784f8d4032/June_SimplyGrey_top.jpg',
        },
      },
      {
        tag: {
          color: '#2B2C6E',
          title: 'Most Popular',
        },
        price: 210,
        link: '/product/tables/stella-lift-top-table/table-oak-lift-top-stella-1',
        variantId: 'gid://shopify/ProductVariant/42440372158662',
        title: 'Stella Coffee Table - 1 Unit',
        upsellTitle: 'Stella Coffee Table - 1 Unit',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/3OqMCK1fNZ4iLlb9vPQzBq/536ea321537238c0a240f02f3ebf937b/1-unit.webp',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 155,
        link: '/product/accessories/style-set/keep-it-simple-style-set',
        variantId: 'gid://shopify/ProductVariant/41828790370502',
        title: 'Keep It Simple Set',
        upsellTitle: '3 Cushions, 1 Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/xz6fUVptGlntT7I93YEUN/1f2c0c297067fad9f210005e3c7de57b/Keep_it_Simple_StyleSet_Lead.jpg',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 65,
        link: '/product/accessories/traversin-cushion/charcoal-traversin-cushion',
        variantId: 'gid://shopify/ProductVariant/42210959622342',
        title: 'Traversin',
        upsellTitle: 'Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/4P4bY2ZZrRgkga9oFZAP8M/9731b1d803cd985c71ccb7349f7969e9/Charcoal_Traversin.jpg',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 35,
        link: '/product/accessories/lumbar-cushion/charcoal-lumbar-cushion',
        variantId: 'gid://shopify/ProductVariant/42210920923334',
        title: 'Lumbar',
        upsellTitle: 'Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/1fN7QyWQXLYDUOBt5sIfiO/d16d5f024b9c0b1782d0da26904e8f29/CharcoalLumbar.webp',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 35,
        link: '/product/modules/original-ottoman/charcoal-with-ottoman?legs=cozey-dark-oak',
        variantId: 'gid://shopify/ProductVariant/39498962239686',
        title: 'An ottoman',
        upsellTitle: 'Upgrade your sofa with',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/4fENG5UaFRuDL8Upj3AUBH/eb7af7fbd41ea279814766e63402c1a6/2_Single_shot_CHARCOAL_a4494017-ed73-4f17-b558-9a374e37aac1.png',
        },
      },
    ],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/7A6wTLLiWfyNVHFBxL7nTM/e364c001cbe938ec51e1630514836031/storm-grey.png?fm=webp',
    hex: '#717171',
    title: 'Smoke',
    value: 'smoke',
    isLimited: false,
    blurImageUrl:
      'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoEAAIAAUAmJZwAAudFuiAA/upf/w8hceD+OsDE7WbZ0G0pBlk6b3BAAAA=',
  },
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/2Ek5we9SIG5rlu0SAg4Sx/21333462a6fdd3f783d8c154716e93c2/ATMOS-silver.webp',
      alt: 'ATMOS-silver',
      blurImageUrl:
        'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoEAAMAAUAmJZwCdAEO+xCgAAD+82fzL09LLJQ6e5qsctnh9UAAAA==',
    },
    desc: 'A beloved, versatile color. Perfect for a modern design.',
    tags: [
      {
        title: 'Pet-friendly',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/4pUj1ErNAvJUAJflf1tMfv/d4f43f56558c9126ffef85219472bea5/pet.svg',
      },
      {
        title: 'Easy-to-clean',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/2iLCWbzwJZ84UBRzNVggM5/62ae6e75bc30f0af6a691ed60fa2314d/clean.svg',
      },
    ],
    accessoryUpsells: [
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 155,
        link: '/product/accessories/style-set/amber-glow-style-set',
        variantId: 'gid://shopify/ProductVariant/42422488268998',
        title: 'Amber Glow Set',
        upsellTitle: '3 Cushions, 1 Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/6GPTa6M81wQ81PTdEO4a5o/7bb640724535b5e41d29f53758b26159/1_AMBER_GLOW_SET__2_.jpg',
        },
      },
      {
        tag: {
          color: '#2B2C6E',
          title: 'Most Popular',
        },
        price: 210,
        link: '/product/tables/stella-lift-top-table/table-oak-lift-top-stella-1',
        variantId: 'gid://shopify/ProductVariant/42440372158662',
        title: 'Stella Coffee Table - 1 Unit',
        upsellTitle: 'Stella Coffee Table - 1 Unit',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/3OqMCK1fNZ4iLlb9vPQzBq/536ea321537238c0a240f02f3ebf937b/1-unit.webp',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 155,
        link: '/product/accessories/style-set/keep-it-simple-style-set',
        variantId: 'gid://shopify/ProductVariant/41828790370502',
        title: 'Keep It Simple Set',
        upsellTitle: '3 Cushions, 1 Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/xz6fUVptGlntT7I93YEUN/1f2c0c297067fad9f210005e3c7de57b/Keep_it_Simple_StyleSet_Lead.jpg',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 65,
        link: '/product/accessories/traversin-cushion/charcoal-traversin-cushion',
        variantId: 'gid://shopify/ProductVariant/42210959622342',
        title: 'Traversin',
        upsellTitle: 'Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/4P4bY2ZZrRgkga9oFZAP8M/9731b1d803cd985c71ccb7349f7969e9/Charcoal_Traversin.jpg',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 35,
        link: '/product/accessories/lumbar-cushion/charcoal-lumbar-cushion',
        variantId: 'gid://shopify/ProductVariant/42210920923334',
        title: 'Lumbar',
        upsellTitle: 'Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/1fN7QyWQXLYDUOBt5sIfiO/d16d5f024b9c0b1782d0da26904e8f29/CharcoalLumbar.webp',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 35,
        link: '/product/modules/original-ottoman/charcoal-with-ottoman?legs=cozey-dark-oak',
        variantId: 'gid://shopify/ProductVariant/39498962239686',
        title: 'An ottoman',
        upsellTitle: 'Upgrade your sofa with',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/4fENG5UaFRuDL8Upj3AUBH/eb7af7fbd41ea279814766e63402c1a6/2_Single_shot_CHARCOAL_a4494017-ed73-4f17-b558-9a374e37aac1.png',
        },
      },
    ],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/2Ek5we9SIG5rlu0SAg4Sx/21333462a6fdd3f783d8c154716e93c2/ATMOS-silver.webp',
    hex: '#BDBEC1',
    title: 'Silver',
    value: 'silver',
    isLimited: false,
    blurImageUrl:
      'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoEAAIAAUAmJZwAAudFuiAA/upf/w8hceD+OsDE7WbZ0G0pBlk6b3BAAAA=',
  },
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/zoDOKbTzQSIDF5FT4XdBk/67a3b52f9a493426c7d7c20fb6f8b1fd/ATMOS-desert.webp',
      alt: 'ATMOS-desert',
      blurImageUrl:
        'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoEAAMAAUAmJZwCdAEO+xCgAAD+82fzL09LLJQ6e5qsctnh9UAAAA==',
    },
    desc: 'A beloved, versatile color. Perfect for a modern design.',
    tags: [
      {
        title: 'Pet-friendly',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/4pUj1ErNAvJUAJflf1tMfv/d4f43f56558c9126ffef85219472bea5/pet.svg',
      },
      {
        title: 'Easy-to-clean',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/2iLCWbzwJZ84UBRzNVggM5/62ae6e75bc30f0af6a691ed60fa2314d/clean.svg',
      },
    ],
    accessoryUpsells: [
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 155,
        link: '/product/accessories/style-set/amber-glow-style-set',
        variantId: 'gid://shopify/ProductVariant/42422488268998',
        title: 'Amber Glow Set',
        upsellTitle: '3 Cushions, 1 Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/6GPTa6M81wQ81PTdEO4a5o/7bb640724535b5e41d29f53758b26159/1_AMBER_GLOW_SET__2_.jpg',
        },
      },
      {
        tag: {
          color: '#2B2C6E',
          title: 'Most Popular',
        },
        price: 210,
        link: '/product/tables/stella-lift-top-table/table-oak-lift-top-stella-1',
        variantId: 'gid://shopify/ProductVariant/42440372158662',
        title: 'Stella Coffee Table - 1 Unit',
        upsellTitle: 'Stella Coffee Table - 1 Unit',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/3OqMCK1fNZ4iLlb9vPQzBq/536ea321537238c0a240f02f3ebf937b/1-unit.webp',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 155,
        link: '/product/accessories/style-set/keep-it-simple-style-set',
        variantId: 'gid://shopify/ProductVariant/41828790370502',
        title: 'Keep It Simple Set',
        upsellTitle: '3 Cushions, 1 Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/xz6fUVptGlntT7I93YEUN/1f2c0c297067fad9f210005e3c7de57b/Keep_it_Simple_StyleSet_Lead.jpg',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 65,
        link: '/product/accessories/traversin-cushion/charcoal-traversin-cushion',
        variantId: 'gid://shopify/ProductVariant/42210959622342',
        title: 'Traversin',
        upsellTitle: 'Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/4P4bY2ZZrRgkga9oFZAP8M/9731b1d803cd985c71ccb7349f7969e9/Charcoal_Traversin.jpg',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 35,
        link: '/product/accessories/lumbar-cushion/charcoal-lumbar-cushion',
        variantId: 'gid://shopify/ProductVariant/42210920923334',
        title: 'Lumbar',
        upsellTitle: 'Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/1fN7QyWQXLYDUOBt5sIfiO/d16d5f024b9c0b1782d0da26904e8f29/CharcoalLumbar.webp',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 35,
        link: '/product/modules/original-ottoman/charcoal-with-ottoman?legs=cozey-dark-oak',
        variantId: 'gid://shopify/ProductVariant/39498962239686',
        title: 'An ottoman',
        upsellTitle: 'Upgrade your sofa with',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/4fENG5UaFRuDL8Upj3AUBH/eb7af7fbd41ea279814766e63402c1a6/2_Single_shot_CHARCOAL_a4494017-ed73-4f17-b558-9a374e37aac1.png',
        },
      },
    ],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/zoDOKbTzQSIDF5FT4XdBk/67a3b52f9a493426c7d7c20fb6f8b1fd/ATMOS-desert.webp',
    hex: '#8F7964',
    title: 'Desert',
    value: 'desert',
    isLimited: false,
    blurImageUrl:
      'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoEAAIAAUAmJZwAAudFuiAA/upf/w8hceD+OsDE7WbZ0G0pBlk6b3BAAAA=',
  },
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/4vejmhmUqdmR4R7xkkkfFL/2b6222f6205b5d590168c34926466693/ATMOS-copper.webp',
      alt: 'ATMOS-copper',
      blurImageUrl:
        'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoEAAMAAUAmJZwCdAEO+xCgAAD+82fzL09LLJQ6e5qsctnh9UAAAA==',
    },
    desc: 'A beloved, versatile color. Perfect for a modern design.',
    tags: [
      {
        title: 'Pet-friendly',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/4pUj1ErNAvJUAJflf1tMfv/d4f43f56558c9126ffef85219472bea5/pet.svg',
      },
      {
        title: 'Easy-to-clean',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/2iLCWbzwJZ84UBRzNVggM5/62ae6e75bc30f0af6a691ed60fa2314d/clean.svg',
      },
    ],
    accessoryUpsells: [
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 155,
        link: '/product/accessories/style-set/amber-glow-style-set',
        variantId: 'gid://shopify/ProductVariant/42422488268998',
        title: 'Amber Glow Set',
        upsellTitle: '3 Cushions, 1 Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/6GPTa6M81wQ81PTdEO4a5o/7bb640724535b5e41d29f53758b26159/1_AMBER_GLOW_SET__2_.jpg',
        },
      },
      {
        tag: {
          color: '#2B2C6E',
          title: 'Most Popular',
        },
        price: 210,
        link: '/product/tables/stella-lift-top-table/table-oak-lift-top-stella-1',
        variantId: 'gid://shopify/ProductVariant/42440372158662',
        title: 'Stella Coffee Table - 1 Unit',
        upsellTitle: 'Stella Coffee Table - 1 Unit',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/3OqMCK1fNZ4iLlb9vPQzBq/536ea321537238c0a240f02f3ebf937b/1-unit.webp',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 155,
        link: '/product/accessories/style-set/keep-it-simple-style-set',
        variantId: 'gid://shopify/ProductVariant/41828790370502',
        title: 'Keep It Simple Set',
        upsellTitle: '3 Cushions, 1 Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/xz6fUVptGlntT7I93YEUN/1f2c0c297067fad9f210005e3c7de57b/Keep_it_Simple_StyleSet_Lead.jpg',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 65,
        link: '/product/accessories/traversin-cushion/charcoal-traversin-cushion',
        variantId: 'gid://shopify/ProductVariant/42210959622342',
        title: 'Traversin',
        upsellTitle: 'Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/4P4bY2ZZrRgkga9oFZAP8M/9731b1d803cd985c71ccb7349f7969e9/Charcoal_Traversin.jpg',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 35,
        link: '/product/accessories/lumbar-cushion/charcoal-lumbar-cushion',
        variantId: 'gid://shopify/ProductVariant/42210920923334',
        title: 'Lumbar',
        upsellTitle: 'Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/1fN7QyWQXLYDUOBt5sIfiO/d16d5f024b9c0b1782d0da26904e8f29/CharcoalLumbar.webp',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 35,
        link: '/product/modules/original-ottoman/charcoal-with-ottoman?legs=cozey-dark-oak',
        variantId: 'gid://shopify/ProductVariant/39498962239686',
        title: 'An ottoman',
        upsellTitle: 'Upgrade your sofa with',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/4fENG5UaFRuDL8Upj3AUBH/eb7af7fbd41ea279814766e63402c1a6/2_Single_shot_CHARCOAL_a4494017-ed73-4f17-b558-9a374e37aac1.png',
        },
      },
    ],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/4vejmhmUqdmR4R7xkkkfFL/2b6222f6205b5d590168c34926466693/ATMOS-copper.webp',
    hex: '#B67137',
    title: 'Copper',
    value: 'copper',
    isLimited: false,
    blurImageUrl:
      'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoEAAIAAUAmJZwAAudFuiAA/upf/w8hceD+OsDE7WbZ0G0pBlk6b3BAAAA=',
  },
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/6MWnKCiDlPQ9oD3tniTIYv/8d6de76842b85534c70108d9381e20af/ATMOS-whitesand.webp',
      alt: 'ATMOS-whitesand',
      blurImageUrl:
        'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoEAAMAAUAmJZwCdAEO+xCgAAD+82fzL09LLJQ6e5qsctnh9UAAAA==',
    },
    desc: 'A beloved, versatile color. Perfect for a modern design.',
    tags: [
      {
        title: 'Pet-friendly',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/4pUj1ErNAvJUAJflf1tMfv/d4f43f56558c9126ffef85219472bea5/pet.svg',
      },
      {
        title: 'Easy-to-clean',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/2iLCWbzwJZ84UBRzNVggM5/62ae6e75bc30f0af6a691ed60fa2314d/clean.svg',
      },
    ],
    accessoryUpsells: [
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 155,
        link: '/product/accessories/style-set/amber-glow-style-set',
        variantId: 'gid://shopify/ProductVariant/42422488268998',
        title: 'Amber Glow Set',
        upsellTitle: '3 Cushions, 1 Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/6GPTa6M81wQ81PTdEO4a5o/7bb640724535b5e41d29f53758b26159/1_AMBER_GLOW_SET__2_.jpg',
        },
      },
      {
        tag: {
          color: '#2B2C6E',
          title: 'Most Popular',
        },
        price: 210,
        link: '/product/tables/stella-lift-top-table/table-oak-lift-top-stella-1',
        variantId: 'gid://shopify/ProductVariant/42440372158662',
        title: 'Stella Coffee Table - 1 Unit',
        upsellTitle: 'Stella Coffee Table - 1 Unit',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/3OqMCK1fNZ4iLlb9vPQzBq/536ea321537238c0a240f02f3ebf937b/1-unit.webp',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 155,
        link: '/product/accessories/style-set/keep-it-simple-style-set',
        variantId: 'gid://shopify/ProductVariant/41828790370502',
        title: 'Keep It Simple Set',
        upsellTitle: '3 Cushions, 1 Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/xz6fUVptGlntT7I93YEUN/1f2c0c297067fad9f210005e3c7de57b/Keep_it_Simple_StyleSet_Lead.jpg',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 65,
        link: '/product/accessories/traversin-cushion/charcoal-traversin-cushion',
        variantId: 'gid://shopify/ProductVariant/42210959622342',
        title: 'Traversin',
        upsellTitle: 'Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/4P4bY2ZZrRgkga9oFZAP8M/9731b1d803cd985c71ccb7349f7969e9/Charcoal_Traversin.jpg',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 35,
        link: '/product/accessories/lumbar-cushion/charcoal-lumbar-cushion',
        variantId: 'gid://shopify/ProductVariant/42210920923334',
        title: 'Lumbar',
        upsellTitle: 'Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/1fN7QyWQXLYDUOBt5sIfiO/d16d5f024b9c0b1782d0da26904e8f29/CharcoalLumbar.webp',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 35,
        link: '/product/modules/original-ottoman/charcoal-with-ottoman?legs=cozey-dark-oak',
        variantId: 'gid://shopify/ProductVariant/39498962239686',
        title: 'An ottoman',
        upsellTitle: 'Upgrade your sofa with',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/4fENG5UaFRuDL8Upj3AUBH/eb7af7fbd41ea279814766e63402c1a6/2_Single_shot_CHARCOAL_a4494017-ed73-4f17-b558-9a374e37aac1.png',
        },
      },
    ],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/6MWnKCiDlPQ9oD3tniTIYv/8d6de76842b85534c70108d9381e20af/ATMOS-whitesand.webp',
    hex: '#EDE5DB',
    title: 'White Sand',
    value: 'white-sand',
    isLimited: false,
    blurImageUrl:
      'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoEAAIAAUAmJZwAAudFuiAA/upf/w8hceD+OsDE7WbZ0G0pBlk6b3BAAAA=',
  },
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/3nGmVNdxMlqBOJyxPtyQVT/38f0db6d541a36e26d29d1726f49d448/ATMOS-wheat.webp',
      alt: 'ATMOS-wheat',
      blurImageUrl:
        'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoEAAMAAUAmJZwCdAEO+xCgAAD+82fzL09LLJQ6e5qsctnh9UAAAA==',
    },
    desc: 'Our most popular color. You’ll love it for its timelessness and practicality.  ',
    tags: [
      {
        title: 'Pet-friendly',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/4pUj1ErNAvJUAJflf1tMfv/d4f43f56558c9126ffef85219472bea5/pet.svg',
      },
      {
        title: 'Easy-to-clean',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/2iLCWbzwJZ84UBRzNVggM5/62ae6e75bc30f0af6a691ed60fa2314d/clean.svg',
      },
    ],
    accessoryUpsells: [
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 155,
        link: '/product/accessories/style-set/cloudscape-style-set',
        variantId: 'gid://shopify/ProductVariant/42422488236230',
        title: 'Cloudscape Set',
        upsellTitle: '3 Cushions, 1 Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/6GPTa6M81wQ81PTdEO4a5o/7bb640724535b5e41d29f53758b26159/1_AMBER_GLOW_SET__2_.jpg',
        },
      },
      {
        tag: {
          color: '#2B2C6E',
          title: 'Most Popular',
        },
        price: 210,
        link: '/product/tables/stella-lift-top-table/table-oak-lift-top-stella-1',
        variantId: 'gid://shopify/ProductVariant/42440372158662',
        title: 'Stella Coffee Table - 1 Unit',
        upsellTitle: 'Stella Coffee Table - 1 Unit',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/3OqMCK1fNZ4iLlb9vPQzBq/536ea321537238c0a240f02f3ebf937b/1-unit.webp',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 155,
        link: '/product/accessories/style-set/golden-glow-style-set',
        variantId: 'gid://shopify/ProductVariant/41824117162182',
        title: 'Golden Glow Set',
        upsellTitle: '3 Cushions, 1 Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/1DEwLy8GIe2J0KaP5hyCfn/98e96656a73f799d4fee25d38b0f500b/GoldenGlow_StyleSet_Lead.webp',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 65,
        link: '/product/accessories/traversin-cushion/dark-grey-traversin-cushion',
        variantId: 'gid://shopify/ProductVariant/42210959491270',
        title: 'Traversin',
        upsellTitle: 'Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/3yNXG4DXuoCg5GpI1RG1YU/1c33e26370ef5ac3ff115cf9808ef980/DarkGreyTraversin.jpg',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 35,
        link: '/product/accessories/lumbar-cushion/dark-grey-lumbar-cushion',
        variantId: 'gid://shopify/ProductVariant/42210920792262',
        title: 'Lumbar',
        upsellTitle: 'Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/5DSpN2Kjo63hY3t1gRkrZy/7dba85d2974fa9342ab57a9419fcbd23/DarkGreyLumbar1.png',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 35,
        link: '/product/modules/original-ottoman/dark-grey-with-ottoman?legs=cozey-dark-oak',
        variantId: 'gid://shopify/ProductVariant/31944588329062',
        title: 'An ottoman',
        upsellTitle: 'Upgrade your sofa with',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/4kAkBTqec8PDYKgD7JdL1q/162af1d8d1877de52290cba198b57f2d/2_Single_shot_DARK_GREY_72de9aef-b752-4d0b-857c-ae0e3f56569f.png',
        },
      },
    ],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/3nGmVNdxMlqBOJyxPtyQVT/38f0db6d541a36e26d29d1726f49d448/ATMOS-wheat.webp',
    hex: '#D0A05A',
    title: 'Wheat',
    value: 'wheat',
    isLimited: false,
    blurImageUrl:
      'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoEAAIAAUAmJZwAAudFuiAA/upf/w8hceD+OsDE7WbZ0G0pBlk6b3BAAAA=',
  },
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/3X30U27xJoZawtaSIjttwq/2c432ea86b32b8032142d5508fd49746/ATMOS-midnightblue.webp',
      alt: 'ATMOS-midnightblue',
      blurImageUrl:
        'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoEAAMAAUAmJZwCdAEO+xCgAAD+82fzL09LLJQ6e5qsctnh9UAAAA==',
    },
    desc: 'Our most popular color. You’ll love it for its timelessness and practicality.',
    tags: [
      {
        title: 'Pet-friendly',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/4pUj1ErNAvJUAJflf1tMfv/d4f43f56558c9126ffef85219472bea5/pet.svg',
      },
      {
        title: 'Easy-to-clean',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/2iLCWbzwJZ84UBRzNVggM5/62ae6e75bc30f0af6a691ed60fa2314d/clean.svg',
      },
    ],
    accessoryUpsells: [
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 155,
        link: '/product/accessories/style-set/cloudscape-style-set',
        variantId: 'gid://shopify/ProductVariant/42422488236230',
        title: 'Cloudscape Set',
        upsellTitle: '3 Cushions, 1 Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/5xT7mHrbbs4ltLOB5AtbEZ/73bc98e8077201d902f639c334411f9e/1_CLOUDSCAPE_SET.jpg',
        },
      },
      {
        tag: {
          color: '#2B2C6E',
          title: 'Most Popular',
        },
        price: 210,
        link: '/product/tables/stella-lift-top-table/table-oak-lift-top-stella-1',
        variantId: 'gid://shopify/ProductVariant/42440372158662',
        title: 'Stella Coffee Table - 1 Unit',
        upsellTitle: 'Stella Coffee Table - 1 Unit',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/3OqMCK1fNZ4iLlb9vPQzBq/536ea321537238c0a240f02f3ebf937b/1-unit.webp',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 155,
        link: '/product/accessories/style-set/golden-glow-style-set',
        variantId: 'gid://shopify/ProductVariant/41824117162182',
        title: 'Golden Glow Set',
        upsellTitle: '3 Cushions, 1 Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/1DEwLy8GIe2J0KaP5hyCfn/98e96656a73f799d4fee25d38b0f500b/GoldenGlow_StyleSet_Lead.webp',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 65,
        link: '/product/accessories/traversin-cushion/dark-grey-traversin-cushion',
        variantId: 'gid://shopify/ProductVariant/42210959491270',
        title: 'Traversin',
        upsellTitle: 'Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/3yNXG4DXuoCg5GpI1RG1YU/1c33e26370ef5ac3ff115cf9808ef980/DarkGreyTraversin.jpg',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 35,
        link: '/product/accessories/lumbar-cushion/dark-grey-lumbar-cushion',
        variantId: 'gid://shopify/ProductVariant/42210920792262',
        title: 'Lumbar',
        upsellTitle: 'Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/5DSpN2Kjo63hY3t1gRkrZy/7dba85d2974fa9342ab57a9419fcbd23/DarkGreyLumbar1.png',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 35,
        link: '/product/modules/original-ottoman/dark-grey-with-ottoman?legs=cozey-dark-oak',
        variantId: 'gid://shopify/ProductVariant/31944588329062',
        title: 'An ottoman',
        upsellTitle: 'Upgrade your sofa with',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/4kAkBTqec8PDYKgD7JdL1q/162af1d8d1877de52290cba198b57f2d/2_Single_shot_DARK_GREY_72de9aef-b752-4d0b-857c-ae0e3f56569f.png',
        },
      },
    ],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/3X30U27xJoZawtaSIjttwq/2c432ea86b32b8032142d5508fd49746/ATMOS-midnightblue.webp',
    hex: '#24436B',
    title: 'Midnight Blue',
    value: 'midnight',
    isLimited: false,
    blurImageUrl:
      'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoEAAIAAUAmJZwAAudFuiAA/upf/w8hceD+OsDE7WbZ0G0pBlk6b3BAAAA=',
  },
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/5EGg9ILL4qU8c0KkILfzBv/0d32678637fa2363f0dc72a5c0d749c9/ATMOS-coral.webp',
      alt: 'ATMOS-coral',
      blurImageUrl:
        'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoEAAMAAUAmJZwCdAEO+xCgAAD+82fzL09LLJQ6e5qsctnh9UAAAA==',
    },
    desc: 'A beloved, versatile color. Perfect for a modern design.',
    tags: [
      {
        title: 'Pet-friendly',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/4pUj1ErNAvJUAJflf1tMfv/d4f43f56558c9126ffef85219472bea5/pet.svg',
      },
      {
        title: 'Easy-to-clean',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/2iLCWbzwJZ84UBRzNVggM5/62ae6e75bc30f0af6a691ed60fa2314d/clean.svg',
      },
    ],
    accessoryUpsells: [
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 155,
        link: '/product/accessories/style-set/amber-glow-style-set',
        variantId: 'gid://shopify/ProductVariant/42422488268998',
        title: 'Amber Glow Set',
        upsellTitle: '3 Cushions, 1 Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/6GPTa6M81wQ81PTdEO4a5o/7bb640724535b5e41d29f53758b26159/1_AMBER_GLOW_SET__2_.jpg',
        },
      },
      {
        tag: {
          color: '#2B2C6E',
          title: 'Most Popular',
        },
        price: 210,
        link: '/product/tables/stella-lift-top-table/table-oak-lift-top-stella-1',
        variantId: 'gid://shopify/ProductVariant/42440372158662',
        title: 'Stella Coffee Table - 1 Unit',
        upsellTitle: 'Stella Coffee Table - 1 Unit',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/3OqMCK1fNZ4iLlb9vPQzBq/536ea321537238c0a240f02f3ebf937b/1-unit.webp',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 155,
        link: '/product/accessories/style-set/keep-it-simple-style-set',
        variantId: 'gid://shopify/ProductVariant/41828790370502',
        title: 'Keep It Simple Set',
        upsellTitle: '3 Cushions, 1 Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/xz6fUVptGlntT7I93YEUN/1f2c0c297067fad9f210005e3c7de57b/Keep_it_Simple_StyleSet_Lead.jpg',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 65,
        link: '/product/accessories/traversin-cushion/charcoal-traversin-cushion',
        variantId: 'gid://shopify/ProductVariant/42210959622342',
        title: 'Traversin',
        upsellTitle: 'Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/4P4bY2ZZrRgkga9oFZAP8M/9731b1d803cd985c71ccb7349f7969e9/Charcoal_Traversin.jpg',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 35,
        link: '/product/accessories/lumbar-cushion/charcoal-lumbar-cushion',
        variantId: 'gid://shopify/ProductVariant/42210920923334',
        title: 'Lumbar',
        upsellTitle: 'Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/1fN7QyWQXLYDUOBt5sIfiO/d16d5f024b9c0b1782d0da26904e8f29/CharcoalLumbar.webp',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 35,
        link: '/product/modules/original-ottoman/charcoal-with-ottoman?legs=cozey-dark-oak',
        variantId: 'gid://shopify/ProductVariant/39498962239686',
        title: 'An ottoman',
        upsellTitle: 'Upgrade your sofa with',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/4fENG5UaFRuDL8Upj3AUBH/eb7af7fbd41ea279814766e63402c1a6/2_Single_shot_CHARCOAL_a4494017-ed73-4f17-b558-9a374e37aac1.png',
        },
      },
    ],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/5EGg9ILL4qU8c0KkILfzBv/0d32678637fa2363f0dc72a5c0d749c9/ATMOS-coral.webp',
    hex: '#C39186',
    title: 'Coral',
    value: 'coral',
    isLimited: false,
    blurImageUrl:
      'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoEAAIAAUAmJZwAAudFuiAA/upf/w8hceD+OsDE7WbZ0G0pBlk6b3BAAAA=',
  },
  {
    swatchData: {
      url: 'https://images.ctfassets.net/z0vszzs4am30/7gAkIJnef39PDkpjz6eb1Y/ca1f876c94061e55878278d22310fc06/ATMOS-night.webp',
      alt: 'ATMOS-night',
      blurImageUrl:
        'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoEAAMAAUAmJZwCdAEO+xCgAAD+82fzL09LLJQ6e5qsctnh9UAAAA==',
    },
    desc: 'A beloved, versatile color. Perfect for a modern design.',
    tags: [
      {
        title: 'Pet-friendly',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/4pUj1ErNAvJUAJflf1tMfv/d4f43f56558c9126ffef85219472bea5/pet.svg',
      },
      {
        title: 'Easy-to-clean',
        icon: 'https://images.ctfassets.net/z0vszzs4am30/2iLCWbzwJZ84UBRzNVggM5/62ae6e75bc30f0af6a691ed60fa2314d/clean.svg',
      },
    ],
    accessoryUpsells: [
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 155,
        link: '/product/accessories/style-set/amber-glow-style-set',
        variantId: 'gid://shopify/ProductVariant/42422488268998',
        title: 'Amber Glow Set',
        upsellTitle: '3 Cushions, 1 Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/6GPTa6M81wQ81PTdEO4a5o/7bb640724535b5e41d29f53758b26159/1_AMBER_GLOW_SET__2_.jpg',
        },
      },
      {
        tag: {
          color: '#2B2C6E',
          title: 'Most Popular',
        },
        price: 210,
        link: '/product/tables/stella-lift-top-table/table-oak-lift-top-stella-1',
        variantId: 'gid://shopify/ProductVariant/42440372158662',
        title: 'Stella Coffee Table - 1 Unit',
        upsellTitle: 'Stella Coffee Table - 1 Unit',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/3OqMCK1fNZ4iLlb9vPQzBq/536ea321537238c0a240f02f3ebf937b/1-unit.webp',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 155,
        link: '/product/accessories/style-set/keep-it-simple-style-set',
        variantId: 'gid://shopify/ProductVariant/41828790370502',
        title: 'Keep It Simple Set',
        upsellTitle: '3 Cushions, 1 Throw',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/xz6fUVptGlntT7I93YEUN/1f2c0c297067fad9f210005e3c7de57b/Keep_it_Simple_StyleSet_Lead.jpg',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 65,
        link: '/product/accessories/traversin-cushion/charcoal-traversin-cushion',
        variantId: 'gid://shopify/ProductVariant/42210959622342',
        title: 'Traversin',
        upsellTitle: 'Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/4P4bY2ZZrRgkga9oFZAP8M/9731b1d803cd985c71ccb7349f7969e9/Charcoal_Traversin.jpg',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 35,
        link: '/product/accessories/lumbar-cushion/charcoal-lumbar-cushion',
        variantId: 'gid://shopify/ProductVariant/42210920923334',
        title: 'Lumbar',
        upsellTitle: 'Cushion',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/1fN7QyWQXLYDUOBt5sIfiO/d16d5f024b9c0b1782d0da26904e8f29/CharcoalLumbar.webp',
        },
      },
      {
        tag: {
          color: '#35614C',
          title: 'Best Value',
        },
        price: 35,
        link: '/product/modules/original-ottoman/charcoal-with-ottoman?legs=cozey-dark-oak',
        variantId: 'gid://shopify/ProductVariant/39498962239686',
        title: 'An ottoman',
        upsellTitle: 'Upgrade your sofa with',
        buttonText: 'Add to Cart',
        image: {
          url: 'https://images.ctfassets.net/z0vszzs4am30/4fENG5UaFRuDL8Upj3AUBH/eb7af7fbd41ea279814766e63402c1a6/2_Single_shot_CHARCOAL_a4494017-ed73-4f17-b558-9a374e37aac1.png',
        },
      },
    ],
    sofaUpsell: [],
    image:
      'https://images.ctfassets.net/z0vszzs4am30/7gAkIJnef39PDkpjz6eb1Y/ca1f876c94061e55878278d22310fc06/ATMOS-night.webp',
    hex: '#2F3840',
    title: 'Night',
    value: 'night',
    isLimited: false,
    blurImageUrl:
      'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoEAAIAAUAmJZwAAudFuiAA/upf/w8hceD+OsDE7WbZ0G0pBlk6b3BAAAA=',
  },
];

export const ORIGINAL_SOFA_SEATINGS: ProductConfig[] = [
  {
    title: '1 Seater',
    value: '1-seat',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/2KvYiuVfVc1Tpef4MO8avg/d045ac2d3adf25c3a8f2e2b82721ef5c/Armchair.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoEAAMAAUAmJagCdAEO9p5AAPKn2n3z//VmO2vkLWS3Mmk/8RiJ/8YGh/wK4LthdZOLlbAA',
    legsCombination: {
      regularLegs: 4,
      cornerLegs: 0,
      simpleLegs: 0,
    },
  },
  {
    title: '2 Seater',
    value: '2-seat',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/3lSAFvHDm6vXPgzDIA6Ukt/df309bf4e726277fa9429536c09a6717/Loveseat.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoEAAIAAUAmJZACdAEO+KiwAAD+75wtlPp1/8tZa/QlwgGHt/mb8KPk6pgmPRMAAAA=',
    legsCombination: {
      regularLegs: 6,
      cornerLegs: 0,
      simpleLegs: 0,
    },
  },
  {
    title: '3 Seater',
    value: '3-seat',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/1OdnXgCDHD1oqF1Huuenqo/3fc8aa67428f98e8ba1cbac0d5016e0a/3-Seater.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAADQAQCdASoEAAEAAUAmJYgCdAEO/gOOAADJJ//4WfKx/V352+79OUoQAAA=',
    legsCombination: {
      regularLegs: 8,
      cornerLegs: 0,
      simpleLegs: 0,
    },
  },
  {
    title: '4 Seater',
    value: '4-seat',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/31nLMmM3uKUm9heiE3zFH5/6425ae7922b44bcba2168857febb6c29/4-Seater.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAADQAQCdASoEAAEAAUAmJYgCdAEO+KeoAAD7aY/+BoGu/tT8rPd9EgjwAAA=',
    legsCombination: {
      regularLegs: 10,
      cornerLegs: 0,
      simpleLegs: 0,
    },
  },
];

export const CIELLO_SOFA_SEATINGS: ProductConfig[] = [
  {
    title: '1 Seater Ciello',
    value: '1-seater',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/2KvYiuVfVc1Tpef4MO8avg/d045ac2d3adf25c3a8f2e2b82721ef5c/Armchair.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoEAAMAAUAmJagCdAEO9p5AAPKn2n3z//VmO2vkLWS3Mmk/8RiJ/8YGh/wK4LthdZOLlbAA',
  },
  {
    title: '2 Seater Ciello',
    value: '2-seater',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/3lSAFvHDm6vXPgzDIA6Ukt/df309bf4e726277fa9429536c09a6717/Loveseat.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoEAAIAAUAmJZACdAEO+KiwAAD+75wtlPp1/8tZa/QlwgGHt/mb8KPk6pgmPRMAAAA=',
  },
  {
    title: '3 Seater Ciello',
    value: '3-seater',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/1OdnXgCDHD1oqF1Huuenqo/3fc8aa67428f98e8ba1cbac0d5016e0a/3-Seater.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAADQAQCdASoEAAEAAUAmJYgCdAEO/gOOAADJJ//4WfKx/V352+79OUoQAAA=',
  },
  {
    title: '4 Seater Ciello',
    value: '4-seater',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/31nLMmM3uKUm9heiE3zFH5/6425ae7922b44bcba2168857febb6c29/4-Seater.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAADQAQCdASoEAAEAAUAmJYgCdAEO+KeoAAD7aY/+BoGu/tT8rPd9EgjwAAA=',
  },
];

export const ATMOSPHERE_SOFA_SEATINGS: ProductConfig[] = [
  {
    title: 'Atmosphere 1 Seater Armless',
    value: '1-seater-arms-atmos-none',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/2KvYiuVfVc1Tpef4MO8avg/d045ac2d3adf25c3a8f2e2b82721ef5c/Armchair.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoEAAMAAUAmJagCdAEO9p5AAPKn2n3z//VmO2vkLWS3Mmk/8RiJ/8YGh/wK4LthdZOLlbAA',
  },
  {
    title: 'Atmosphere 1 Seater Corner',
    value: '1-seater-arms-atmos-left',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/2KvYiuVfVc1Tpef4MO8avg/d045ac2d3adf25c3a8f2e2b82721ef5c/Armchair.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoEAAMAAUAmJagCdAEO9p5AAPKn2n3z//VmO2vkLWS3Mmk/8RiJ/8YGh/wK4LthdZOLlbAA',
  },
  {
    title: 'Atmosphere 1 Seater Corner',
    value: '1-seater-arms-atmos-right',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/2KvYiuVfVc1Tpef4MO8avg/d045ac2d3adf25c3a8f2e2b82721ef5c/Armchair.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoEAAMAAUAmJagCdAEO9p5AAPKn2n3z//VmO2vkLWS3Mmk/8RiJ/8YGh/wK4LthdZOLlbAA',
  },
  {
    title: 'Atmosphere 1 Seater Corner',
    value: '1-seater-arms-atmos-2',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/2KvYiuVfVc1Tpef4MO8avg/d045ac2d3adf25c3a8f2e2b82721ef5c/Armchair.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoEAAMAAUAmJagCdAEO9p5AAPKn2n3z//VmO2vkLWS3Mmk/8RiJ/8YGh/wK4LthdZOLlbAA',
  },
  {
    title: 'Atmosphere 2 Seater Armless',
    value: '2-seater-arms-atmos-none',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/3lSAFvHDm6vXPgzDIA6Ukt/df309bf4e726277fa9429536c09a6717/Loveseat.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoEAAIAAUAmJZACdAEO+KiwAAD+75wtlPp1/8tZa/QlwgGHt/mb8KPk6pgmPRMAAAA=',
  },
  {
    title: 'Atmosphere 2 Seater 1 Arm Left',
    value: '2-seater-arms-atmos-left',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/3lSAFvHDm6vXPgzDIA6Ukt/df309bf4e726277fa9429536c09a6717/Loveseat.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoEAAIAAUAmJZACdAEO+KiwAAD+75wtlPp1/8tZa/QlwgGHt/mb8KPk6pgmPRMAAAA=',
  },
  {
    title: 'Atmosphere 2 Seater 1 Arm Right',
    value: '2-seater-arms-atmos-right',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/3lSAFvHDm6vXPgzDIA6Ukt/df309bf4e726277fa9429536c09a6717/Loveseat.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoEAAIAAUAmJZACdAEO+KiwAAD+75wtlPp1/8tZa/QlwgGHt/mb8KPk6pgmPRMAAAA=',
  },
  {
    title: 'Atmosphere 2 Seater 2 Arm',
    value: '2-seater-arms-atmos-2',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/3lSAFvHDm6vXPgzDIA6Ukt/df309bf4e726277fa9429536c09a6717/Loveseat.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoEAAIAAUAmJZACdAEO+KiwAAD+75wtlPp1/8tZa/QlwgGHt/mb8KPk6pgmPRMAAAA=',
  },
  {
    title: 'Atmosphere 3 Seater Armless',
    value: '3-seater-arms-atmos-none',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/1OdnXgCDHD1oqF1Huuenqo/3fc8aa67428f98e8ba1cbac0d5016e0a/3-Seater.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAADQAQCdASoEAAEAAUAmJYgCdAEO/gOOAADJJ//4WfKx/V352+79OUoQAAA=',
  },
  {
    title: 'Atmosphere 3 Seater 1 Arm Left',
    value: '3-seater-arms-atmos-left',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/1OdnXgCDHD1oqF1Huuenqo/3fc8aa67428f98e8ba1cbac0d5016e0a/3-Seater.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAADQAQCdASoEAAEAAUAmJYgCdAEO/gOOAADJJ//4WfKx/V352+79OUoQAAA=',
  },
  {
    title: 'Atmosphere 3 Seater 1 Arm Right',
    value: '3-seater-arms-atmos-right',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/1OdnXgCDHD1oqF1Huuenqo/3fc8aa67428f98e8ba1cbac0d5016e0a/3-Seater.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAADQAQCdASoEAAEAAUAmJYgCdAEO/gOOAADJJ//4WfKx/V352+79OUoQAAA=',
  },
  {
    title: 'Atmosphere 3 Seater 2 Arm',
    value: '3-seater-arms-atmos-2',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/1OdnXgCDHD1oqF1Huuenqo/3fc8aa67428f98e8ba1cbac0d5016e0a/3-Seater.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAADQAQCdASoEAAEAAUAmJYgCdAEO/gOOAADJJ//4WfKx/V352+79OUoQAAA=',
  },
  {
    title: 'Atmosphere 4 Seater 1 Arm Left',
    value: '4-seater-arms-atmos-left',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/31nLMmM3uKUm9heiE3zFH5/6425ae7922b44bcba2168857febb6c29/4-Seater.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAADQAQCdASoEAAEAAUAmJYgCdAEO/gOOAADJJ//4WfKx/V352+79OUoQAAA=',
  },
  {
    title: 'Atmosphere 4 Seater 2 Arm',
    value: '4-seater-arms-atmos-2',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/31nLMmM3uKUm9heiE3zFH5/6425ae7922b44bcba2168857febb6c29/4-Seater.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAADQAQCdASoEAAEAAUAmJYgCdAEO/gOOAADJJ//4WfKx/V352+79OUoQAAA=',
  },
  {
    title: 'Atmosphere 4 Seater Armless',
    value: '4-seater-arms-atmos-none',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/31nLMmM3uKUm9heiE3zFH5/6425ae7922b44bcba2168857febb6c29/4-Seater.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAADQAQCdASoEAAEAAUAmJYgCdAEO/gOOAADJJ//4WfKx/V352+79OUoQAAA=',
  },
  {
    title: 'Atmosphere 4 Seater 1 Arm Right',
    value: '4-seater-arms-atmos-right',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/31nLMmM3uKUm9heiE3zFH5/6425ae7922b44bcba2168857febb6c29/4-Seater.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAADQAQCdASoEAAEAAUAmJYgCdAEO/gOOAADJJ//4WfKx/V352+79OUoQAAA=',
  },
];

export const ORIGINAL_ARMS: ProductConfig[] = [
  {
    title: 'Cozey Slope Arms',
    value: 'arms-normal',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/59rBHUr6HEIouamkJsmymr/309a7aa8a66bc7383cdf5031cdefa289/Slope_Arms.png?fm=webp',
    blurImageUrl:
      'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoEAAMAAUAmJQBOgCHfwHHAAOIH/96OCb/8rRfH/sB6H/g43WVjif8HJintdHMAAAA=',
  },
  {
    title: 'Cozey Bloc Arms',
    value: 'arms-bloc',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/1fsgaM3bxNriR0HimELZhS/070b927184e1906a967b1b5b97a701ef/Block_Arms.png?fm=webp',
    blurImageUrl:
      'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoEAAMAAUAmJQBOgCHfFP7AAN5n/90cE3/5Wi+P+iDcf8HG6j323/ByYn2UNF5eAAA=',
  },
];

export const ATMOSPHERE_ARMS: ProductConfig[] = [
  {
    title: 'Cozey Bloc Arms',
    value: 'arms-bloc',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/1wrlOeccV9wABPPFUTbA6N/b81326b80bd152a21b794f44dbbc526d/rectangle-arm-shape.svg?fm=webp',
    blurImageUrl:
      'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoEAAMAAUAmJQBOgCHfFP7AAN5n/90cE3/5Wi+P+iDcf8HG6j323/ByYn2UNF5eAAA=',
  },
];

export const SECTIONAL_SEATINGS: ProductConfig[] = [
  {
    title: '3 Seater With Corner R',
    value: '3-seater-with-corner-r',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/6q59hSqBp3zPWX0bz2pJP2/40235e00d392a64e9a031c5bdfad85d6/3_1_Right_Corner.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoEAAMAAUAmJZgCdAEO+mGsAADOP/0Pmtxf/ExzORRVRG30QOCnso62/rB/HA+PfiD1BNfuKLHwAA==',
    legsCombination: {
      regularLegs: 8,
      cornerLegs: 2,
      simpleLegs: 0,
    },
  },
  {
    title: '4 Seater With Corner',
    value: '4-seater-with-corner',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/606KxdkGJnYQmplCGm93Wj/cb70a929e3d0c2160f14bdae75f6885d/3x3_Corner.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoEAAQAAUAmJaAC7AEO/gOOAAD9A9odFvu/JPwZziwblC46t2Av+zVtb8Ln9qP4advuKxxAAAA=',
    legsCombination: {
      regularLegs: 10,
      cornerLegs: 2,
      simpleLegs: 0,
    },
  },
  {
    title: '5 Seater With Corner R',
    value: '5-seater-with-corner-r',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/cRROAAEKUl9DsLhYrhNVE/728f9fed44d7cc6a5c7ac33df096b75d/4x3_Right_Corner.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAACQAQCdASoEAAMAAUAmJYgAAudGFnQA/k/+08xfkP8Gv+DTysBrFz8P9KBvJEVf/yNbXPcgt8ZVvtXiXV4WEAAA',
    legsCombination: {
      regularLegs: 12,
      cornerLegs: 2,
      simpleLegs: 0,
    },
  },
  {
    title: '6 Seater With Corner',
    value: '6-seater-with-corner',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/6GUxN9BggOWD3EyemoB88H/d221e898acbd07992e4fbb92a23012b6/4x4_Corner.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoEAAQAAUAmJZgCdAEO+KeoAAD+0r+0+IP7td4/xMajG2CLbkxDVP3/KssL+oI+dfpdGPbrUiaAAA==',
    legsCombination: {
      regularLegs: 14,
      cornerLegs: 2,
      simpleLegs: 0,
    },
  },
  {
    title: '6 Seater "U"',
    value: '6-seater-with-2-corner',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/5oLTrUd7ut7AvIUhZQPeAv/0b662bf6d4a0989ddb63775363568098/3x4x3_U-Sectional.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoEAAMAAUAmJZAAAudLlqcAAP63davDN/7Dpq32//Cf7zig4HzIx//8R351/G6CEsAAAA==',
    legsCombination: {
      regularLegs: 14,
      cornerLegs: 4,
      simpleLegs: 0,
    },
  },
  {
    title: '7 Seater "U"',
    value: '7-seater-with-2-corner',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/3BPP8ivm85akWjrtrrfz2a/5877a46685744d583822a1ffbab0a52d/3x5x3_U-Sectional.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACQAQCdASoEAAMAAUAmJZAAAudLLQAA4n9Wod+P/2DT/7LB16XlmY6Oqfv/7QAEvO34Bnf7AAA=',
    legsCombination: {
      regularLegs: 16,
      cornerLegs: 4,
      simpleLegs: 0,
    },
  },
  {
    title: '3 Seater With Corner L',
    value: '3-seater-with-corner-l',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/4EBuX5KfEla3ejJlzDEjWe/34ef357a395142c056975dad07369a1c/1_3_Left_Corner.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAACQAQCdASoEAAMAAUAmJYwAAudZtgAAzj/8ObKcx/xi+ArDTwB+J72Z03+qYxN7n6OMkSUb449UPsAAAAA=',
    legsCombination: {
      regularLegs: 8,
      cornerLegs: 2,
      simpleLegs: 0,
    },
  },
  {
    title: '5 Seater With Corner L',
    value: '5-seater-with-corner-l',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/1lqICut4wekyqPUF1K8VWV/03effcc35372e1d13c70dba6865f0632/3x4_Left_Corner.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAACQAQCdASoEAAMAAUAmJYwAAudRuOAA/q3+ufG34H/DX/jt8AHBtEeNfyO2P+AylTe5+jjJEl/Q42//wuAAAA==',
    legsCombination: {
      regularLegs: 12,
      cornerLegs: 2,
      simpleLegs: 0,
    },
  },
];

export const ATMOSPHERE_SECTIONAL_SEATINGS: ProductConfig[] = [
  {
    title: '3 Seater With Corner L Arm L',
    value: '3-seater-with-corner-l-arms-atmos-left',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/4EBuX5KfEla3ejJlzDEjWe/34ef357a395142c056975dad07369a1c/1_3_Left_Corner.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoEAAMAAUAmJZgCdAEO+mGsAADOP/0Pmtxf/ExzORRVRG30QOCnso62/rB/HA+PfiD1BNfuKLHwAA==',
  },
  {
    title: '3 Seater With Corner L Arm R',
    value: '3-seater-with-corner-l-arms-atmos-right',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/4EBuX5KfEla3ejJlzDEjWe/34ef357a395142c056975dad07369a1c/1_3_Left_Corner.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoEAAMAAUAmJZgCdAEO+mGsAADOP/0Pmtxf/ExzORRVRG30QOCnso62/rB/HA+PfiD1BNfuKLHwAA==',
  },
  {
    title: '3 Seater With Corner L Arm',
    value: '3-seater-with-corner-l-arms-atmos-2',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/4EBuX5KfEla3ejJlzDEjWe/34ef357a395142c056975dad07369a1c/1_3_Left_Corner.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoEAAMAAUAmJZgCdAEO+mGsAADOP/0Pmtxf/ExzORRVRG30QOCnso62/rB/HA+PfiD1BNfuKLHwAA==',
  },
  {
    title: '3 Seater With Corner L Armless',
    value: '3-seater-with-corner-l-arms-atmos-none',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/4EBuX5KfEla3ejJlzDEjWe/34ef357a395142c056975dad07369a1c/1_3_Left_Corner.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoEAAMAAUAmJZgCdAEO+mGsAADOP/0Pmtxf/ExzORRVRG30QOCnso62/rB/HA+PfiD1BNfuKLHwAA==',
  },
  {
    title: '3 Seater With Corner R Arm L',
    value: '3-seater-with-corner-r-arms-atmos-left',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/6q59hSqBp3zPWX0bz2pJP2/40235e00d392a64e9a031c5bdfad85d6/3_1_Right_Corner.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoEAAMAAUAmJZgCdAEO+mGsAADOP/0Pmtxf/ExzORRVRG30QOCnso62/rB/HA+PfiD1BNfuKLHwAA==',
  },
  {
    title: '3 Seater With Corner R Arm R',
    value: '3-seater-with-corner-r-arms-atmos-right',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/6q59hSqBp3zPWX0bz2pJP2/40235e00d392a64e9a031c5bdfad85d6/3_1_Right_Corner.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoEAAMAAUAmJZgCdAEO+mGsAADOP/0Pmtxf/ExzORRVRG30QOCnso62/rB/HA+PfiD1BNfuKLHwAA==',
  },
  {
    title: '3 Seater With Corner R Arm',
    value: '3-seater-with-corner-r-arms-atmos-2',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/6q59hSqBp3zPWX0bz2pJP2/40235e00d392a64e9a031c5bdfad85d6/3_1_Right_Corner.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoEAAMAAUAmJZgCdAEO+mGsAADOP/0Pmtxf/ExzORRVRG30QOCnso62/rB/HA+PfiD1BNfuKLHwAA==',
  },
  {
    title: '3 Seater With Corner R Armless',
    value: '3-seater-with-corner-r-arms-atmos-none',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/6q59hSqBp3zPWX0bz2pJP2/40235e00d392a64e9a031c5bdfad85d6/3_1_Right_Corner.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoEAAMAAUAmJZgCdAEO+mGsAADOP/0Pmtxf/ExzORRVRG30QOCnso62/rB/HA+PfiD1BNfuKLHwAA==',
  },
  {
    title: '4 Seater With Corner L Arm L',
    value: '4-seater-with-corner-arms-atmos-left',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/606KxdkGJnYQmplCGm93Wj/cb70a929e3d0c2160f14bdae75f6885d/3x3_Corner.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoEAAMAAUAmJZgCdAEO+mGsAADOP/0Pmtxf/ExzORRVRG30QOCnso62/rB/HA+PfiD1BNfuKLHwAA==',
  },
  {
    title: '4 Seater With Corner R Arm R',
    value: '4-seater-with-corner-r-arms-atmos-right',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/606KxdkGJnYQmplCGm93Wj/cb70a929e3d0c2160f14bdae75f6885d/3x3_Corner.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoEAAMAAUAmJZgCdAEO+mGsAADOP/0Pmtxf/ExzORRVRG30QOCnso62/rB/HA+PfiD1BNfuKLHwAA==',
  },
  {
    title: '4 Seater With Corner Armless',
    value: '4-seater-with-corner-arms-atmos-none',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/606KxdkGJnYQmplCGm93Wj/cb70a929e3d0c2160f14bdae75f6885d/3x3_Corner.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoEAAMAAUAmJZgCdAEO+mGsAADOP/0Pmtxf/ExzORRVRG30QOCnso62/rB/HA+PfiD1BNfuKLHwAA==',
  },
  {
    title: '4 Seater With Corner L Arm',
    value: '4-seater-with-corner-l-arms-atmos-2',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/606KxdkGJnYQmplCGm93Wj/cb70a929e3d0c2160f14bdae75f6885d/3x3_Corner.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoEAAMAAUAmJZgCdAEO+mGsAADOP/0Pmtxf/ExzORRVRG30QOCnso62/rB/HA+PfiD1BNfuKLHwAA==',
  },
  {
    title: '5 Seater With Corner L Arm L',
    value: '5-seater-with-corner-l-arms-atmos-left',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/1lqICut4wekyqPUF1K8VWV/03effcc35372e1d13c70dba6865f0632/3x4_Left_Corner.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAACQAQCdASoEAAMAAUAmJYgAAudGFnQA/k/+08xfkP8Gv+DTysBrFz8P9KBvJEVf/yNbXPcgt8ZVvtXiXV4WEAAA',
  },
  {
    title: '5 Seater With Corner L Arm R',
    value: '5-seater-with-corner-l-arms-atmos-right',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/1lqICut4wekyqPUF1K8VWV/03effcc35372e1d13c70dba6865f0632/3x4_Left_Corner.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAACQAQCdASoEAAMAAUAmJYgAAudGFnQA/k/+08xfkP8Gv+DTysBrFz8P9KBvJEVf/yNbXPcgt8ZVvtXiXV4WEAAA',
  },
  {
    title: '5 Seater With Corner L Arm',
    value: '5-seater-with-corner-l-arms-atmos-2',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/1lqICut4wekyqPUF1K8VWV/03effcc35372e1d13c70dba6865f0632/3x4_Left_Corner.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAACQAQCdASoEAAMAAUAmJYgAAudGFnQA/k/+08xfkP8Gv+DTysBrFz8P9KBvJEVf/yNbXPcgt8ZVvtXiXV4WEAAA',
  },
  {
    title: '5 Seater With Corner L Armless',
    value: '5-seater-with-corner-l-arms-atmos-none',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/1lqICut4wekyqPUF1K8VWV/03effcc35372e1d13c70dba6865f0632/3x4_Left_Corner.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAACQAQCdASoEAAMAAUAmJYgAAudGFnQA/k/+08xfkP8Gv+DTysBrFz8P9KBvJEVf/yNbXPcgt8ZVvtXiXV4WEAAA',
  },
  {
    title: '5 Seater With Corner R Arm L',
    value: '5-seater-with-corner-r-arms-atmos-left',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/cRROAAEKUl9DsLhYrhNVE/728f9fed44d7cc6a5c7ac33df096b75d/4x3_Right_Corner.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAACQAQCdASoEAAMAAUAmJYgAAudGFnQA/k/+08xfkP8Gv+DTysBrFz8P9KBvJEVf/yNbXPcgt8ZVvtXiXV4WEAAA',
  },
  {
    title: '5 Seater With Corner R Arm R',
    value: '5-seater-with-corner-r-arms-atmos-right',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/cRROAAEKUl9DsLhYrhNVE/728f9fed44d7cc6a5c7ac33df096b75d/4x3_Right_Corner.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAACQAQCdASoEAAMAAUAmJYgAAudGFnQA/k/+08xfkP8Gv+DTysBrFz8P9KBvJEVf/yNbXPcgt8ZVvtXiXV4WEAAA',
  },
  {
    title: '5 Seater With Corner R Arm',
    value: '5-seater-with-corner-r-arms-atmos-2',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/cRROAAEKUl9DsLhYrhNVE/728f9fed44d7cc6a5c7ac33df096b75d/4x3_Right_Corner.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAACQAQCdASoEAAMAAUAmJYgAAudGFnQA/k/+08xfkP8Gv+DTysBrFz8P9KBvJEVf/yNbXPcgt8ZVvtXiXV4WEAAA',
  },
  {
    title: '5 Seater With Corner R Armless',
    value: '5-seater-with-corner-r-arms-atmos-none',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/cRROAAEKUl9DsLhYrhNVE/728f9fed44d7cc6a5c7ac33df096b75d/4x3_Right_Corner.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAACQAQCdASoEAAMAAUAmJYgAAudGFnQA/k/+08xfkP8Gv+DTysBrFz8P9KBvJEVf/yNbXPcgt8ZVvtXiXV4WEAAA',
  },
  {
    title: '6 Seater With Corner R Arm L',
    value: '6-seater-with-corner-r-arms-atmos-left',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/6GUxN9BggOWD3EyemoB88H/d221e898acbd07992e4fbb92a23012b6/4x4_Corner.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoEAAQAAUAmJZgCdAEO+KeoAAD+0r+0+IP7td4/xMajG2CLbkxDVP3/KssL+oI+dfpdGPbrUiaAAA==',
  },
  {
    title: '6 Seater With Corner R Arm',
    value: '6-seater-with-corner-r-arms-atmos-2',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/6GUxN9BggOWD3EyemoB88H/d221e898acbd07992e4fbb92a23012b6/4x4_Corner.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoEAAQAAUAmJZgCdAEO+KeoAAD+0r+0+IP7td4/xMajG2CLbkxDVP3/KssL+oI+dfpdGPbrUiaAAA==',
  },
  {
    title: '6 Seater With Corner R Armless',
    value: '6-seater-with-corner-r-arms-atmos-none',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/6GUxN9BggOWD3EyemoB88H/d221e898acbd07992e4fbb92a23012b6/4x4_Corner.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoEAAQAAUAmJZgCdAEO+KeoAAD+0r+0+IP7td4/xMajG2CLbkxDVP3/KssL+oI+dfpdGPbrUiaAAA==',
  },
  {
    title: '6 Seater With Corner L Arm R',
    value: '6-seater-with-corner-l-arms-atmos-right',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/6GUxN9BggOWD3EyemoB88H/d221e898acbd07992e4fbb92a23012b6/4x4_Corner.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoEAAQAAUAmJZgCdAEO+KeoAAD+0r+0+IP7td4/xMajG2CLbkxDVP3/KssL+oI+dfpdGPbrUiaAAA==',
  },
  {
    title: '6 Seater "U" Arm L',
    value: '6-seater-with-2-corner-arms-atmos-left',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/5oLTrUd7ut7AvIUhZQPeAv/0b662bf6d4a0989ddb63775363568098/3x4x3_U-Sectional.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoEAAMAAUAmJZAAAudLlqcAAP63davDN/7Dpq32//Cf7zig4HzIx//8R351/G6CEsAAAA==',
  },
  {
    title: '6 Seater "U" Arm R',
    value: '6-seater-with-2-corner-arms-atmos-right',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/5oLTrUd7ut7AvIUhZQPeAv/0b662bf6d4a0989ddb63775363568098/3x4x3_U-Sectional.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoEAAMAAUAmJZAAAudLlqcAAP63davDN/7Dpq32//Cf7zig4HzIx//8R351/G6CEsAAAA==',
  },
  {
    title: '6 Seater "U" Arm',
    value: '6-seater-with-2-corner-arms-atmos-2',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/5oLTrUd7ut7AvIUhZQPeAv/0b662bf6d4a0989ddb63775363568098/3x4x3_U-Sectional.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoEAAMAAUAmJZAAAudLlqcAAP63davDN/7Dpq32//Cf7zig4HzIx//8R351/G6CEsAAAA==',
  },
  {
    title: '6 Seater "U"',
    value: '6-seater-with-2-corner-arms-atmos-none',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/5oLTrUd7ut7AvIUhZQPeAv/0b662bf6d4a0989ddb63775363568098/3x4x3_U-Sectional.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoEAAMAAUAmJZAAAudLlqcAAP63davDN/7Dpq32//Cf7zig4HzIx//8R351/G6CEsAAAA==',
  },
  {
    title: '7 Seater "U" Arm L',
    value: '7-seater-with-2-corner-arms-atmos-left',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/3BPP8ivm85akWjrtrrfz2a/5877a46685744d583822a1ffbab0a52d/3x5x3_U-Sectional.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACQAQCdASoEAAMAAUAmJZAAAudLLQAA4n9Wod+P/2DT/7LB16XlmY6Oqfv/7QAEvO34Bnf7AAA=',
  },
  {
    title: '7 Seater "U" Arm L',
    value: '7-seater-with-2-corner-arms-atmos-right',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/3BPP8ivm85akWjrtrrfz2a/5877a46685744d583822a1ffbab0a52d/3x5x3_U-Sectional.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACQAQCdASoEAAMAAUAmJZAAAudLLQAA4n9Wod+P/2DT/7LB16XlmY6Oqfv/7QAEvO34Bnf7AAA=',
  },
  {
    title: '7 Seater "U" Arm',
    value: '7-seater-with-2-corner-arms-atmos-2',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/3BPP8ivm85akWjrtrrfz2a/5877a46685744d583822a1ffbab0a52d/3x5x3_U-Sectional.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACQAQCdASoEAAMAAUAmJZAAAudLLQAA4n9Wod+P/2DT/7LB16XlmY6Oqfv/7QAEvO34Bnf7AAA=',
  },
  {
    title: '7 Seater "U"',
    value: '7-seater-with-2-corner-arms-atmos-none',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/3BPP8ivm85akWjrtrrfz2a/5877a46685744d583822a1ffbab0a52d/3x5x3_U-Sectional.png?fm=webp',
    description: '',
    blurImageUrl:
      'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACQAQCdASoEAAMAAUAmJZAAAudLLQAA4n9Wod+P/2DT/7LB16XlmY6Oqfv/7QAEvO34Bnf7AAA=',
  },
];

export const UPSELLS: ProductConfig[] = [
  {
    title: 'Cozey Ottoman',
    value: 'with-ottoman',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/4HC0nQTlP2MTLgbfN4eLJN/e15d43004330b2fe1713eb9170c279c0/Ottoman.png?fm=webp',
    blurImageUrl:
      'data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAACwAQCdASoEAAMAAUAmJbACdAEO/gLsAP5P3z8+6y5s5umBVKY/gA34PHeP/jT/59QR/Ar9++peUK0wEAA=',
    legsCombination: {
      regularLegs: 0,
      cornerLegs: 0,
      simpleLegs: 4,
    },
  },
  {
    title: 'Cozey Left Chaise',
    value: 'with-chaise-left',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/12H0MqUFVw4vkKuDtTX1G0/b306c79d70e46fcd5d8b7807fc7344c1/Chaise_Left.png?fm=webp',
    blurImageUrl:
      'data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAACwAQCdASoEAAIAAUAmJagCdAEO9p5AAP0DuOw+6v+ov/q5TPaDz4Z+34gY678aP/iHP8Cv9K2j60iCAAA=',
    legsCombination: {
      regularLegs: 2,
      cornerLegs: 0,
      simpleLegs: 2,
    },
  },
  {
    title: 'Cozey Chaise',
    value: 'with-chaise',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/5xmgqPJJevUIqiX5OorisU/62c80a2d6372032045507b46a6fdb271/Chaise_Right.svg',
    blurImageUrl:
      'data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoEAAIAAUAmJZgCdAEO/gPIAAD+nDF8d6Yf6i/+3uMemyho4HPmrQy8OIG3/uD9Qf4goyQfFfAAAA==',
    legsCombination: {
      regularLegs: 2,
      cornerLegs: 0,
      simpleLegs: 2,
    },
  },
  {
    title: 'Cozey 2 Chaises',
    value: 'with-2-chaise',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/1SMQvZ17H3YObzSQNTHZcf/717c767b64f24f0b87308b5d645e97f9/Chaise_Double.svg',
    blurImageUrl:
      'data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoEAAIAAUAmJagCdAEO+LoIAAD++6Ap2d/iC+VDHfPwpTVCRZX/xvH+u7+3fj3jFh4eQAAA',
    legsCombination: {
      regularLegs: 4,
      cornerLegs: 0,
      simpleLegs: 4,
    },
  },
];

export const UPGRADES = [
  {
    title: 'Traversin',
    handle: 'traversin',
  },
  {
    title: 'Lumbar',
    handle: 'lumbar',
  },
];

export const COLLECTIONS_OPTIONS: ProductConfig[] = [
  {
    title: 'Original',
    value: 'original',
    icon: '',
    description: '',
  },
  {
    title: 'Ciello',
    value: 'ciello',
    icon: '',
    description: '',
  },
  {
    title: 'Atmosphere',
    value: 'atmosphere',
    icon: '',
    description: '',
  },
  {
    title: 'Mistral',
    value: 'mistral',
    icon: '',
    description: '',
  },
];

export const ACCESSORY_COLLECTIONS_OPTIONS: ProductConfig[] = [
  {
    title: 'Cushions',
    value: 'cushion',
    icon: '',
    description: '',
  },
  {
    title: 'Throws',
    value: 'throw',
    icon: '',
    description: '',
  },
  {
    title: 'Style Sets',
    value: 'style-set',
    icon: '',
    description: '',
  },
  {
    title: 'Ergonomics',
    value: 'lumbar-traversin',
    icon: '',
    description: '',
  },
];

export const MODULES_OPTIONS = [
  {
    title: 'Seats',
    value: 'seat',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/36CFIvTQE1SJTcUsupBwLH/ce7e24e2322f6ad83e741c3af05bdb2d/4-places-sectionnal-right.svg?fm=webp',
    description: '',
  },
  {
    title: 'Chaises',
    value: 'with-chaise',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/36CFIvTQE1SJTcUsupBwLH/ce7e24e2322f6ad83e741c3af05bdb2d/4-places-sectionnal-right.svg?fm=webp',
    description: '',
  },
  {
    title: 'Ottoman',
    value: 'with-ottoman',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/36CFIvTQE1SJTcUsupBwLH/ce7e24e2322f6ad83e741c3af05bdb2d/4-places-sectionnal-right.svg?fm=webp',
    description: '',
  },
  {
    title: 'Arms',
    value: 'arms',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/36CFIvTQE1SJTcUsupBwLH/ce7e24e2322f6ad83e741c3af05bdb2d/4-places-sectionnal-right.svg?fm=webp',
    description: '',
  },
  {
    title: 'Replacements',
    value: 'fabric',
    icon: 'https://images.ctfassets.net/z0vszzs4am30/36CFIvTQE1SJTcUsupBwLH/ce7e24e2322f6ad83e741c3af05bdb2d/4-places-sectionnal-right.svg?fm=webp',
    description: '',
  },
];
