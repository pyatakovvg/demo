
import * as consts from "./constants";


const button = {
  font_family: consts.FONT_FAMILY_COMMON,
  border_radius: consts.BORDER_RADIUS_SMALL,
  disabled: {
    color: consts.COLOR_GRAY_DARK,
    background: consts.COLOR_GRAY,
  },
  mode: {
    primary: {
      default: {
        color: consts.COLOR_WHITE,
        background: consts.COLOR_PRIMARY,
      },
      hover: {
        color: consts.COLOR_WHITE,
        background: consts.COLOR_PRIMARY_LIGHT,
      },
      active: {
        color: consts.COLOR_WHITE,
        background: consts.COLOR_PRIMARY_DARK,
      },
    },
    success: {
      default: {
        color: consts.COLOR_WHITE,
        background: consts.COLOR_SUCCESS,
      },
      hover: {
        color: consts.COLOR_WHITE,
        background: consts.COLOR_SUCCESS_LIGHT,
      },
      active: {
        color: consts.COLOR_WHITE,
        background: consts.COLOR_SUCCESS_DARK,
      },
    },
  },
  size: {
    small: {
      font_size: '11px',
      padding: '8px 12px',
      font_weight: consts.FONT_WEIGHT_LIGHT,
    },
    middle: {
      font_size: '14px',
      padding: '14px 24px',
      font_weight: consts.FONT_WEIGHT_MEDIUM,
    },
    large: {
      font_size: '16px',
      padding: '16px 24px',
      font_weight: consts.FONT_WEIGHT_MEDIUM,
    },
  },
};

export default button;