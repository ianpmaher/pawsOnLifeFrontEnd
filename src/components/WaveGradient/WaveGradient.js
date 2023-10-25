const WaveGradient = () => {
    return (
        <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 590"
            xmlns="http://www.w3.org/2000/svg"
            class="transition duration-300 ease-in-out delay-150"
        >
            <defs>
                <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="100%" >
                    <stop offset="20%" stop-color="#3b3e60"></stop>
                    <stop offset="40%" stop-color="#4d908e"></stop>
                    <stop offset="60%" stop-color="#283618"></stop>
                    <stop offset="80%" stop-color="#43aa8b"></stop>
                </linearGradient>
            </defs>
            <path
                d="M 0,600 C 0,600 0,200 0,200 C 131.90430622009566,184.32535885167465 263.8086124401913,168.6507177033493 338,187 C 412.1913875598087,205.3492822966507 428.66985645933016,257.72248803827745 525,250 C 621.3301435406698,242.27751196172252 797.5119617224882,174.45933014354065 903,168 C 1008.4880382775118,161.54066985645935 1043.2822966507176,216.4401913875598 1121,232 C 1198.7177033492824,247.5598086124402 1319.3588516746413,223.7799043062201 1440,200 C 1440,200 1440,600 1440,600 Z"
                stroke="none"
                stroke-width="0"
                fill="url(#gradient)"
                fill-opacity="1"
                class="transition-all duration-300 ease-in-out delay-150 path-0"
            ></path>
            {/* <defs>
                <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                    <stop offset="20%" stop-color="#3b3e60"></stop>
                    <stop offset="40%" stop-color="#4d908e"></stop>
                    <stop offset="60%" stop-color="#283618"></stop>
                    <stop offset="80%" stop-color="#43aa8b"></stop>
                </linearGradient>
            </defs>
            <path
                d="M 0,600 C 0,600 0,400 0,400 C 92.36363636363635,365.4736842105263 184.7272727272727,330.9473684210526 283,333 C 381.2727272727273,335.0526315789474 485.4545454545455,373.68421052631584 590,374 C 694.5454545454545,374.31578947368416 799.4545454545455,336.3157894736843 885,343 C 970.5454545454545,349.6842105263157 1036.7272727272727,401.05263157894734 1126,418 C 1215.2727272727273,434.94736842105266 1327.6363636363635,417.47368421052636 1440,400 C 1440,400 1440,600 1440,600 Z"
                stroke="none"
                stroke-width="0"
                fill="url(#gradient)"
                fill-opacity="1"
                class="transition-all duration-300 ease-in-out delay-150 path-1"
            ></path> */}
        </svg>
    );
};

export default WaveGradient

