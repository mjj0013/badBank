const bank = {
  column1: "M -9.25 6.737 c 0 -4.266 0 -8.52 0 -12.774 c -0.935 0 -1.87 0 -2.805 0 c -0.023 4.254 -0.023 8.508 -0.023 12.762 c 0.9427 0 1.8853 0 2.828 0 c 0 -12.254 0 -12.508 0 -12.762",
  column2: "M -5.078 -6.037 c 0 4.254 0 8.508 0 12.762 c 0.9427 0 1.8853 0 2.828 0 c 0 -4.254 0 -8.508 0 -12.762 c -0.9427 0 -1.8853 0 -2.828 0",
  column3: " M 2.078 -6.037 c 0 4.254 0 8.508 0 12.762 c 0.9427 -0 1.8853 -0 2.828 0 c 0 -4.254 0 -8.508 0 -12.762 c -0.9427 0 -1.8853 0 -2.828 0",
  column4: " M 9.078 -6.037 c 0 4.254 0 8.508 0 12.762 c 0.9427 -0 1.8853 -0 2.828 0 c 0 -4.254 0 -8.508 0 -12.762 c -0.9427 0 -1.8853 0 -2.828 0",

  ceiling: "M -11.996 -6.026 c 8.0187 -0.0073 16.0373 -0.0147 24.056 -0.022 c -0.0513 0.0047 -0.1027 0.0093 -0.154 0.014 c 1.396 0.048 1.339 -1.54 -0.067 -1.464 c -8.084 -0.0193 -16.168 -0.0387 -24.252 -0.058 c 0.0007 0.0003 0.0013 0.0007 0.002 0.001 c -1.337 -0.031 -1.227 1.659 0.26 1.533",
  floor:"M -12.503 9.477 c 8.395 0 11.06 0 12.5 0 c 8.61 0 4.329 0 12.889 0 c 1.845 -0.065 1.782 -2.792 0 -2.78 c -4.585 0.032 -16.377 0.032 -25.363 0.038 c -1.841 -0.044 -2.031 2.683 -0.026 2.742",
  foundation:"M -13.478 10.407 c -2.161 -0.266 -2.199 3.07 0 2.687 c 8.695 0.083 18.225 0.083 26.587 0.083 c 2.665 -0.116 2.394 -2.74 0 -2.742 c -3.697 0 -8.394 0 -13.091 0 c -4.7693 0.007 -9.5387 0.014 -13.478 -0.03",
  roof: "M 10.643 -12.547 c -1.58 -0.817 -5.885 -2.997 -10.613 -5.429 l -0.065 -0.001 c -6.1 3.055 -10.414 5.212 -13.873 6.964 l 0 0 a 1 1 0 0 0 0.494 2.696 l 26.928 -0.046 a 1 1 0 0 0 0.474 -2.359 l -3.345 -1.825"


}


//withdraw symbol
const withdraw = {

  column1: "M -0.2 1.3567 c 0.771 3.0853 3.987 1.3943 3.6168 0.317 c -0.2111 -0.0211 -0.4221 -0.0422 -0.6332 -0.0633 c -0.0537 0.99 -1.7178 1.3833 -2.2582 0.1087 c -0.012 -0.0965 -0.024 -0.193 -0.036 -0.2895 c -0.2305 -0.0232 -0.4609 -0.0464 -0.6914 -0.0696",
  column2: "M 0.2 -0.7 c 0.8538 0.9835 2.7222 0.9497 2.613 2.289 c 0.181 0.084 0.431 0.131 0.652 0.0695 c -0.0272 -2.0257 -2.7132 -1.9897 -2.9482 -2.8035 c -0.1658 -0.0031 -0.8558 -0.466 -0.3466 0.47",
  column4: "M 3.4215 -2.0527 c -0.9385 -2.3883 -4.2975 -0.9183 -3.4185 0.8862 c 0.1658 0.003 0.3315 0.006 0.4973 0.009 c -0.2945 -1.8502 2.2868 -1.7848 2.475 -0.6565 c 0.1537 -0.0061 0.5927 0.077 0.4417 -0.233",
  column3: "M 1.4513 -3.9255 c 0 2.5747 0 5.1493 0 7.724 c 0.0918 0 0.1837 0 0.2755 0 c 0 -2.5744 0 -5.1489 0 -7.7233 c -0.0921 -0.0014 -0.1841 -0.0029 -0.2762 -0.0043",
  foundation:"M -14.454 0.228 c -0.4052 -0.0499 -0.4123 0.5756 0 0.5038 c 1.6303 0.0156 3.4172 0.0156 4.9851 0.0156 c 0.4997 -0.0218 0.4489 -0.5138 0 -0.5141 c -0.6932 0 -1.5739 0 -2.4546 0 c -0.8942 0.0013 -1.7885 0.0026 -2.4384 0.0114",
  floor:"M -15.3156 -0.3426 c 1.5741 0 2.0737 0 2.3438 0 c 1.6144 0 0.8117 0 2.4167 0 c 0.3459 -0.0122 0.3341 -0.5235 0 -0.5212 c -0.8597 0.006 -3.0707 0.006 -4.7556 0.0071 c -0.3452 -0.0083 -0.3808 0.5031 -0.0292 0.5121",
  roof:"M 12.008 4.492 c 0.3475 0.126 0.595 -0.196 0.496 -0.4435 l 0.0245 -8.593 c -0.028 -0.1225 -0.0365 -0.4465 -0.531 -0.438 l -19.5025 -0.0075 a 0.5 0.5 90 0 0 -0.52 0.4955 l 0.025 8.5185 a 0.5 0.5 90 0 0 0.4705 0.52 l 19.5375 -0.046",
  ceiling: "M 1.375 -4.922 c -4.719 0.182 -6.494 8.995 0.75 9.375 c 5.497 -0.358 5.608 -9.459 -0.75 -9.375 c 0 0 0 0 0 0.7813 c 4.604 -0.3773 6.002 6.7257 0.75 7.8125 c -6.223 -0.2648 -4.492 -7.6788 -0.75 -7.8125 c 0 -0.7813 0 -0.7813 0 -0.7813 ",
  borderRight: "M -7.3875 3.933 c 0.3375 0.098 17.345 0.223 19.1125 0.091 c -0.1212 -5.606 -0.0525 -7.359 -0.03 -8.509 c 0.0238 0.347 -0.57 0.201 -0.89 0.328 c 0.0187 3.939 0 -0.215 0.1946 7.8383 c -8.9654 0.0023 -18.2946 -0.2173 -18.4534 -0.2553",
  borderLeft: "M -6.8149 -4.0052 c 15.3613 -0.2978 18.7163 0.6702 18.5788 -0.4618 c -4.5412 -0.018 -14.3788 -0.018 -19.2425 -0.018 c 0 0.0497 0 2.751 0 8.271 c 0.3326 0 0.3926 0 0.6637 0 c 0 -0.295 0 -8.014 0 -7.7912"
}


//balance symbol
//foundation & column4  <=> left bucket & right bucket
//column2  <=> rod
//roof <=> base of balance
//ceiling <=> arm/fulcrum of balance
const balance = {
  ceiling:"M 0 -15 c -2.72 -0.007 -2.72 4.001 0 4 c 2.72 0 2.72 -4.028 0 -4 c 0.024 -0.657 -0.019 -1.184 0 -2 c 5.019 0.001 4.996 7.992 0 8 c -4.987 0.016 -5.034 -7.975 0 -8 c 0 0.418 -0.002 1.507 0 2",
  column1:"M -11.296 -9.44 c -1.496 -0.447 -7.548 7.833 -7.4464 12.1272 c 0 2.5856 3.3544 4.6876 7.5 4.6876 c -0.0067 -1.8816 -0.0133 -3.7632 -0.02 -5.6448 c -1.433 0.011 -2.866 0.022 -4.299 0.033 c 2.7284 -5.678 5.1144 -8.032 4.2644 -11.144",
  column2:"M -11.337 7.365 c 14.495 -1.432 1.717 -17.125 0.016 -16.809 c -0.405 2.374 1.333 5.099 4.0898 11.194 c -1.3579 -0.0067 -2.7159 -0.0133 -4.0738 -0.02 c -0.0107 1.8673 -0.0213 3.7347 -0.032 5.602",
  column3:"M 11.296 -9.44 c -13.287 12.365 -4.092 16.8148 0.0536 16.8148 c -0.0067 -1.8816 -0.0133 -3.7632 -0.02 -5.6448 c -1.433 0.011 -2.866 0.022 -4.299 0.033 c 2.9464 -5.786 5.1144 -8.032 4.2644 -11.144",
  column4:"M 11.337 7.365 c 15.42 -0.413 1.717 -17.125 0.016 -16.809 c -0.405 2.374 1.254 5.744 4.0898 11.194 c -1.3579 -0.0067 -2.7159 -0.0133 -4.0738 -0.02 c -0.0107 1.8673 -0.0213 3.7347 -0.032 5.602",
  foundation:"M -1.911 9.251 c -2.7941 0 -5.5881 0 -8.3822 0 c -5.2868 2.092 -2.3928 3.75 -1.8752 3.75 c 8.1251 0 16.2501 0 24.3752 0 c 3.9832 -0.82 -0.322 -3.751 -1.9558 -3.761 c -4.0333 0.0107 -8.0951 0.0113 -12.157 0.012",
  floor:"M -1.963 -15.471 c 0 8.24 0 16.48 0 24.72 c 0.2213 0.0007 0.4427 0.0013 0.664 0.002 c 0.6599 -0.007 1.9269 -0.007 3.1938 -0.007 c 0 -8.2383 0 -16.4767 0 -24.715 c -1.2859 0 -2.5719 0 -3.8578 0",
  roof:"M 9.296 -15.116 c -2.943 0.053 -4.587 0.026 -9.36 0.053 l 0 -0.053 c -6.205 0.026 -8.379 0 -11.11 0.026 l -0.08 0 a 1 1 0 0 0 -0.079 3.659 l 22.592 0.053 a 1 1 0 0 0 0.053 -3.738 l -1.989 0.026",


}



//create account symbol: Windows user logo with plus sign
const createAccount = {
  ceiling:"M 0 -6 c -2.72 -0.007 -2.72 4.001 0 4 c 2.72 0 2.72 -4.028 0 -4 c 0.024 -0.657 -0.019 -1.184 0 -2 c 5.019 0.001 4.996 7.992 0 8 c -4.987 0.016 -5.034 -7.975 0 -8 c 0 0.418 -0.002 1.507 0 2", //head
  column1:"M -10.077 -1.722 c -1.673 0 -2.174 -0.013 -3.003 0 c 0 0.415 0.014 1.355 0.014 2 c 1.393 -0.018 2.599 -0.012 4.993 -0.018 c 0.6703 0 1.3407 0 2.011 0 c -0.012 -0.757 0 -1.46 0 -1.986", 
  column2: "M -5.098 -1.746 c -1.1747 0.02 -2.172 0.017 -2.972 0.02 c 0.0013 0.664 0.0027 1.328 0.004 1.992 c 1.73 -0.0073 2.27 0.007 2.985 0.015 c -0.007 -0.657 -0.017 -1.358 -0.022 -2.017",
  roof: "M -8.077 0.278 c 0.015 -0.57 0 -1.067 -0.014 -2.004 l -1.806 -0.044 c -0.158 -0.007 -0.171 0.082 -0.144 0.124 l -0.007 0.082 a 1 1 0 0 0 0 0.117 l 0.016 1.602 a 1 1 0 0 0 0.086 0.107 l 1.869 0.016",
  column3: "M -10.045 -4.712 c 0 1.162 -0.043 1.958 -0.043 3.034 c 0.538 -0.064 1.463 -0.064 1.958 -0.043 c 0.043 -1.141 0.043 -2.001 0.022 -2.991 c -0.323 0 -1.27 0 -1.98 0",     //top of plus
  foundation:"M -10.003 3.276 c 1.498 -0.008 0.599 0 1.923 -0.002 c 0 -0.867 -0.005 -1.302 -0.005 -1.959 c 0.006 -0.31 0.006 -0.55 0.01 -1.05 c -0.501 -0.019 -1.789 -0.023 -1.979 0.001 c 0.036 0.979 0.052 2.086 0.052 3.008",
  column4:"M -6.016 5.985 c 2.197 -2.303 8.753 -2.906 11.978 0.036 c 0.425 -0.071 1.418 -0.036 2.02 0 c 0.05 -4.98 -15.416 -5.616 -15.941 -0.009 c 0.663 -0.055 1.353 -0.028 1.933 -0.028",
  floor:"M -8.024 7.984 c 7.461 0 11.572 0.017 16.01 -0.017 c 0.018 -0.916 0 -0.916 0 -0.916 c 0.018 -0.345 0.018 -0.656 0 -1.071 c -4.197 0 -8.998 0 -15.993 0.035 c 0.018 0.587 0 1.33 0 1.969",
}

//deposit symbol: safe with dial/lock


//login symbol: Google's login symbol

const login = {
  roof: "M 4.001 0.062 c 0.062 0.028 0.062 -0.048 -0.002 -0.086 l -3.662 -1.026 c -0.158 -0.007 -0.171 0.082 -0.144 0.124 l -0.007 0.082 a 1 1 0 0 0 0 0.117 l 0.016 1.602 a 1 1 0 0 0 0.086 0.107 l 3.705 -0.93",

  column1: "M -5.004 -0.992 c -1.673 0 -3.346 0 -5.019 0 c 0.023 0.664 0.023 1.325 0.023 1.986 c 3.4 0 4.606 0.006 3 0 c 0.6703 0 1.3407 0 2.011 0 c -0.012 -0.757 -0.005 -1.46 -0.005 -1.986",
  column2: "M 0.196 -0.989 c -3.3987 0 -4.396 -0.003 -5.196 0 c 0.0013 0.664 0.0027 1.328 0.004 1.992 c 1.73 -0.0073 3.46 -0.0147 5.19 -0.022 c 0 -0.6563 0 -1.3127 0 -1.969",
  column4: "M 8 -7 c 0 4.6743 0 9.3487 0 14.023 c 0.6707 0 1.3413 0 2.012 0 c 0 -4.6783 0 -9.3567 0 -14.035 c -0.6697 0 -1.3393 0 -2.009 0",
  floor:"M 0 9 c 2.6667 0 5.3333 0 8 0 c 1.1 0 2 -0.9 2.024 -1.997 c -0.6747 0 -1.3493 0 -2.024 0 c -2.6667 -0.003 -5.3333 -0.003 -8 -0.003 c 0 0.6667 0 1.3333 0 2",
  ceiling:"M 0 -7 c 1.3333 0 2.6667 0 4 0 c 2 0 4 0 6 0 c -0.007 -1.1 -0.907 -2 -2.007 -2 c -1.331 0 -2.662 0 -3.993 0 c -1.3333 0 -2.6667 0 -4 0 c -0.012 1.234 -0.029 1.64 -0.007 2",
  
  foundation:"M -2.4 3.6 c 0.4667 0.4667 0.9333 0.9333 1.4 1.4 c 1.6653 -1.6693 3.3307 -3.3387 2.245 -2.255 c 0.9183 -0.9153 1.8367 -1.8307 2.755 -2.745 c -0.88 0.223 -2.5307 0.6487 -3.796 0.976 c -0.868 0.8787 -1.736 1.7513 -2.604 2.624",
  column3: "M -2.4 -3.6 c 0.8667 0.8667 1.7333 1.7333 2.6 2.6 c 1.2667 0.3313 2.5333 0.6627 3.8 0.994 c -1.6693 -1.666 -3.3387 -3.332 -5.008 -4.998 c -0.464 0.468 -0.928 0.936 -1.392 1.404 "
  

}


// https://yqnn.github.io/svg-path-editor/

export var currentSymbol = "bank";
const pageSymbols = {"bank":bank, "withdraw":withdraw, "balance":balance, "login":login, "createAccount":createAccount}
export const SymbolDecomp = () => {
  var currentPage="bank"
  console.log("pageSymbols[currentPage]", pageSymbols[currentPage])
  return (
      <svg xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"  height="500px" viewBox="-20 -20 40 40" >

        {/* keyTimes="0; 0.25; 0.5; 0.75; 1" */}

        <path id="roof"    d={`${pageSymbols[currentPage].roof}`}>
            <animate id="toHomeRoof" attributeName="d" begin="indefinite" dur=".5s" repeatCount="1" to={`${bank.roof}`}fill="freeze"/>
            <animate id="toCreateAccountRoof" attributeName="d"  begin="indefinite"  dur=".5s" repeatCount="1" to={`${createAccount.roof}`}fill="freeze" />
            <animate id="toLoginRoof" attributeName="d"  begin="indefinite"  dur=".5s" repeatCount="1" to={`${login.roof}`}fill="freeze" />
            <animate id="toBalanceRoof" attributeName="d" begin="indefinite"  dur=".5s" repeatCount="1" to={`${balance.roof}`} fill="freeze" />
            <animate id="toWithdrawRoof" attributeName="d" begin="indefinite"  dur=".5s" repeatCount="1" to={`${withdraw.roof}`} fill="freeze" />
            <animate id="roofToGreen" fill="freeze" begin="indefinite" attributeName="fill" dur=".5s" repeatCount="1" to="green" />
            <animate id="roofToBlack" fill="freeze" begin="indefinite" attributeName="fill" dur=".5s" repeatCount="1" to="black" />
        </path>
        <path id="foundation"   d={`${pageSymbols[currentPage].foundation}`} >
            <animate id="toHomeFoundation" attributeName="d" begin="indefinite" dur=".5s" repeatCount="1" to={`${bank.foundation}`}fill="freeze"/>
            <animate id="toCreateAccountFoundation" attributeName="d"  begin="indefinite"  dur=".5s" repeatCount="1" to={`${createAccount.foundation}`}fill="freeze" />
            <animate id="toLoginFoundation" attributeName="d"  begin="indefinite"  dur=".5s" repeatCount="1" to={`${login.foundation}`}fill="freeze" />
            <animate id="toBalanceFoundation" attributeName="d" begin="indefinite"  dur=".5s" repeatCount="1" to={`${balance.foundation}`} fill="freeze" />
            <animate id="toWithdrawFoundation" attributeName="d" begin="indefinite"  dur=".5s" repeatCount="1" to={`${withdraw.foundation}`} fill="freeze" />
        </path>

        <path id="column1"  d={`${pageSymbols[currentPage].column1}`} > 
            <animate id="toHomeCol1" attributeName="d" begin="indefinite" dur=".5s" repeatCount="1" to={`${bank.column1}`}fill="freeze"/>
            <animate id="toCreateAccountCol1" attributeName="d"  begin="indefinite"  dur=".5s" repeatCount="1" to={`${createAccount.column1}`}fill="freeze" />
            <animate id="toLoginCol1" attributeName="d"  begin="indefinite"  dur=".5s" repeatCount="1" to={`${login.column1}`}fill="freeze" />
            <animate id="toBalanceCol1" attributeName="d" begin="indefinite"  dur=".5s" repeatCount="1" to={`${balance.column1}`} fill="freeze" />
            <animate id="toWithdrawCol1" attributeName="d" begin="indefinite"  dur=".5s" repeatCount="1" to={`${withdraw.column1}`} fill="freeze" />
        </path>
        <path id="column2" d={`${pageSymbols[currentPage].column2}`}  > 
            <animate id="toHomeCol2" attributeName="d" begin="indefinite" dur=".5s" repeatCount="1" to={`${bank.column2}`}fill="freeze"/>
            <animate id="toCreateAccountCol2" attributeName="d"  begin="indefinite"  dur=".5s" repeatCount="1" to={`${createAccount.column2}`}fill="freeze" />
            <animate id="toLoginCol2" attributeName="d"  begin="indefinite"  dur=".5s" repeatCount="1" to={`${login.column2}`}fill="freeze" />
            <animate id="toBalanceCol2" attributeName="d" begin="indefinite"  dur=".5s" repeatCount="1" to={`${balance.column2}`} fill="freeze" />
            <animate id="toWithdrawCol2" attributeName="d" begin="indefinite"  dur=".5s" repeatCount="1" to={`${withdraw.column2}`} fill="freeze" />
          
        </path>
        <path id="column3" d={`${pageSymbols[currentPage].column3}`} > 
            <animate id="toHomeCol3" attributeName="d" begin="indefinite" dur=".5s" repeatCount="1" to={`${bank.column3}`}fill="freeze"/>
            <animate id="toCreateAccountCol3" attributeName="d"  begin="indefinite"  dur=".5s" repeatCount="1" to={`${createAccount.column3}`}fill="freeze" />
            <animate id="toLoginCol3" attributeName="d"  begin="indefinite"  dur=".5s" repeatCount="1" to={`${login.column3}`}fill="freeze" />
            <animate id="toBalanceCol3" attributeName="d" begin="indefinite"  dur=".5s" repeatCount="1" to={`${balance.column3}`} fill="freeze" />
            <animate id="toWithdrawCol3" attributeName="d" begin="indefinite"  dur=".5s" repeatCount="1" to={`${withdraw.column3}`} fill="freeze" />
        </path>
        <path id="column4"  d={`${pageSymbols[currentPage].column4}`}> 
            <animate id="toHomeCol4" attributeName="d" begin="indefinite" dur=".5s" repeatCount="1" to={`${bank.column4}`}fill="freeze"/>
            <animate id="toCreateAccountCol4" attributeName="d"  begin="indefinite"  dur=".5s" repeatCount="1" to={`${createAccount.column4}`}fill="freeze" />
            <animate id="toLoginCol4" attributeName="d"  begin="indefinite"  dur=".5s" repeatCount="1" to={`${login.column4}`}fill="freeze" />
            <animate id="toBalanceCol4" attributeName="d" begin="indefinite"  dur=".5s" repeatCount="1" to={`${balance.column4}`} fill="freeze" />
            <animate id="toWithdrawCol4" attributeName="d" begin="indefinite"  dur=".5s" repeatCount="1" to={`${withdraw.column4}`} fill="freeze" />
        </path>

        <path id="floor"  d={`${pageSymbols[currentPage].floor}`}> 
            <animate id="toHomeFloor" attributeName="d" begin="indefinite" dur=".5s" repeatCount="1" to={`${bank.floor}`}fill="freeze"/>
            <animate id="toCreateAccountFloor" attributeName="d"  begin="indefinite"  dur=".5s" repeatCount="1" to={`${createAccount.floor}`}fill="freeze" />
            <animate id="toLoginFloor" attributeName="d"  begin="indefinite"  dur=".5s" repeatCount="1" to={`${login.floor}`}fill="freeze" />
            <animate id="toBalanceFloor" attributeName="d" begin="indefinite"  dur=".5s" repeatCount="1" to={`${balance.floor}`} fill="freeze" />
            <animate id="toWithdrawFloor" attributeName="d" begin="indefinite"  dur=".5s" repeatCount="1" to={`${withdraw.floor}`} fill="freeze" />
           
        </path>
        
        <path id="ceiling" d={`${pageSymbols[currentPage].ceiling}`}>
      
            <animate id="toHomeCeiling" attributeName="d" begin="indefinite" dur=".5s" repeatCount="1" to={`${bank.ceiling}`}fill="freeze"/>
            <animate id="toCreateAccountCeiling" attributeName="d"  begin="indefinite"  dur=".5s" repeatCount="1" to={`${createAccount.ceiling}`}fill="freeze" />
            <animate id="toLoginCeiling" attributeName="d"  begin="indefinite"  dur=".5s" repeatCount="1" to={`${login.ceiling}`}fill="freeze" />
            <animate id="toBalanceCeiling" attributeName="d" begin="indefinite"  dur=".5s" repeatCount="1" to={`${balance.ceiling}`} fill="freeze" />
            <animate id="toWithdrawCeiling" attributeName="d" begin="indefinite"  dur=".5s" repeatCount="1" to={`${withdraw.ceiling}`} fill="freeze" />
        </path>
</svg>


  )
}



 

 
 


