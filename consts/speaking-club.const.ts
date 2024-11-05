
export type OptionProps = {
    value: string | number;
    label: string;
    image?: string;
    icon?: string;
};

export const participantOptions: OptionProps[] = [
    { label: 'Only Me', value: 1 },
    { label: "Solo Learn", value: 2 },
    { label: "All Are Welcome", value: 3 },
];

export const languages: OptionProps[] = [
    { image: "https://flagcdn.com/w20/gb.png", label: "English", value: "ENGLISH" },
    { image: "https://flagcdn.com/w20/vn.png", label: "Vietnamese", value: "VIETNAMESE" },
    { image: "https://flagcdn.com/w20/cn.png", label: "Chinese", value: "CHINESE" },
    { image: "https://flagcdn.com/w20/es.png", label: "Spanish", value: "SPANISH" },
    { image: "https://flagcdn.com/w20/fr.png", label: "French", value: "FRENCH" },
    { image: "https://flagcdn.com/w20/de.png", label: "German", value: "GERMAN" },
    { image: "https://flagcdn.com/w20/jp.png", label: "Japanese", value: "JAPANESE" },
    { image: "https://flagcdn.com/w20/kr.png", label: "Korean", value: "KOREAN" },
    { image: "https://flagcdn.com/w20/ru.png", label: "Russian", value: "RUSSIAN" },
    { image: "https://flagcdn.com/w20/it.png", label: "Italian", value: "ITALIAN" },
    { image: "https://flagcdn.com/w20/pt.png", label: "Portuguese", value: "PORTUGUESE" },
    { image: "https://flagcdn.com/w20/sa.png", label: "Arabic", value: "ARABIC" },
    { image: "https://flagcdn.com/w20/th.png", label: "Thai", value: "THAI" },
    { image: "https://flagcdn.com/w20/my.png", label: "Malay", value: "MALAY" },
    { image: "https://flagcdn.com/w20/in.png", label: "Hindi", value: "HINDI" },
    { image: "https://flagcdn.com/w20/bd.png", label: "Bengali", value: "BENGALI" },
    { image: "https://flagcdn.com/w20/pk.png", label: "Urdu", value: "URDU" },
    { image: "https://flagcdn.com/w20/ir.png", label: "Persian", value: "PERSIAN" },
    { image: "https://flagcdn.com/w20/tr.png", label: "Turkish", value: "TURKISH" },
    { image: "https://flagcdn.com/w20/pl.png", label: "Polish", value: "POLISH" },
];

export const levels: OptionProps[] = [
    {
        label: "All Level",
        value: 1,
    },
    {
        label: "Beginner",
        value: 2,
    },
    {
        label: "Intermediate",
        value: 3,
    },
    {
        label: "Advanced",
        value: 4,
    },
];