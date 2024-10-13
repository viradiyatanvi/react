import React from 'react';


const products = [
    {
        id:1,
        img:'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/u/n/p/-original-imagugptgsfbxauz.jpeg?q=70',
        imgCousins:[
            'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/p/u/8/-original-imagugptptuacajg.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/c/p/-original-imagugptdmkvpwpm.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/f/r/2/-original-imagugptvr3dbzpb.jpeg?q=70'
        ],
        model:'vivo Y200 ',
        brand:'Vivo',
        price:21999,
        color:'',
        space:'8 GB RAM | 128 GB ROM',
        camera:'64MP + 2MP | 16MP Front Camera',
        battery:'4800 mAh Battery',
        count:1,
        isAdded:false,
        type:'Mobile',   
        isTrending:true,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:2,
        img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/g/j/t3x-5g-v2338-vivo-original-imahyyzaqhgwzfup.jpeg?q=70",
        model:'Vivo T3x 5G',
        brand:'Vivo',
        price:23999,
        space:'12 GB RAM | 256 GB ROM',
        camera:'108MP + 13MP + 2MP | 50MP Front Camera',
        battery:'5000 mAh Battery',
        count:1,
        isAdded:false,
        type:'Mobile',   
        isTrending:false,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"

    },
    {
        id:3,
        img:'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/s/y/narzo-60-5g-rmx3750-realme-original-imagrht2yzyc2jyj.jpeg?q=70',
        model:'realme Narzo 60 ',
        brand:'Realme',
        price:17868,
        space:'8 GB RAM | 128 GB ROM',
        camera:'64MP Rear Camera',
        battery:'5000 mAh Battery',
        count:1,
        isAdded:false,
        type:'Mobile',   
        isTrending:true,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:4,
        img:'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/2/z/4/-original-imagqxx2haehpjnf.jpeg?q=70',
        model:'realme 11 Pro ',
        brand:'Realme',
        price:21999,
        space:'8 GB RAM | 128 GB ROM',
        camera:'100MP (OIS) + 2MP | 16MP Front Camera',
        battery:'5000 mAh Battery',
        count:1,
        isAdded:false,
        type:'Mobile',   
        isTrending:false,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:5,
        img:'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/h/h/d/-original-imags487gaqqhcea.jpeg?q=70',
        model:'realme C53',
        brand:'Realme',
        price:9999,
        space:'6 GB RAM | 64 GB ROM',
        camera:'108MP + 2MP | 8MP Front Camera',
        battery:'5000 mAh Battery',
        count:1,
        isAdded:false,
        type:'Mobile',   
        isTrending:true,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:6,
        img:'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/4/h/e/-original-imagzjhwmsamexfk.jpeg?q=70',
        model:'vivo T2x ',
        brand:'Vivo',
        price:12999,
        space:'6 GB RAM | 128 GB ROM',
        camera:'50MP + 2MP | 8MP Front Camera',
        battery:'5000 mAh Battery',
        count:1,
        isAdded:false,
        type:'Mobile',   
        isTrending:false,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:7,
        img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/b/x/-original-imagtt4h4ptmxgwn.jpeg?q=70",
        model:'Vivo T2 Pro',
        brand:'Vivo',
        price:19420,
        space:'8 GB RAM | 128 GB ROM',
        camera:'108MP Rear Camera',
        battery:'5000 mAh Battery',
        count:1,
        isAdded:false,
        type:'Mobile',   
        isTrending:false,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:8,
        img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/f/2/y27-v2249-vivo-original-imahfmkqf5mrugjq.jpeg?q=70",
        model:'Vivo Y27',
        brand:'Vivo',
        price:16770,
        space:'8 GB RAM | 128 GB ROM',
        camera:'50MP + 2MP | 8MP Front Camera',
        battery:'5000 mAh Battery',
        count:1,
        isAdded:false,
        type:'Mobile',   
        isTrending:false,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:9,
        img:'https://m.media-amazon.com/images/I/61SSVxTSs3L._SX679_.jpg',
        model:'ColorFit Pulse',
        brand:'Fire-Bolt',
        price:1499,
        color:'black',
        count:1,
        isAdded:false,
        type:'Watch',   
        isTrending:true,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:10,
        img:'https://m.media-amazon.com/images/I/61Bdfmo2s0L._SX679_.jpg',
        model:'Lumos',
        brand:'Fire-Bolt',
        price:1499,
        color:'	Steel Black',
        count:1,
        isAdded:false,
        type:'Watch',   
        isTrending:false,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:11,
        img:'https://m.media-amazon.com/images/I/61YVUOHcrqL._SX679_.jpg',
        model:'Ninja Call Pro',
        brand:'Fire-Bolt',
        price:1199,
        color:'Navy Blue',
        count:1,
        isAdded:false,
        type:'Watch',   
        isTrending:false,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:12,
        img:'https://m.media-amazon.com/images/I/61akt30bJsL._SX679_.jpg',
        model:'Wave Mode',
        brand:'Fire-Bolt',
        price:1299,
        color:'	black',
        count:1,
        isAdded:false,
        type:'Watch',   
        isTrending:true,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:13,
        img:'https://m.media-amazon.com/images/I/61YTjbpBTTL._SX679_.jpg',
        model:'Wave Style',
        brand:'Boat',
        price:1099,
        color:'	black',
        count:1,
        isAdded:false,
        type:'Watch',   
        isTrending:false,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:14,
        img:'https://m.media-amazon.com/images/I/61RqU14G4ZL._SX679_.jpg',
        model:'ColorFit Pro',
        brand:'Fire-Bolt',
        price:1099,
        color:'Red',
        count:1,
        isAdded:false,
        type:'Watch',   
        isTrending:false,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:15,
        img:'https://m.media-amazon.com/images/I/41RVsZAmNGL._SX300_SY300_QL70_FMwebp_.jpg',
        model:'Ninja Call Pro',
        brand:'Boat',
        price:1199,
        color:'white',
        count:1,
        isAdded:false,
        type:'Watch',   
        isTrending:false,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:16,
        img:'https://m.media-amazon.com/images/I/71OruInXiNL._SX679_.jpg',
        model:'Case X',
        brand:'Boat',
        price:5999,
        color:'Red',
        count:1,
        isAdded:false,
        type:'Watch',   
        isTrending:false,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:17,
        img:'https://m.media-amazon.com/images/I/71z4wWmnvAL._SX679_.jpg',
        model:'NBC 4S',
        brand:'Dell',
        price:30999,
        color:'Blue',
        space:'16GB | 512GB',
        operating_system:'Windows 11 Home',
        count:1,
        isAdded:false,
        type:'Laptop',   
        isTrending:true,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:18,
        img:'https://m.media-amazon.com/images/I/713etE3fZTL._SX679_.jpg',
        model:'Vostro 3520',
        brand:'Dell',
        price:36990,
        color:'black',
        space:'8GB | 512GB',
        operating_system:'Windows 11 Home',
        count:1,
        isAdded:false,
        type:'Laptop',   
        isTrending:false,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:19,
        img:"https://rukminim2.flixcart.com/image/312/312/xif0q/computer/p/x/6/inspiron-3515-thin-and-light-laptop-dell-original-imah26j6nyzfj93e.jpeg?q=70",
        model:'Dell Inspiron',
        brand:'Dell',
        price:43990,
        color:'black',
        space:'8GB | 1TB',
        operating_system:'Windows 11 Home',
        count:1,
        isAdded:false,
        type:'Laptop',   
        isTrending:false,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:20,
        img:'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/b/j/f/new-inspiron-15-laptop-thin-and-light-laptop-dell-original-imah27qxqfjqdxzm.jpeg?q=70',
        model:'Inspiron',
        brand:'Dell',
        price:26990,
        color:'Black',
        space:'8GB | 512GB',
        operating_system:'Windows 11 Home',
        count:1,
        isAdded:false,
        type:'Laptop',   
        isTrending:true,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:21,
        img:'https://m.media-amazon.com/images/I/51CTXHQux0L._SX679_.jpg',
        model:'Vostro 3510',
        brand:'Dell',
        price:48490,
        color:'Carbon',
        space:'8GB | 512GB',
        operating_system:'Windows 11 Home',
        count:1,
        isAdded:false,
        type:'Laptop',   
        isTrending:false,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:22,
        img:'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/8/4/p/-original-imahygdrnwc8bcjq.jpeg?q=70',
        model:'Dell Inspiron',
        brand:'Dell',
        price:64990,
        color:'Silver',
        space:'8GB | 512GB',
        operating_system:'Windows 11 Home',
        count:1,
        isAdded:false,
        type:'Laptop',   
        isTrending:true,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:23,
        img:'https://m.media-amazon.com/images/I/71TPda7cwUL._SX679_.jpg',
        model:'MacBook Air',
        brand:'Apple',
        price:83990,
        color:'Silver',
        space:'8GB | 256GB',
        operating_system:'Mac OS',
        count:1,
        isAdded:false,
        type:'Laptop',   
        isTrending:true,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:24,
        img:'https://m.media-amazon.com/images/I/618d5bS2lUL._SX679_.jpg',
        model:'MacBook Pro',
        brand:'Apple',
        price:399900,
        color:'Black',
        space:'48GB | 1TB',
        operating_system:'Mac OS',
        count:1,
        isAdded:false,
        type:'Laptop',   
        isTrending:true,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:25,
        img:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/1/8/l/-original-imagqhswqgpwb2yu.jpeg?q=70",
        model:"Airdopes 138",
        brand:"Boat",
        price:"899",
        color:"black",
        space:"60 hours",
        count:1,
        isAdded:false,
        type:"bluetooth , airdopes",
        isTrending:false,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:26,
        img:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/o/6/c/-original-imahf3h2y3bwyqzc.jpeg?q=70",
        model:"Airdopes Alpha",
        brand:"Boat",
        price:"899",
        color:"white",
        space:"35 hours",
        count:1,
        isAdded:false,
        type:"bluetooth , airdopes",
        isTrending:false,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:27,
        img:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/g/t/c/-original-imahfmhamfxakugu.jpeg?q=70",
        model:"Airdopes 131",
        brand:"Boat",
        price:"1399",
        color:"Green",
        space:"60 hours",
        count:1,
        isAdded:false,
        type:"bluetooth , airdopes",
        isTrending:false,
         description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:28,
        img:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/8/2/m/-original-imagz5z5jshnhvrp.jpeg?q=70",
        model:"Airdopes Supreme",
        brand:"Boat",
        price:"1299",
        color:"Sorty Blue",
        space:"50 hours",
        count:1,
        isAdded:false,
        type:"bluetooth , airdopes",
        isTrending:false,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:29,
        img:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/b/q/i/-original-imagmu7vmqq7gbu2.jpeg?q=70",
        model:"Bluetooth Rockrez",
        brand:"Boat",
        price:"999",
        color:"Cosmic Black",
        space:"50 hours",
        count:1,
        isAdded:false,
        type:"bluetooth , airdopes",
        isTrending:false,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:30,
        img:"https://rukminim2.flixcart.com/image/612/612/ksqeky80/headphone/x/r/m/rma2011-realme-original-imag68fe7xdnavuh.jpeg?q=70",
        model:"Buds Wireless",
        brand:"Realme",
        price:"1299",
        color:"Blue",
        space:"36 hours",
        count:1,
        isAdded:false,
        type:"bluetooth , airdopes",
        isTrending:false,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:31,
        img:"https://rukminim2.flixcart.com/image/612/612/ksqeky80/headphone/3/l/n/rma2011-realme-original-imag68fqfqbydmrx.jpeg?q=70",
        model:"Buds Wireless",
        brand:"Realme",
        price:"1299",
        color:"Black",
        space:"30 hours",
        count:1,
        isAdded:false,
        type:"bluetooth , airdopes",
        isTrending:false,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:32,
        img:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/2/x/5/-original-imahyy6f5adnxrfr.jpeg?q=70",
        model:"Budes Wireless",
        brand:"Realme",
        price:"1299",
        color:"Green",
        space:"40 hours",
        count:1,
        isAdded:false,
        type:"bluetooth , airdopes",
        isTrending:false,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    },
    {
        id:33,
        img:'https://m.media-amazon.com/images/I/61SRj3IzD1L._SY879_.jpg',
        model:'Denim',
        brand:"Levi's",
        price:699,
        color:'blue',
        count:1,
        isAdded:false,
        type:'Jeans',   
        isTrending:false,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    
    },
    {
        id:34,
        img:'https://m.media-amazon.com/images/I/61KGHTiK5sL._SX679_.jpg',
        model:'Denim',
        brand:"Levi's",
        price:629,
        color:'brown',
        count:1,
        isAdded:false,
        type:'Jeans',   
        isTrending:false,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    
    },
    {
        id:35,
        img:'https://m.media-amazon.com/images/I/61squlDBu2L._SY879_.jpg',
        model:'Slim',
        brand:"Levi's",
        price:1829,
        color:'black',
        count:1,
        isAdded:false,
        type:'Jeans',   
        isTrending:false,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    
    },
    {
        id:36,
        img:'https://m.media-amazon.com/images/I/61KGHTiK5sL._SX679_.jpg',
        model:'Slim',
        brand:"Pavillion",
        price:629,
        color:'brown',
        count:1,
        isAdded:false,
        type:'Jeans',   
        isTrending:true,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    
    },
    {
        id:37,
        img:'https://m.media-amazon.com/images/I/611JW98mezL._SX679_.jpg',
        model:'Slim',
        brand:"Pavillion",
        price:2375,
        color:'brown',
        count:1,
        isAdded:false,
        type:'Jeans',   
        isTrending:false,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    
    },
    {
        id:38,
        img:'https://m.media-amazon.com/images/I/81HoA9uLEPL._SY879_.jpg',
        model:'Slim',
        brand:"Pavillion",
        price:587,
        color:'LightBlue',
        count:1,
        isAdded:false,
        type:'Jeans',   
        isTrending:true,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    
    },
    {
        id:39,
        img:'https://m.media-amazon.com/images/I/A176kJizsPL._SX679_.jpg',
        model:'Slim',
        brand:"Levi's",
        price:1889,
        color:'brown',
        count:1,
        isAdded:false,
        type:'Jeans',   
        isTrending:false,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    
    },
    {
        id:40,
        img:'https://m.media-amazon.com/images/I/81iqWYMhlnL._SY879_.jpg',
        model:'Zogger',
        brand:"Pavillion",
        price:899,
        color:'blue',
        count:1,
        isAdded:false,
        type:'Jeans',   
        isTrending:false,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    
    },
    {
        id:41,
        img:'https://m.media-amazon.com/images/I/61fkTWm-SnL._SY695_.jpg',
        model:"Men's Boot",
        brand:"Red Tap",
        price:1549,
        color:'black',
        count:1,
        isAdded:false,
        type:'Shoes',   
        isTrending:false,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    
    },
    {
        id:42,
        img:'https://m.media-amazon.com/images/I/41Dv2ycCHVL.jpg',
        model:"Casual Boot",
        brand:"US Polo",
        price:498,
        color:'whiteandblack',
        count:1,
        isAdded:false,
        type:'Shoes',   
        isTrending:true,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    
    },
    {
        id:43,
        img:'https://m.media-amazon.com/images/I/71JhX1D0+XL._SY695_.jpg',
        model:"Men's Boot",
        brand:"Red Tap",
        price:1659,
        color:'black',
        count:1,
        isAdded:false,
        type:'Shoes',   
        isTrending:false,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    
    },
    {
        id:44,
        img:'https://m.media-amazon.com/images/I/71JhX1D0+XL._SY695_.jpg',
        model:"Men's Boot",
        brand:"Red Tap",
        price:1659,
        color:'black',
        count:1,
        isAdded:false,
        type:'Shoes',   
        isTrending:true,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    
    },
    {
        id:45,
        img:'https://m.media-amazon.com/images/I/81TBFpGVlCL._SY695_.jpg',
        model:"Rojas Sneaker",
        brand:"US Polo",
        price:2228,
        color:'Red and white',
        count:1,
        isAdded:false,
        type:'Shoes',   
        isTrending:false,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    
    },
    {
        id:46,
        img:'https://m.media-amazon.com/images/I/51kZRxvxg0L._SY695_.jpg',
        model:"Sneaker",
        brand:"US Polo",
        price:422,
        color:'white',
        count:1,
        isAdded:false,
        type:'Shoes',   
        isTrending:false,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    
    },
    {
        id:47,
        img:'https://m.media-amazon.com/images/I/5149FttjJuL._SY695_.jpg',
        model:"Men's Sneaker",
        brand:"Red Tap",
        price:1599,
        color:'white',
        count:1,
        isAdded:false,
        type:'Shoes',   
        isTrending:false,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    
    },
    {
        id:48,
        img:'https://m.media-amazon.com/images/I/41-reQfTyoL.jpg',
        model:"Casual Sneaker",
        brand:"Red Tap",
        price:549,
        color:'brown',
        count:1,
        isAdded:false,
        type:'Shoes',   
        isTrending:false,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    
    },
    {
        id:49,
        img:'https://m.media-amazon.com/images/I/81wFLUDzAbL._SY879_.jpg',
        model:"Tshirt's",
        brand:"Polo Hills",
        price:239,
        color:'Mahroon',
        count:1,
        isAdded:false,
        type:'Tshirts',   
        isTrending:false,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    
    },
    {
        id:50,
        img:'https://m.media-amazon.com/images/I/71ISzvgAl2L._SY879_.jpg',
        model:"Tshirt's",
        brand:"Polo Hills",
        price:649,
        color:'blue',
        count:1,
        isAdded:false,
        type:'Tshirts',   
        isTrending:false,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    
    },
    {
        id:51,
        img:'https://m.media-amazon.com/images/I/71eUwDk8z+L._SY879_.jpg',
        model:"Tshirt's",
        brand:"Polo Hills",
        price:699,
        color:'black',
        count:1,
        isAdded:false,
        type:'Tshirts',   
        isTrending:false,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    
    },
    {
        id:52,
        img:'https://m.media-amazon.com/images/I/61S5nUPVufL._SX679_.jpg',
        model:"Tshirt's",
        brand:"Polo Hills",
        price:299,
        color:'green',
        count:1,
        isAdded:false,
        type:'Tshirts',   
        isTrending:false,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    
    },
    {
        id:53,
        img:'https://m.media-amazon.com/images/I/517Hfmb19RL._SY879_.jpg',
        model:"Tshirt's",
        brand:"Polo Hills",
        price:380,
        color:'white',
        count:1,
        isAdded:false,
        type:'Tshirts',   
        isTrending:false,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    
    },
    {
        id:54,
        img:'https://m.media-amazon.com/images/I/619uXd9I3iL._SX679_.jpg',
        model:"Tshirt's",
        brand:"Polo Hills",
        price:289,
        color:'black',
        count:1,
        isAdded:false,
        type:'Tshirts',   
        isTrending:true,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    
    },
    {
        id:55,
        img:'https://m.media-amazon.com/images/I/61p21cELnEL._SX679_.jpg',
        model:"Tshirt's",
        brand:"Polo Hills",
        price:299,
        color:'green',
        count:1,
        isAdded:false,
        type:'Tshirts',   
        isTrending:false,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    
    },
    {
        id:56,
        img:'https://m.media-amazon.com/images/I/517Tys7oz-L._SX679_.jpg',
        model:"Tshirt's",
        brand:"Eyebogler",
        price:199,
        color:'red',
        count:1,
        isAdded:false,
        type:'Tshirts',   
        isTrending:false,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    
    },
    {
        id:57,
        img:'https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/k/h/t/xl-ss-21-glito-original-imagtzfgfzexxmz5.jpeg?q=70',
        model:"Hoody",
        brand:"Eyebogler",
        price:399,
        color:'Blue',
        count:1,
        isAdded:false,
        type:'Hoody',   
        isTrending:false,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    
    },
    {
        id:58,
        img:"https://rukminim2.flixcart.com/image/612/612/k2tc1ow0pkrrdj/winter-outerwear/h/q/f/l-olive-green-h-m-pln-bl-adro-original-imafk66zffmkqhtf.jpeg?q=70",
        model:"Hoody",
        brand:"Eyebogler",
        price:999,
        color:'Blue',
        count:1,
        isAdded:false,
        type:'Hoody',   
        isTrending:false,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    
    },
    {
        id:59,
        img:"https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/l/o/m/m-7005-alles-kleider-original-imahfdczyykbfvhc.jpeg?q=70",
        model:"Hoody",
        brand:"Eyebogler",
        price:449,
        color:'Sky',
        count:1,
        isAdded:false,
        type:'Hoody',   
        isTrending:false,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    
    },
    {
        id:60,
        img:"https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/e/5/5/xxl-7005-alles-kleider-original-imahfcgfxskbnsme.jpeg?q=70",
        model:"Hoody",
        brand:"Eyebogler",
        price:559,
        color:'Sky',
        count:1,
        isAdded:false,
        type:'Hoody',   
        isTrending:false,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    },
    {
        id:61,
        img:"https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/w/g/t/xxl-7005-alles-kleider-original-imahfbctdhcuxhby.jpeg?q=70",
        model:"Hoody",
        brand:"Eyebogler",
        price:529,
        color:'Sky',
        count:1,
        isAdded:false,
        type:'Hoody',   
        isTrending:false,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    },
    {
        id:62,
        img:"https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/u/s/b/s-6436-triptee-original-imagsjyczzbqunze.jpeg?q=70",
        model:"Hoody",
        brand:"Eyebogler",
        price:529,
        color:'Sky',
        count:1,
        isAdded:false,
        type:'Hoody',   
        isTrending:false,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    },
    {
        id:63,
        img:"https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/p/l/h/m-7005-alles-kleider-original-imahfddkjy3qz8j4.jpeg?q=70",
        model:"Hoody",
        brand:"Eyebogler",
        price:679,
        color:'Sky',
        count:1,
        isAdded:false,
        type:'Hoody',   
        isTrending:false,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    },
    {
        id:64,
        img:"https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/n/n/p/l-ss-35-atiano-original-imahfzj6gszy3m9m.jpeg?q=70",
        model:"Hoody",
        brand:"Eyebogler",
        price:679,
        color:'Yellow',
        count:1,
        isAdded:false,
        type:'Hoody',   
        isTrending:false,
        description:"A soft, breathable jersey which is an excellent choice for the warmest day. It will mix great with any pair of jeans or pants."
    },
];

const About = () => {
    return (
        <div style={{ padding: '10px' }}>
            <h1>Product Details</h1>
            {/* Search Input */}
            <input
                type="text"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '20px',
                    borderRadius: '4px',
                    border: '1px solid #ccc'
                }}
            />
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '20px',
                margin: "50px 0px"
            }}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div key={product.id} style={{
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            padding: '10px',
                            textAlign: 'center'
                        }}>
                            <img src={product.img} alt={product.model} style={{
                                width: '30%',
                                height: 'auto',
                                borderRadius: '8px',
                                margin: "20px 0px"
                            }} />
                            <h2>{product.model}</h2>
                            <p><strong>Brand:</strong> {product.brand}</p>
                            <p><strong>Price:</strong> ₹{product.price}</p>
                            <p>{product.description}</p>
                        </div>
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </div>
    );
};

export default About;
