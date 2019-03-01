/* @flow */
/** @jsx node */

import { node, type ComponentNode } from 'jsx-pragmatic/src';

import { SVGLogo, getLogoColors, type SVGLogoProps } from '../../lib';
import { LOGO_COLOR, LOGO } from '../../constants';
import { type LogoColorMap } from '../../types';

const LOGO_COLORS : LogoColorMap = {
    [ LOGO_COLOR.DEFAULT ]: {
        primary:   '#c8036f',
        secondary: '#71706f'
    },
    [ LOGO_COLOR.WHITE ]: {
        primary:   '#ffffff',
        secondary: '#ffffff'
    }
};

export function EpsLogo({ logoColor } : { logoColor : $Values<typeof LOGO_COLOR> }) : ComponentNode<SVGLogoProps> {
    
    const { primary, secondary } = getLogoColors(LOGO.EPS, LOGO_COLORS, logoColor);

    return (
        <SVGLogo

            name={ LOGO.EPS }
            logoColor={ logoColor }
            render={ () => {
                return (
                    <svg width="52px" height="32px" viewBox="0 0 52 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>Page 1</title>
                        <desc>Created with Sketch.</desc>
                        <defs>
                            <polygon id="path-1" points="0 0.0330469345 12.6787834 0.0330469345 12.6787834 12.7180364 0 12.7180364" />
                            <polygon id="path-3" points="0.0103575649 0.00128879493 1.81575683 0.00128879493 1.81575683 2.2832981 0.0103575649 2.2832981" />
                        </defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="matrix(1.333759, 0, 0, 1.333759, 0.000008, -0.000005)">
                            <g id="SPB_&amp;_AltPay_NewAssets" transform="translate(-100.000000, -159.000000)">
                                <g id="Page-1" transform="translate(100.000000, 159.000000)">
                                    <path d="M30.5812744,12.0000152 L27.4748661,12.0000152 C27.129394,12.0000152 26.8482796,11.7245987 26.8482796,11.3798207 C26.8482796,11.0350427 27.129394,10.7315163 27.4748661,10.7315163 L32.2041612,10.7315163 L32.2041612,8.39747822 L27.4748661,8.39747822 C25.824238,8.39747822 24.4812484,9.74381226 24.4812484,11.3911357 C24.4812484,13.0384592 25.824238,14.3847932 27.4748661,14.3847932 L30.5390793,14.3847932 C30.8846021,14.3847932 31.1657165,14.6590934 31.1657165,15.0038715 C31.1657165,15.3486495 30.8846021,15.6025522 30.5390793,15.6025522 L23.9683147,15.6025522 C23.4104473,16.6680913 22.8679974,17.5814106 21.7668179,18.0380702 L30.5812744,18.0380702 C32.2041612,18.0146791 33.5316827,16.6405903 33.5316827,15.0078292 C33.5316827,13.3751696 32.2041612,12.0234063 30.5812744,12.0000152" id="Fill-1" fill={  secondary } />
                                    <path d="M18.6731848,15.6025522 L16.2795788,15.6025522 L16.2795788,13.1992034 C16.2795788,11.8562182 17.3483005,10.7635839 18.6731848,10.7635839 C19.9980691,10.7635839 21.0759195,11.8562182 21.0759195,13.1992034 C21.0759195,14.5422393 19.9980691,15.6025522 18.6731848,15.6025522 M18.6731848,8.39747822 C16.0403551,8.39747822 13.8959637,10.5557023 13.8959637,13.2076262 L13.8959637,13.3091061 L13.8959637,23.2135459 L16.2795788,23.2135459 L16.2795788,18.0380702 L18.6682147,18.0380702 C21.3010951,18.0380702 23.4379299,15.8511273 23.4379299,13.1992034 C23.4379299,10.5472795 21.3060651,8.39747822 18.6731848,8.39747822" id="Fill-3" fill={  secondary } />
                                    <g id="Group-7" transform="translate(0.000000, 6.842233)">
                                        <mask id="mask-2" fill="#ffffff">
                                            <polygon id="" points="0 0.0330469345 12.6787834 0.0330469345 12.6787834 12.7180364 0 12.7180364" transform="matrix(1, 0, 0, 1, 0, 0)" />
                                        </mask>
                                        <g id="Clip-6" />
                                        <path d="M6.34967672,11.1958376 C4.09589259,11.1958376 2.20112146,9.58905539 1.68833992,7.48994334 C1.68833992,7.48994334 1.54020078,6.7959222 1.54020078,6.3389074 C1.54020078,5.8818926 1.68042835,5.18071712 1.68042835,5.18071712 C2.19686138,3.08678055 4.08935033,1.52754165 6.33943225,1.52754165 C8.98580286,1.52754165 11.1573269,3.67982918 11.1573269,6.32744017 L11.1573269,7.49182072 L4.12642315,7.49182072 C4.54162861,8.30366004 5.38137113,8.76031966 6.34967672,8.76031966 L12.6701111,8.76031966 L12.6787834,1.89423932 C12.6787834,0.870560677 11.8417287,0.0330469345 10.8185493,0.0330469345 L1.86031521,0.0330469345 C0.837135761,0.0330469345 -2.02860858e-05,0.845190698 -2.02860858e-05,1.86886934 L-2.02860858e-05,10.831474 C-2.02860858e-05,11.8551526 0.837135761,12.7180364 1.86031521,12.7180364 L10.8185493,12.7180364 C11.7367482,12.7180364 12.5027001,12.0584169 12.6506871,11.1958376 L6.34967672,11.1958376 Z" id="Fill-5" fill={  primary } mask="url(#mask-2)" />
                                    </g>
                                    <path d="M6.33943732,10.6481099 C5.37483394,10.6481099 4.53595358,11.238926 4.11907451,12.0000254 L8.55990156,12.0000254 C8.1430225,11.238926 7.30419285,10.6481099 6.33943732,10.6481099" id="Fill-8" fill={  primary } />
                                    <path d="M10.396619,3.96072558 C10.396619,1.77327526 8.57959428,1.52219873e-05 6.33823537,1.52219873e-05 C4.134,1.52219873e-05 2.34126788,1.71527949 2.28238752,3.85259873 C2.28142393,3.86163044 2.28218466,3.87040846 2.28218466,3.87969387 L2.28218466,5.0699518 C2.28218466,5.21232812 2.39806892,5.35308076 2.54392588,5.35308076 L4.03703251,5.35308076 C4.18288947,5.35308076 4.31079324,5.21232812 4.31079324,5.0699518 L4.31079324,3.96072558 C4.31079324,2.86839577 5.22011704,1.97968541 6.33940182,1.97968541 C7.45868661,1.97968541 8.3680104,2.86839577 8.3680104,3.96072558 L8.3680104,5.0699518 C8.3680104,5.21232812 8.486329,5.35308076 8.63218596,5.35308076 L10.1253433,5.35308076 C10.2712003,5.35308076 10.396619,5.21232812 10.396619,5.0699518 L10.396619,3.96072558 Z" id="Fill-10" fill={  primary } />
                                    <path d="M20.7598572,20.7474063 C20.7598572,20.8523366 20.8407987,20.9002858 20.9277753,20.9002858 C21.0206856,20.9002858 21.1436192,20.8253429 21.1436192,20.687381 C21.1436192,20.5884888 21.0716036,20.5345015 20.9907129,20.5345015 C20.8827909,20.5345015 20.7598572,20.6034063 20.7598572,20.7474063 Z M20.0403098,20.7504 C20.0403098,20.8523366 20.1183098,20.9002858 20.2022434,20.9002858 C20.3071732,20.9002858 20.4211303,20.8253429 20.4211303,20.6843873 C20.4211303,20.5854444 20.3550991,20.5345015 20.2681732,20.5345015 C20.160302,20.5345015 20.0403098,20.6034063 20.0403098,20.7504 Z M21.3474437,21.133233 L21.1315997,22.3559645 C21.0236778,22.9739772 20.6189196,23.2570047 20.0702824,23.2570047 C19.6056296,23.2570047 19.2458559,22.9539856 19.3508364,22.3569793 L19.5666296,21.133233 L19.8994736,21.133233 L19.6835282,22.3559645 C19.6175984,22.7370723 19.7885087,22.9540364 20.1122746,22.9540364 C20.4450679,22.9540364 20.7298845,22.7559983 20.7988065,22.3569793 L21.0146505,21.133233 L21.3474437,21.133233 Z" id="Fill-12" fill={  secondary } />
                                    <path d="M21.9179189,22.5590867 C21.9059501,22.8050233 22.0647901,22.9639915 22.2956458,22.9639915 C22.5864468,22.9639915 22.8682205,22.7389598 22.8862244,22.3971247 C22.898244,22.1481438 22.736361,22.0011501 22.511439,22.0011501 C22.2236302,22.0011501 21.9358213,22.2321691 21.9179189,22.5590867 Z M22.1517667,21.1331924 L22.0018525,21.9781142 C22.1307199,21.8042283 22.388556,21.7122368 22.5684429,21.7122368 C22.9401854,21.7122368 23.1980216,21.9302156 23.1980216,22.3350698 C23.1980216,22.9079746 22.7992479,23.2524989 22.2896614,23.2524989 C22.0917706,23.2524989 21.9238525,23.178926 21.8219657,22.9930148 L21.7650125,23.2135307 L21.4741607,23.2135307 L21.8429111,21.1331924 L22.1517667,21.1331924 Z" id="Fill-14" fill={  secondary } />
                                    <path d="M24.7516112,22.3509666 C24.7755995,22.0972668 24.6256853,21.994011 24.3768257,21.994011 C24.1520559,21.994011 23.9451886,22.0972668 23.8551691,22.3509666 L24.7516112,22.3509666 Z M23.804251,22.6046664 C23.7922315,22.8076262 23.9511222,22.9733429 24.2209779,22.9733429 C24.3708921,22.9733429 24.5686814,22.9146875 24.6766034,22.812751 L24.8445215,23.006882 C24.6616931,23.1747298 24.3918375,23.2582985 24.1640247,23.2582985 C23.7383212,23.2582985 23.4894616,23.0032288 23.4894616,22.6132922 C23.4894616,22.0943746 23.8971612,21.7076854 24.4188179,21.7076854 C24.895541,21.7076854 25.1653459,21.9957869 25.0034629,22.6046664 L23.804251,22.6046664 Z" id="Fill-16" fill={  secondary } />
                                    <path d="M25.8283814,21.7420871 L25.8133697,21.9376896 C25.9573502,21.7485311 26.131202,21.7099687 26.290042,21.7099687 C26.4339718,21.7099687 26.5628391,21.7610638 26.6318118,21.8360068 L26.4459913,22.1059941 C26.3800108,22.0461717 26.314081,22.0161844 26.2001239,22.0161844 C25.9872215,22.0161844 25.7774633,22.1438968 25.729436,22.4168778 L25.5885999,23.2135459 L25.2797442,23.2135459 L25.5405726,21.7420871 L25.8283814,21.7420871 Z" id="Fill-18" fill={  secondary } />
                                    <polygon id="Fill-20" fill={  secondary } points="28.1192941 21.7420871 28.275142 22.9057573 28.8387909 21.7420871 29.1835529 21.7420871 28.4100952 23.2135459 28.0473293 23.2135459 27.900458 22.2428397 27.6635672 22.7250723 27.4057818 23.2135459 27.0460081 23.2135459 26.7851797 21.7420871 27.1329847 21.7420871 27.285891 22.9057573 27.8524307 21.7420871" />
                                    <path d="M30.5274503,22.3509666 C30.5513879,22.0972668 30.4015244,21.994011 30.1526649,21.994011 C29.9278951,21.994011 29.7210277,22.0972668 29.6310082,22.3509666 L30.5274503,22.3509666 Z M29.5800901,22.6046664 C29.5680706,22.8076262 29.7269614,22.9733429 29.996817,22.9733429 C30.1467312,22.9733429 30.3445205,22.9146875 30.4524425,22.812751 L30.6203606,23.006882 C30.4375322,23.1747298 30.1676766,23.2582985 29.9398638,23.2582985 C29.5141603,23.2582985 29.2653008,23.0032288 29.2653008,22.6132922 C29.2653008,22.0943746 29.6730004,21.7076854 30.1946571,21.7076854 C30.6713801,21.7076854 30.941185,21.9957869 30.7793021,22.6046664 L29.5800901,22.6046664 Z" id="Fill-22" fill={  secondary } />
                                    <path d="M31.3524449,21.3412364 C31.3524449,21.4461666 31.4304449,21.5003569 31.5144293,21.5003569 C31.63432,21.5003569 31.7452342,21.4222173 31.7452342,21.2753759 C31.7452342,21.1762808 31.6702264,21.119249 31.5892849,21.119249 C31.4783707,21.119249 31.3524449,21.1913505 31.3524449,21.3412364 Z M31.625242,21.742082 L31.3645151,23.2135408 L31.0556594,23.2135408 L31.3164878,21.742082 L31.625242,21.742082 Z" id="Fill-24" fill={  secondary } />
                                    <path d="M32.9955925,22.1060753 C32.8996393,21.9981006 32.7767563,21.9681133 32.629885,21.9681133 C32.4259085,21.9681133 32.2820801,22.0371704 32.2820801,22.1661006 C32.2820801,22.2740753 32.398928,22.3191831 32.5728811,22.3341006 C32.8426861,22.3580499 33.1874481,22.4481133 33.1154832,22.8290182 C33.0645651,23.1049421 32.7887251,23.266904 32.4049631,23.266904 C32.1651815,23.266904 31.9342752,23.2129167 31.7784273,22.9939738 L31.9792596,22.7750309 C32.0901737,22.9279104 32.2850723,22.9909801 32.4589241,22.9939738 C32.6057953,22.9939738 32.7797485,22.9399865 32.806729,22.8020245 C32.8337095,22.6700499 32.7167602,22.619107 32.5009163,22.5979992 C32.2490645,22.5739992 31.9733259,22.481145 31.9733259,22.202126 C31.9733259,21.833145 32.3719475,21.7042148 32.6718265,21.7042148 C32.8996393,21.7042148 33.0675573,21.7551577 33.2055027,21.9022021 L32.9955925,22.1060753 Z" id="Fill-26" fill={  secondary } />
                                    <path d="M33.9703034,21.7420871 L33.8294672,22.534493 C33.7844828,22.7865184 33.8984399,22.9606579 34.1562254,22.9606579 C34.3990498,22.9606579 34.6059172,22.7593725 34.6478079,22.5134359 L34.7827104,21.7420871 L35.0915153,21.7420871 L34.8307884,23.2135459 L34.5519562,23.2135459 L34.5729016,23.0003366 C34.3990498,23.1652922 34.2280888,23.2430765 34.0213229,23.2430765 C33.658557,23.2430765 33.442713,22.982882 33.5206116,22.5361167 L33.6615492,21.7420871 L33.9703034,21.7420871 Z" id="Fill-28" fill={  secondary } />
                                    <path d="M36.4472345,23.2135459 L36.588172,22.4259603 C36.633055,22.1709412 36.5462813,22.0020279 36.2644061,22.0020279 C36.0185895,22.0020279 35.8116207,22.199863 35.7697299,22.4428059 L35.6348274,23.2135459 L35.3260225,23.2135459 L35.5869016,21.7420871 L35.8686246,21.7420871 L35.8476792,21.957123 C36.0185895,21.7981548 36.1953827,21.7197615 36.3872384,21.7197615 C36.7470121,21.7197615 36.9809614,21.9701632 36.9000199,22.4231696 L36.7590823,23.2135459 L36.4472345,23.2135459 Z" id="Fill-30" fill={  secondary } />
                                    <g id="Group-34" transform="translate(37.174252, 21.709040)">
                                        <mask id="mask-4" fill="white">
                                            <polygon id="" points="0.0103575649 0.00128879493 1.81575683 0.00128879493 1.81575683 2.2832981 0.0103575649 2.2832981" transform="matrix(1, 0, 0, 1, 0, 0)" />
                                        </mask>
                                        <g id="Clip-33" />
                                        <path d="M0.406639662,0.85909852 C0.406639662,1.11092093 0.571514824,1.26400338 0.808507022,1.26400338 C1.44691014,1.26400338 1.61787113,0.2832 0.979214434,0.2832 C0.676444603,0.2832 0.406639662,0.508028753 0.406639662,0.85909852 Z M0.319663069,1.70747061 C0.298717685,1.91043044 0.45456554,1.9925277 0.715495319,1.9925277 C0.943358778,1.9925277 1.18922614,1.86522114 1.24617932,1.54134799 L1.291113,1.288663 C1.15621053,1.4776186 0.910343173,1.55220634 0.72756554,1.55220634 C0.349686476,1.55220634 0.085916645,1.32717463 0.085916645,0.91912389 C0.085916645,0.337339535 0.517553836,0.00128879493 1.00619493,0.00128879493 C1.21316372,0.00128879493 1.39903498,0.099572093 1.46501547,0.267572093 L1.51598427,0.0330520085 L1.8157619,0.0330520085 L1.55787503,1.54824863 C1.46202328,2.1092296 1.04524564,2.28331839 0.664526528,2.28331839 C0.208748895,2.28331839 -0.0429507152,2.06265032 0.0198854356,1.70747061 L0.319663069,1.70747061 Z" id="Fill-32" fill={  secondary } mask="url(#mask-4)" />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                );
            } }
        />
    );
}
