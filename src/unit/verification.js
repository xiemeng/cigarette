import { WSA_E_NO_MORE } from "constants";

/* 手机号 */
const verificationPhone = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/

/* 手机号2 */
const verificationPhone2 = /^((\(\d{3}\))|(\d{3}\-))?1\d{10}/

/* 西班牙手机(6开头，9位) */
const verificationPhone3 = /^([6|7|9]{1}(\d+){8})$/

/* 座机 */
const verificationLandline = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/

/* 邮箱 */
const verificationEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/   
   
/* more... */