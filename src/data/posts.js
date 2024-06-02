const posts = [
    {
        id: 1,
        title: "iPhone 12",
        imageUrl: "https://picsum.photos/600/300?random=1",
        body: "iPhone 12, used for 3 months, excellent condition.",
        price: 700,
        likesCount: 15,
        commentsCount: 3,
        tags: ["iPhone", "Apple", "Electronics"],
        user: {
            name: "Ahmed Kamal",
            imageUrl: "https://picsum.photos/100/100?random=1"
        }
    },
    {
        id: 2,
        title: "MacBook Pro",
        imageUrl: "https://picsum.photos/300/300?random=2",
        body: "MacBook Pro 2020, 16GB RAM, 512GB SSD, perfect condition.",
        price: 1200,
        likesCount: 20,
        commentsCount: 5,
        tags: ["MacBook", "Apple", "Laptop"],
        user: {
            name: "Rana Salem",
            imageUrl: "https://picsum.photos/100/100?random=2"
        }
    },
    {
        id: 3,
        title: "Galaxy S21",
        imageUrl: "https://picsum.photos/300/300?random=3",
        body: "Samsung Galaxy S21, used for a year, minor scratches.",
        price: 600,
        likesCount: 12,
        commentsCount: 2,
        tags: ["Samsung", "Galaxy", "Smartphone","Used"],
        user: {
            name: "Mahmoud Youssef",
            imageUrl: "https://picsum.photos/100/100?random=3"
        }
    },
    {
        id: 4,
        title: "Gaming Laptop",
        imageUrl: "https://picsum.photos/300/300?random=4",
        body: "Gaming laptop with NVIDIA GTX 1660 Ti, 16GB RAM.",
        price: 1500,
        likesCount: 25,
        commentsCount: 7,
        tags: ["Gaming", "Laptop", "Electronics"],
        user: {
            name: "Nada Hisham",
            imageUrl: "https://picsum.photos/100/100?random=4"
        }
    },
    {
        id: 5,
        title: "iPad Air",
        imageUrl: "https://picsum.photos/300/300?random=5",
        body: "iPad Air 4th Gen, 64GB, WiFi model, includes Apple Pencil.",
        price: 500,
        likesCount: 18,
        commentsCount: 4,
        tags: ["iPad", "Apple", "Tablet"],
        user: {
            name: "Salma Ali",
            imageUrl: "https://picsum.photos/100/100?random=5"
        }
    },
    {
        id: 6,
        title: "OnePlus 8T",
        imageUrl: "https://picsum.photos/300/300?random=6",
        body: "OnePlus 8T, 12GB RAM, 256GB storage, excellent condition.",
        price: 450,
        likesCount: 10,
        commentsCount: 3,
        tags: ["OnePlus", "Smartphone", "Android"],
        user: {
            name: "Kamal Ibrahim",
            imageUrl: "https://picsum.photos/100/100?random=6"
        }
    },
    {
        id: 7,
        title: "Canon Camera",
        imageUrl: "https://picsum.photos/300/300?random=7",
        body: "Canon EOS 80D DSLR with 18-135mm lens, includes extra battery.",
        price: 800,
        likesCount: 22,
        commentsCount: 6,
        tags: ["Canon", "Camera", "Photography"],
        user: {
            name: "Sara Ahmed",
            imageUrl: "https://picsum.photos/100/100?random=7"
        }
    },
    {
        id: 8,
        title: "HP Spectre",
        imageUrl: "https://picsum.photos/300/300?random=8",
        body: "HP Spectre x360, 13-inch, 8GB RAM, 256GB SSD.",
        price: 900,
        likesCount: 17,
        commentsCount: 4,
        tags: ["HP", "Laptop", "Convertible"],
        user: {
            name: "Omar Adel",
            imageUrl: "https://picsum.photos/100/100?random=8"
        }
    },
    {
        id: 9,
        title: "Sony Headphones",
        imageUrl: "https://picsum.photos/300/300?random=9",
        body: "Sony WH-1000XM4 noise-cancelling headphones, like new.",
        price: 250,
        likesCount: 14,
        commentsCount: 3,
        tags: ["Sony", "Headphones", "Audio"],
        user: {
            name: "Amina Hafez",
            imageUrl: "https://picsum.photos/100/100?random=9"
        }
    },
    {
        id: 10,
        title: "Dell XPS",
        imageUrl: "https://picsum.photos/300/300?random=10",
        body: "Dell XPS 15, 32GB RAM, 1TB SSD, 4K display.",
        price: 1800,
        likesCount: 30,
        commentsCount: 8,
        tags: ["Dell", "Laptop", "4K"],
        user: {
            name: "Hassan Fathy",
            imageUrl: "https://picsum.photos/100/100?random=10"
        }
    },
    {
        id: 11,
        title: "GoPro HERO9",
        imageUrl: "https://picsum.photos/300/300?random=11",
        body: "GoPro HERO9 Black, 5K video, 20MP photos, includes accessories.",
        price: 400,
        likesCount: 16,
        commentsCount: 4,
        tags: ["GoPro", "Camera", "Action"],
        user: {
            name: "Rania Khaled",
            imageUrl: "https://picsum.photos/100/100?random=11"
        }
    },
    {
        id: 12,
        title: "Surface Pro",
        imageUrl: "https://picsum.photos/300/300?random=12",
        body: "Microsoft Surface Pro 7, Intel i5, 8GB RAM, 128GB SSD.",
        price: 750,
        likesCount: 13,
        commentsCount: 3,
        tags: ["Microsoft", "Surface", "Tablet"],
        user: {
            name: "Youssef Ali",
            imageUrl: "https://picsum.photos/100/100?random=12"
        }
    },
    {
        id: 13,
        title: "Pixel 5",
        imageUrl: "https://picsum.photos/300/300?random=13",
        body: "Google Pixel 5, 128GB, mint condition.",
        price: 600,
        likesCount: 11,
        commentsCount: 2,
        tags: ["Google", "Pixel", "Android"],
        user: {
            name: "Amira Mahmoud",
            imageUrl: "https://picsum.photos/100/100?random=13"
        }
    },
    {
        id: 14,
        title: "ThinkPad X1",
        imageUrl: "https://picsum.photos/300/300?random=14",
        body: "Lenovo ThinkPad X1 Carbon, 16GB RAM, 512GB SSD, ultra-light.",
        price: 1000,
        likesCount: 19,
        commentsCount: 5,
        tags: ["Lenovo", "Laptop", "Business"],
        user: {
            name: "Khaled Omar",
            imageUrl: "https://picsum.photos/100/100?random=14"
        }
    },
    {
        id: 15,
        title: "Beats Headphones",
        imageUrl: "https://picsum.photos/300/300?random=15",
        body: "Beats Studio3 Wireless, noise-cancelling, 22 hours battery.",
        price: 300,
        likesCount: 9,
        commentsCount: 2,
        tags: ["Beats", "Headphones", "Audio"],
        user: {
            name: "Laila Mostafa",
            imageUrl: "https://picsum.photos/100/100?random=15"
        }
    }
];

export default posts;
