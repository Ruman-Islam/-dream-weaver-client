const packages = [
    {
        "id": 1,
        "name": "SUPER SAVER 1",
        "price": 12500,
        "imageURL": "https://www.shaadidukaan.com/vogue/wp-content/uploads/2020/04/ajphotography-feature.jpeg",
        "features": [
            "1 Top Photographer.",
            "Event Duration: 4 Hours",
            "Number of Pictures: Unlimited (All post processed)",
            "Specially Edited Photos: 100 copies",
            "Print: 4R (4”x6″) Matte Prints: 100 copies",
            "* All soft copy of photos will be delivered in Dream Weaver's Signature Pen Drive"
        ]
    },
    {
        "id": 2,
        "name": "SUPER SAVER 2",
        "price": 15000,
        "imageURL": "https://cdn0.weddingwire.in/articles/images/9/0/8/6/img_16809/t30_creative-wedding-photography-avinash-dhoundhiyal-photography-lead-image.jpg",
        "features": [
            "1 Top Photographer + 1 Top Associate Photographer.",
            "Event Duration: 4 Hours",
            "Number of Pictures: Unlimited (All post processed)",
            "Specially Edited Photos: 100 copies",
            "Print: 4R (4”x6″) Matte Prints: 100 copies",
            "* All soft copy of photos will be delivered in Dream Weaver's Signature Pen Drive"
        ]
    },
    {
        "id": 3,
        "name": "SUPER SAVER 3",
        "price": 20000,
        "imageURL": "https://cdn-afnbc.nitrocdn.com/BZKOTrjyBhfNoALQFbXvCUNxHQlQOTEp/assets/static/optimized/rev-c3371cb/adphotography/wp-content/uploads/2021/04/rita_banner.webp",
        "features": [
            "1 Senior Photographer + 1 Top Associate Photographer.",
            "Event Duration: 4 Hours",
            "Number of Pictures: Unlimited (All post processed)",
            "Specially Edited Photos: 100 copies",
            "Print: 12L (12”x 18″) Matte Print: 1 copy",
            "Print: 5L (5”x7.5″) Matte Prints: 100 copies",
            "* All soft copy of photos will be delivered in Dream Weaver’s Signature Pen drive"
        ]
    },
    {
        "id": 4,
        "name": "SUPER SAVER 4",
        "price": 30000,
        "imageURL": "https://cdn0.weddingwire.in/vendor/3835/3_2/960/jpeg/7e2edb5b-27d4-4e18-8391-afd8e830916c_15_303835-162842276625291.jpeg",
        "features": [
            "1 Senior Photographer + 1 Top Photographer + 1 Top Associate Photographer",
            "Event Duration: 5 Hours",
            "Number of Pictures: Unlimited (All post processed)",
            "Specially Edited Photos: 150 copies",
            "Print: 20L (20”x30″) Matte Print: 1 copy",
            "Print: 12L (12”x 18″) Matte Print: 1 copy",
            "Print: 5L (5”x7.5″) Matte Prints: 125 copies",
            "* All soft copy of photos will be delivered in Dream Weaver’s Signature Pen drive"
        ]
    },
    {
        "id": 5,
        "name": "ELEGANT 1",
        "price": 40000,
        "imageURL": "https://photos.smugmug.com/Bangladeshi-Wedding-Photos/i-pdZJnCR/2/02af0d74/M/23000154_1922484737779298_6605500656161945366_o-M.jpg",
        "features": [
            "Core Photographer Rifat Shakhawat Hossain / Ishrat Amin + 1 Top Photographer + 1 Top Associate photographer.",
            "DW  Team  Shooting  Duration : 5 Hours",
            "Conceptual Photographs & Family Shoot by our Core Photographer",
            "Number of Pictures: Unlimited (All post processed)",
            "Specially Edited Photos: 100 copies",
            "Print: 20L (20”x30″) Matte Print: 1 copy",
            "Print: 12L (12”x 18″) Matte Print: 2 copies",
            "Print: 5L (5”x7.5″) Matte Prints: 125 copies",
            "*All soft copy of photos will be delivered in Dream Weaver’s Signature Pen drive."
        ]
    },
    {
        "id": 6,
        "name": "ELEGANT 2",
        "price": 50000,
        "imageURL": "https://photos.smugmug.com/Bangladeshi-Wedding-Photos/i-cjhhF88/2/764d079e/M/_JOY7852-Exposure-M.jpg",
        "features": [
            "Core Photographer Rifat Shakhawat Hossain / Ishrat Amin + 1 Top Photographer + 1 Top Associate photographer.",
            "3 Hour  Exclusive session from Core Photographer",
            "DW  Team  Shooting  Duration : 5 Hours",
            "Conceptual Photographs & Family Shoot by our Core Photographer",
            "Number of Pictures: Unlimited (All post processed)",
            "Specially Edited Photos: 150 copies",
            "Print: 20L (20”x30″) Matte Print: 1 copy",
            "Print: 12L (12”x 18″) Matte Print: 2 copies",
            "Print: 5L (5”x7.5″) Matte Prints: 125 copies",
            "*All soft copy of photos will be delivered in Dream Weaver’s Signature Pen drive."
        ]
    },
    {
        "id": 7,
        "name": "ELEGANT 3",
        "price": 70000,
        "imageURL": "https://i.pinimg.com/originals/83/dd/c6/83ddc6bb9bf59528b8542651dd27d469.jpg",
        "features": [
            "Core Photographer Rifat Shakhawat Hossain / Ishrat Amin + 2 Top Photographer + 1 Top Associate photographer.",
            "5 Hour  Exclusive session from Core Photographer",
            "DW  Team  Shooting  Duration : 6 Hours",
            "Conceptual Photographs & Family Shoot by our Core Photographer",
            "Number of Pictures: Unlimited (All post processed)",
            "Specially Edited Photos: 150 copies",
            "Print: 20L (20”x30″) Matte Print: 2 copies",
            "Print: 12L (12”x 18″) Matte Print: 3 copies",
            "Print: 5L (5”x7.5″) Matte Prints: 150 copies",
            "*All soft copy of photos will be delivered in Dream Weaver’s Signature Pen drive."
        ]
    },
    {
        "id": 8,
        "name": "ELEGANT 4",
        "price": 100000,
        "imageURL": "https://www.shaadibaraati.com/vendors-profile/c2e3800a580175d320b40ca1cd9cf8db.jpg",
        "features": [
            "Core Photographer Rifat Shakhawat Hossain / Ishrat Amin + 2 Top Photographer + 1 Top Associate photographer.",
            "Unlimited  Exclusive session from Core Photographer",
            "DW  Team  Shooting  Duration : 7 Hours",
            "* * Pre / Post Wedding shoot (2 Hr) by our Core Photographer Rifat Shakhawat Hossain / Ishrat Amin (Inside Dhaka Metropolitan City)",
            "Conceptual Photographs & Family Shoot by our Core Photographer",
            "Number of Pictures: Unlimited (All post processed)",
            "Specially Edited Photos: 200 copies",
            "Print: 20L (20”x30″) Matte Print: 2 copies",
            "Print: 12L (12”x 18″) Matte Print: 3 copies",
            "Print: 5L (5”x7.5″) Matte Prints: 150 copies",
            "* All soft copy of photos will be delivered in Dream Weaver’s Signature Pen drive."
        ]
    }
]



export const getPackage = id => packages.find(pg => {
    const packageId = parseInt(id);
    return pg.id === packageId;
});