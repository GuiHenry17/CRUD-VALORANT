import express from 'express';
import cors from 'cors';
const app = express();
const port = 3000;

let skins = [
    {
        id: 1,
        image: "https://valorantinfo.gg/wp-content/uploads/2021/10/valorant-prime-vandal-skin.png",
        name: "Prime Vandal",
        weapon: "Vandal",
        price: 1775,
        variants: ["Orange", "Blue", "Yellow"],
        rarity: "Premium"
    },
    {
        id: 2,
        image: "https://valorantinfo.gg/wp-content/uploads/2021/10/valorant-reaver-vandal-skin.png",
        name: "Reaver Vandal",
        weapon: "Vandal",
        price: 1775,
        variants: ["Purple", "White", "Black", "Red"],
        rarity: "Premium"
    },
    {
        id: 3,
        image: "https://valorantinfo.gg/wp-content/uploads/2021/10/valorant-reaver-operator-skin.png",
        name: "Reaver Operator",
        weapon: "Operator",
        price: 1775,
        variants: ["Purple", "White", "Black", "Red"],
        rarity: "Premium"
    },
    {
        id: 4,
        image: "https://valorantinfo.gg/wp-content/uploads/2021/11/valorant-sovereign-guardian-skin.png",
        name: "Sovereign Guardian",
        weapon: "Guardian",
        price: 1775,
        variants: ["Golden", "Green", "Silver", "Purple"],
        rarity: "Premium"
    },
    {
        id: 5,
        image: "https://valorantinfo.gg/wp-content/uploads/2021/10/valorant-ion-phantom-skin.png",
        name: "Ion Phantom",
        weapon: "Phantom",
        price: 1775,
        variants: ["Original"],
        rarity: "Premium"
    },
    {
        id: 6,
        image: "https://valorantinfo.gg/wp-content/uploads/2021/10/valorant-elderflame-vandal-skin.png",
        name: "Elderflame Vandal",
        weapon: "Vandal",
        price: 2475,
        variants: ["Original, Red, Blue, Dark"],
        rarity: "Ultra"
    },
    {
        id: 7,
        image: "https://valorantinfo.gg/wp-content/uploads/2021/10/valorant-glitchpop-judge-skin.png",
        name: "Glitchpop Judge",
        weapon: "Judge",
        price: 2175,
        variants: ["Pink", "Gold", "Blue", "Red"],
        rarity: "Exclusive"
    },
    {
        id: 8,
        image: "https://valorantinfo.gg/wp-content/uploads/2021/11/valorant-recon-phantom-skin.png",
        name: "Recon Phantom",
        weapon: "Phantom",
        price: 1775,
        variants: ["Original, Red, Blue, Green"],
        rarity: "Premium"
    },
];

app.use(cors());
app.use(express.json());

app.get('/skins', (req, res) => {
    res.json({
        error: false,
        message: 'Search completed successfully.',
        data: skins
    });
});

app.get('/skins/:id', (req, res) => {
    const skin = skins.filter(skin => skin.id == req.params.id);
    res.json({
        error: false,
        message: 'Search completed successfully.',
        data: skin
    });
});

app.post('/skins', (req, res) => {
    const { image, name, weapon, price, variants, rarity } = req.body;
    const newSkin = {
        id: Date.now(),
        image,
        name,
        weapon,
        price,
        variants,
        rarity
    };
    skins = [...skins, newSkin]
    res.json({
        error: false,
        message: 'Skin added successfully.',
        data: newSkin
    });
});

app.put('/skins/:id', (req, res) => {
    skins.map(skin => {
        if (skin.id == req.body.id) {
            skin.name = req.body.name;
            skin.weapon = req.body.weapon;
            skin.image = req.body.image;
            skin.price = req.body.price;
            skin.variants = req.body.variants;
            skin.rarity = req.body.rarity;
        }
    })
    res.json({
        error: false,
        message: 'Skin changed successfully.',
        data: req.body
    })
});

app.delete('/skins/:id', (req, res) => {
    const id = req.params.id;
    const newSkins = skins.filter(skin => skin.id != id);
    skins = newSkins;
    res.json({
        error: false,
        message: 'Skin deleted successfully.',
        data: newSkins
    });
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});