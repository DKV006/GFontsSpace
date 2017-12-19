
import { fetchGoolgeFonts, mappedCategoryArray } from './../../Mapper';
import _cloneDeep from 'lodash/cloneDeep';

export default {
    fetchData: (dispatch) => {
        return dispatch => {
            return fetchGoolgeFonts().then((res) => {
                dispatch({
                    type: "FETCHED_FONTS",
                    payload: {
                        fonts: res.fonts,
                        availableCategories: mappedCategoryArray(res.categories),
                        availableFontFamilies: res.fonts["All"]
                    }
                });
            });
        }
    },

    categoryChange: (dispatch, fonts, catagoires, selectedCategory) => {
        catagoires.map(item => item.isActive = item.name === selectedCategory ? true : false );

        return dispatch => {
            dispatch({
                type: "CATEGORY_CHANGED",
                payload: {
                    availableCategories: catagoires,
                    availableFontFamilies: fonts[selectedCategory],
                }
            });
        }
    },

    changeFontFamily: (dispatch, fontFamily, userSelectedTextBox, availableFontFamilies) =>{
        console.log(",", availableFontFamilies)
        return dispatch => {
            dispatch({
                type: "FONTFAMLIY_CHANGED",
                payload: {
                    fontFamily: fontFamily.value,
                    userSelectedTextBox: userSelectedTextBox,
                    availableFontVariants: availableFontFamilies.filter(x => x.value === fontFamily.value)[0].variants
                }
            });
        }
    },

    changeTextBox: (dispatch, activeTextBox) => {
        return dispatch => {
            dispatch({
                type: "TEXTBOX_CHANGED",
                payload: {
                    userSelectedTextBox: activeTextBox,
                }
            });
        }
    },

    changeTextColor: (dispatch, color, userSelectedTextBox) => {
        return dispatch => {
            dispatch({
                type: "TEXTCOLOR_CHANGED",
                payload: {
                    color: color.rgb,
                    userSelectedTextBox: userSelectedTextBox,
                }
            });
        }
    },

    changeFontSize: (dispatch, fontSize, userSelectedTextBox) => {
        return dispatch => {
            dispatch({
                type: "FONTSIZE_CHANGED",
                payload: {
                    fontSize: fontSize,
                    userSelectedTextBox: userSelectedTextBox,
                }
            });
        }
    },

    addTextBox: (dispatch, userSelectedTextBox) =>{
        return dispatch => {
            dispatch({
                type: "NEWTEXTBOX_ADDED",
                payload: {
                    userSelectedTextBox: userSelectedTextBox,
                }
            });
        }
    }
}