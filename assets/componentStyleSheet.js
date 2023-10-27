import { StyleSheet } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';
import { useFonts } from 'expo-font';

import {
    NotoSans_100Thin,
    NotoSans_100Thin_Italic,
    NotoSans_200ExtraLight,
    NotoSans_200ExtraLight_Italic,
    NotoSans_300Light,
    NotoSans_300Light_Italic,
    NotoSans_400Regular,
    NotoSans_400Regular_Italic,
    NotoSans_500Medium,
    NotoSans_500Medium_Italic,
    NotoSans_600SemiBold,
    NotoSans_600SemiBold_Italic,
    NotoSans_700Bold,
    NotoSans_700Bold_Italic,
    NotoSans_800ExtraBold,
    NotoSans_800ExtraBold_Italic,
    NotoSans_900Black,
    NotoSans_900Black_Italic,
} from '@expo-google-fonts/noto-sans';

import {
    Signika_300Light,
    Signika_400Regular,
    Signika_500Medium,
    Signika_600SemiBold,
    Signika_700Bold,
} from '@expo-google-fonts/signika';

export const useCustomFonts = () => {
    return useFonts({
        Signika_300Light,
        Signika_400Regular,
        Signika_500Medium,
        Signika_600SemiBold,
        Signika_700Bold,
        NotoSans_100Thin,
        NotoSans_100Thin_Italic,
        NotoSans_200ExtraLight,
        NotoSans_200ExtraLight_Italic,
        NotoSans_300Light,
        NotoSans_300Light_Italic,
        NotoSans_400Regular,
        NotoSans_400Regular_Italic,
        NotoSans_500Medium,
        NotoSans_500Medium_Italic,
        NotoSans_600SemiBold,
        NotoSans_600SemiBold_Italic,
        NotoSans_700Bold,
        NotoSans_700Bold_Italic,
        NotoSans_800ExtraBold,
        NotoSans_800ExtraBold_Italic,
        NotoSans_900Black,
        NotoSans_900Black_Italic,
    });
};

export const colorStyle = StyleSheet.create({
    white: '#FBFBFB',
    grey: '#ADADAD',
    darkGray: '#383838',
    black: '#3F3F3F',
    blue1: '#546BD7',
    blue2: '#715FDC',
    blue3: '#EDF0FF',
    blue4: '#30418F',
    tan1: '#EDF0FF',
    tan2: '#FFE7AB',
});

const componentStyle = StyleSheet.create({

    // font
    Oswald_200ExtraLight: {
        fontFamily: 'Signika_300Light',
    },
    Oswald_300Light: {
        fontFamily: 'Signika_300Light',
    },
    Oswald_400Regular: {
        fontFamily: 'Signika_400Regular',
    },
    Oswald_500Medium: {
        fontFamily: 'Signika_500Medium',
    },
    Oswald_600SemiBold: {
        fontFamily: 'Signika_600SemiBold',
    },
    Oswald_700Bold: {
        fontFamily: 'Signika_700Bold',
    },
    Montserrat_100Thin: {
        fontFamily: 'NotoSans_100Thin'
    },
    Montserrat_200ExtraLight: {
        fontFamily: 'NotoSans_200ExtraLight'
    },
    Montserrat_300Light: {
        fontFamily: 'NotoSans_300Light'
    },
    Montserrat_400Regular: {
        fontFamily: 'NotoSans_400Regular'
    },
    Montserrat_500Medium: {
        fontFamily: 'NotoSans_500Medium'
    },
    Montserrat_600SemiBold: {
        fontFamily: 'NotoSans_600SemiBold'
    },
    Montserrat_700Bold: {
        fontFamily: 'NotoSans_700Bold'
    },
    Montserrat_800ExtraBold: {
        fontFamily: 'NotoSans_800ExtraBold'
    },
    Montserrat_900Black: {
        fontFamily: 'NotoSans_900Black'
    },
    Montserrat_100Thin_Italic: {
        fontFamily: 'NotoSans_100Thin_Italic'
    },
    Montserrat_200ExtraLight_Italic: {
        fontFamily: 'NotoSans_200ExtraLight_Italic'
    },
    Montserrat_300Light_Italic: {
        fontFamily: 'NotoSans_300Light_Italic'
    },
    Montserrat_400Regular_Italic: {
        fontFamily: 'NotoSans_400Regular_Italic'
    },
    Montserrat_500Medium_Italic: {
        fontFamily: 'NotoSans_500Medium_Italic'
    },
    Montserrat_600SemiBold_Italic: {
        fontFamily: 'NotoSans_600SemiBold_Italic'
    },
    Montserrat_700Bold_Italic: {
        fontFamily: 'NotoSans_700Bold_Italic'
    },
    Montserrat_800ExtraBold_Italic: {
        fontFamily: 'NotoSans_800ExtraBold_Italic'
    },
    Montserrat_900Black_Italic: {
        fontFamily: 'NotoSans_900Black_Italic'
    },

    // text
    Os32Bold: {
        fontFamily: 'Signika_700Bold',
        fontSize: vw(8),
    },
    Os24Bold: {
        fontFamily: 'Signika_700Bold',
        fontSize: vw(6),
    },
    Os20Bold: {
        fontFamily: 'Signika_700Bold',
        fontSize: vw(5),
    },
    Os16Bold: {
        fontFamily: 'Signika_700Bold',
        fontSize: vw(4),
    },
    Os14Bold: {
        fontFamily: 'Signika_700Bold',
        fontSize: vw(3.5),
    },
    Os12Bold: {
        fontFamily: 'Signika_700Bold',
        fontSize: vw(3),
    },
    Mon10Bold: {
        fontFamily: 'NotoSans_700Bold',
        fontSize: vw(2.5),
    },
    Mon12Bold: {
        fontFamily: 'NotoSans_700Bold',
        fontSize: vw(3),
    },
    Mon14Bold: {
        fontFamily: 'NotoSans_700Bold',
        fontSize: vw(3.5),
    },
    Mon16Bold: {
        fontFamily: 'NotoSans_700Bold',
        fontSize: vw(4),
    },
    Mon18Bold: {
        fontFamily: 'NotoSans_700Bold',
        fontSize: vw(4.5),
    },
    Mon20Bold: {
        fontFamily: 'NotoSans_700Bold',
        fontSize: vw(5),
    },
    Mon10Reg: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: vw(2.5),
    },
    Mon12Reg: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: vw(3),
    },
    Mon14Reg: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: vw(3.5),
    },
    Mon16Reg: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: vw(4),
    },

    // shadow
    shadowW0H1: {
        shadowColor: 'black',
        shadowOffset: { width: vw(0), height: vw(1) },
        shadowOpacity: 0.25,
    },

    shadowW1H1: {
        shadowColor: 'black',
        shadowOffset: { width: vw(1), height: vw(1) },
        shadowOpacity: 0.25,
    },

    shadowW0H1B1S0: {
        shadowColor: 'black',
        shadowOffset: { width: vw(0), height: vw(1) },
        shadowOpacity: 0.25,
        shadowRadius: vw(1),
    },

    shadowBtn: {
        borderBottomColor: colorStyle.main4,
        borderBottomWidth: vw(0.5),
        backgroundColor: colorStyle.main2,
    },

    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: vw(4),
        width: '90%',
        marginLeft: '5%'
    },

    loginInput: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: vw(2.5),
        borderRadius: vw(4),
        paddingHorizontal: vw(5),
        width: '100%',
    },

    loginInputText: {
        fontSize: vw(3.5),
        lineHeight: vw(4.5),
        paddingVertical: vw(4),
        paddingHorizontal: vw(2),
        width: '100%',
        height: '100%',
    },

    submitBtn: {
        borderWidth: 2,
        borderRadius: vw(4),
        width: '90%',
        marginLeft: '5%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto'
    },

    submitBtnText: {
        fontSize: vw(4.5),
        lineHeight: vw(4.5),
        paddingVertical: vw(4.5),
    },

});

export default componentStyle;