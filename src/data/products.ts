export const products = [
    {
        "id": "potatoes",
        "photoClass": "product-photo photo-potatoes",
        "imageAlt": "Fresh potatoes",
        "tag": {
            "my": "အာလူး",
            "en": "POTATOES"
        },
        "name": {
            "my": "အာလူး",
            "en": "Potatoes"
        },
        "subtitle": {
            "my": "Potatoes",
            "en": "Fresh & versatile"
        },
        "description": {
            "my": "သင့်ဆိုင်တွင် ပြန်လည်ရောင်းချရန် အာလူးများကို လက်ကား မှာယူနိုင်ပါသည်။",
            "en": "A daily staple for your customers. Enquire about wholesale quantities."
        }
    },
    {
        "id": "garlic",
        "photoClass": "product-photo photo-garlic",
        "imageAlt": "Garlic bulbs",
        "tag": {
            "my": "ကြက်သွန်ဖြူ",
            "en": "GARLIC"
        },
        "name": {
            "my": "ကြက်သွန်ဖြူ",
            "en": "Garlic"
        },
        "subtitle": {
            "my": "Garlic",
            "en": "Aromatic & essential"
        },
        "description": {
            "my": "သင့်အရောင်းဆိုင်အတွက် ကြက်သွန်ဖြူ ရရှိနိုင်မှုနှင့် ဈေးနှုန်းများကို မေးမြန်းနိုင်ပါသည်။",
            "en": "Stock your shop with garlic. Ask about availability and pricing."
        }
    },
    {
        "id": "ginger",
        "photoClass": "product-photo photo-ginger",
        "imageAlt": "Fresh ginger",
        "tag": {
            "my": "ချင်း",
            "en": "GINGER"
        },
        "name": {
            "my": "ချင်း",
            "en": "Ginger"
        },
        "subtitle": {
            "my": "Ginger",
            "en": "Naturally warming"
        },
        "description": {
            "my": "ပြန်လည်ရောင်းချရန် ချင်းများကို လိုအပ်သည့် ပမာဏအလိုက် စုံစမ်းမှာယူနိုင်ပါသည်။",
            "en": "Enquire about ginger in the quantities your business needs."
        }
    },
    {
        "id": "vegetables",
        "photoClass": "product-photo photo-vegetables",
        "imageAlt": "Seasonal vegetables",
        "tag": {
            "my": "ရာသီပေါ်",
            "en": "SEASONAL"
        },
        "name": {
            "my": "ဟင်းသီးဟင်းရွက်များ",
            "en": "Seasonal vegetables"
        },
        "subtitle": {
            "my": "Seasonal vegetables",
            "en": "The season’s best"
        },
        "description": {
            "my": "သင့်ဆိုင်၏ ရွေးချယ်စရာများ စုံလင်စေရန် ရာသီပေါ်ကုန်စိမ်းများကို စုံစမ်းနိုင်ပါသည်။",
            "en": "Broaden your shop’s selection. Ask about seasonal produce in stock."
        }
    }
] as const;
export type ProductId = (typeof products)[number]["id"];
