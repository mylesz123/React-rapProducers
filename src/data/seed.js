// seed of example data
function getRandomVote() {
    return Math.floor(Math.random() * 10) + 1; 
}

const rappers = [
    {
        "id": 1,
        "title": "Wheezy Outta Hea..",
        "description": "Some catchy phrase said by Wheezy the producer. He has been around for some time now, and was most notable for his earlier productions way back on Slime Season 1 for those who were there. Nowadays he is still killing tracks and works with a large array of rappers like Young Thug, Moneybagg Yo, the Migos, and more!",
        "url": "https://youtu.be/8HEWR5isTPM",
        "votes": getRandomVote(),
        "voterAvatarUrl": "images/avatars/robot.png",
        "productImageUrl": "images/products/Wheezy.png"

    },
    {
        "id": 2,
        "title": "Metro Boomin Want Some More!",
        "description": "Originally phrased by Atlanta's very own Young Thug (aka 'Jeffrey'). Shortly following, Future also helped to spread Metro's name with another catchy phrase I'm sure you have all heard once or twice before. 😏 This helped in putting Metro on the map at a large scale, and Honestly, Future put him over the top!",
        "url": "https://youtu.be/8ENpRYyoQ1M",
        "votes": getRandomVote(),
        "voterAvatarUrl": "images/avatars/robot2.png",
        "productImageUrl": "images/products/metro-boomin.jpg"

    },
    {
        "id": 3,
        "title": "Yo Pierre Wanna Come Out Here? ",
        "description": "This phrase started catching heavy noteriety when Pierre the producer started Teaming up with EA's zone 6 rapper, Young Nudy and including the catchy phrase in the song. Little do people know the phrase actually can from the Jamie Fox show!",
        "url": "https://youtu.be/MCG5_AtRp24",
        "votes": getRandomVote(),
        "voterAvatarUrl": "images/avatars/straight.png",
        "productImageUrl": "images/products/pierre-bourne.jpg"

    },
    {
        "id": 4,
        "title": "Tay Keith ... up! ",
        "description": "This phrase cannot be said to its entirety on this page, but if you know you know 🤷🏾‍♂️. The phrase first became wildly popular when Memephis rapper BlocBoy JB debuted his hit single, Shoot! Things really started kicking off when Drake and JB did a collab on 'Look Alive.' ",
        "url": "https://youtu.be/NV-3s2wwC8c",
        "votes": getRandomVote(),
        "voterAvatarUrl": "images/avatars/straight.png",
        "productImageUrl": "images/products/Tay-keith.jpg"

    },
];

export default rappers;