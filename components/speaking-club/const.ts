

export type TOption = {
    value: string | number;
    label: string;
    icon?: any;
};

export const maximumParticipants: TOption[] = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
    { label: "8", value: 8 },
    { label: "9", value: 9 },
    { label: "10", value: 10 },
    { label: "Infinity", value: 11 },
];

export const languages: TOption[] = [
    { icon: "gb", label: "English", value: "ENGLISH" },
    { icon: "vn", label: "Vietnamese", value: "VIETNAMESE" },
    { icon: "cn", label: "Chinese", value: "CHINESE" },
    { icon: "es", label: "Spanish", value: "SPANISH" },
    { icon: "fr", label: "French", value: "FRENCH" },
    { icon: "de", label: "German", value: "GERMAN" },
    { icon: "jp", label: "Japanese", value: "JAPANESE" },
    { icon: "kr", label: "Korean", value: "KOREAN" },
    { icon: "ru", label: "Russian", value: "RUSSIAN" },
    { icon: "it", label: "Italian", value: "ITALIAN" },
    { icon: "pt", label: "Portuguese", value: "PORTUGUESE" },
    { icon: "sa", label: "Arabic", value: "ARABIC" },
    { icon: "th", label: "Thai", value: "THAI" },
    { icon: "my", label: "Malay", value: "MALAY" },
    { icon: "in", label: "Hindi", value: "HINDI" },
    { icon: "bd", label: "Bengali", value: "BENGALI" },
    { icon: "pk", label: "Urdu", value: "URDU" },
    { icon: "ir", label: "Persian", value: "PERSIAN" },
    { icon: "tr", label: "Turkish", value: "TURKISH" },
    { icon: "pl", label: "Polish", value: "POLISH" },
];

export const levels: TOption[] = [
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