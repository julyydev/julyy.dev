type ThemeVariables = {
    bg_page1: string;
    bg_page2: string;
    opaque_bg_page1: string;

    text1: string;
    text2: string;
    text3: string;
    text4: string;
    border1: string;
    border2: string;
    border3: string;
    border4: string;
    button_text: string;

    slight_layer: string;
    opaque_layer: string;

    code_block_wrapper: string;
    input: string;

    primary_100: string;
    primary_200: string;
    primary_300: string;
    primary_400: string;
    primary_500: string;
    primary_600: string;
    primary_700: string;
    primary_800: string;
    primary_900: string;

    success_100: string;
    success_200: string;
    success_300: string;
    success_400: string;
    success_500: string;
    success_600: string;
    success_700: string;
    success_800: string;
    success_900: string;

    info_100: string;
    info_200: string;
    info_300: string;
    info_400: string;
    info_500: string;
    info_600: string;
    info_700: string;
    info_800: string;
    info_900: string;

    warning_100: string;
    warning_200: string;
    warning_300: string;
    warning_400: string;
    warning_500: string;
    warning_600: string;
    warning_700: string;
    warning_800: string;
    warning_900: string;

    danger_100: string;
    danger_200: string;
    danger_300: string;
    danger_400: string;
    danger_500: string;
    danger_600: string;
    danger_700: string;
    danger_800: string;
    danger_900: string;
};

type Theme = 'light' | 'dark';
type VariableKey = keyof ThemeVariables;
type ThemedPalette = Record<VariableKey, string>;

const themeVariableSets: Record<Theme, ThemeVariables> = {
    light: {
        bg_page1: '#F8F9FA',
        bg_page2: '#F8F9FA',
        opaque_bg_page1: 'rgba(248, 249, 250, 0.5)',

        text1: '#212529',
        text2: '#495057',
        text3: '#868E96',
        text4: '#CED4DA',
        border1: '#343A40',
        border2: '#ADB5BD',
        border3: '#DEE2E6',
        border4: '#F1F3F5',
        button_text: '#FFFFFF',

        slight_layer: 'rgba(0,0,0,0.05)',
        opaque_layer: 'rgba(249,249,249,0.85)',

        code_block_wrapper: '#faf6f1',
        input: '#e5e7ec',

        primary_100: '#EEE5FF',
        primary_200: '#DCCCFF',
        primary_300: '#C9B2FF',
        primary_400: '#BA9FFF',
        primary_500: '#A080FF',
        primary_600: '#795DDB',
        primary_700: '#5840B7',
        primary_800: '#3B2893',
        primary_900: '#27187A',
        success_100: '#F2FCD0',
        success_200: '#E1F9A3',
        success_300: '#C7EE73',
        success_400: '#ABDE4E',
        success_500: '#84C91C',
        success_600: '#69AC14',
        success_700: '#52900E',
        success_800: '#3C7408',
        success_900: '#2D6005',
        info_100: '#DBF7FF',
        info_200: '#B8EBFF',
        info_300: '#95DCFF',
        info_400: '#7ACCFF',
        info_500: '#4FB2FF',
        info_600: '#398BDB',
        info_700: '#2768B7',
        info_800: '#194993',
        info_900: '#0F337A',
        warning_100: '#FFF6D5',
        warning_200: '#FFEAAC',
        warning_300: '#FFDC82',
        warning_400: '#FFCD63',
        warning_500: '#FFB630',
        warning_600: '#DB9323',
        warning_700: '#B77318',
        warning_800: '#93560F',
        warning_900: '#7A4209',
        danger_100: '#FFE0D7',
        danger_200: '#FFBAAF',
        danger_300: '#FF8C87',
        danger_400: '#FF6971',
        danger_500: '#FF3855',
        danger_600: '#DB2853',
        danger_700: '#B71C4F',
        danger_800: '#931149',
        danger_900: '#7A0A44',
    },
    dark: {
        bg_page1: '#212529',
        bg_page2: '#292e33',
        opaque_bg_page1: 'rgba(33, 37, 41, 0.5)',

        text1: '#ECECEC',
        text2: '#D9D9D9',
        text3: '#ACACAC',
        text4: '#595959',
        border1: '#E0E0E0',
        border2: '#A0A0A0',
        border3: '#4D4D4D',
        border4: '#2A2A2A',
        button_text: '#121212',

        slight_layer: 'rgba(255,255,255,0.1)',
        opaque_layer: 'rgba(0, 0, 0, 0.85)',

        code_block_wrapper: '#393b46',
        input: '#353A46',

        primary_100: 'rgba(238,229,255,0.87)',
        primary_200: 'rgba(220,204,255,0.87)',
        primary_300: 'rgba(201,178,255,0.87)',
        primary_400: 'rgba(186,159,255,0.87)',
        primary_500: 'rgba(160,128,255,0.87)',
        primary_600: 'rgba(121,93,219,0.87)',
        primary_700: 'rgba(88,64,183,0.87)',
        primary_800: 'rgba(59,40,147,0.87)',
        primary_900: 'rgba(39,24,122,0.87)',
        success_100: 'rgba(242,252,208,0.87)',
        success_200: 'rgba(225,249,163,0.87)',
        success_300: 'rgba(199,238,115,0.87)',
        success_400: 'rgba(171,222,78,0.87)',
        success_500: 'rgba(132,201,28,0.87)',
        success_600: 'rgba(105,172,20,0.87)',
        success_700: 'rgba(82,144,14,0.87)',
        success_800: 'rgba(60,116,8,0.87)',
        success_900: 'rgba(45,96,5,0.87)',
        info_100: 'rgba(219,247,255,0.87)',
        info_200: 'rgba(184,235,255,0.87)',
        info_300: 'rgba(149,220,255,0.87)',
        info_400: 'rgba(122,204,255,0.87)',
        info_500: 'rgba(79,178,255,0.87)',
        info_600: 'rgba(57,139,219,0.87)',
        info_700: 'rgba(39,104,183,0.87)',
        info_800: 'rgba(25,73,147,0.87)',
        info_900: 'rgba(15,51,122,0.87)',
        warning_100: 'rgba(255,246,213,0.87)',
        warning_200: 'rgba(255,234,172,0.87)',
        warning_300: 'rgba(255,220,130,0.87)',
        warning_400: 'rgba(255,205,99,0.87)',
        warning_500: 'rgba(255,182,48,0.87)',
        warning_600: 'rgba(219,147,35,0.87)',
        warning_700: 'rgba(183,115,24,0.87)',
        warning_800: 'rgba(147,86,15,0.87)',
        warning_900: 'rgba(122,66,9,0.87)',
        danger_100: 'rgba(255,224,215,0.87)',
        danger_200: 'rgba(255,186,175,0.87)',
        danger_300: 'rgba(255,140,135,0.87)',
        danger_400: 'rgba(255,105,113,0.87)',
        danger_500: 'rgba(255,56,85,0.87)',
        danger_600: 'rgba(219,40,83,0.87)',
        danger_700: 'rgba(183,28,79,0.87)',
        danger_800: 'rgba(147,17,73,0.87)',
        danger_900: 'rgba(122,10,68,0.87)',
    },
};

const buildCssVariables = (variables: ThemeVariables) => {
    const keys = Object.keys(variables) as (keyof ThemeVariables)[];
    return keys.reduce(
        (acc, key) =>
            acc.concat(`--${key.replace(/_/g, '-')}: ${variables[key]};`, '\n'),
        '',
    );
};

export const themes = {
    light: buildCssVariables(themeVariableSets.light),
    dark: buildCssVariables(themeVariableSets.dark),
};

const cssVar = (name: string) => `var(--${name.replace(/_/g, '-')})`;

const variableKeys = Object.keys(themeVariableSets.light) as VariableKey[];

export const themedPalette: Record<VariableKey, string> = variableKeys.reduce(
    (acc, current) => {
        acc[current] = cssVar(current);
        return acc;
    },
    {} as ThemedPalette,
);
