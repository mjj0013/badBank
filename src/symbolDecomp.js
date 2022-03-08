


// https://yqnn.github.io/svg-path-editor/
export const SymbolDecomp = () => {
  // M -2.8445 3.2175 c 0.411 -0.66 0.9345 -1.4305 1.2485 -1.891 l 0.0065 -0.0615 c -0.5455 -0.6615 -0.732 -0.898 -1.317 -1.5205 l -4.2295 -4.7725 a 0.5 0.5 90 0 0 -1.2235 0.367 l 0.0315 13.825 a 0.5 0.5 90 0 0 1.192 0.3815 l 4.309 -6.3255
  


  //withdraw symbol
  var dollar = {
    symbol: {
      bottom: "M -0.2 1.3567 c 0.771 3.0853 3.987 1.3943 3.6168 0.317 c -0.2111 -0.0211 -0.4221 -0.0422 -0.6332 -0.0633 c -0.0537 0.99 -1.7178 1.3833 -2.2582 0.1087 c -0.012 -0.0965 -0.024 -0.193 -0.036 -0.2895 c -0.2305 -0.0232 -0.4609 -0.0464 -0.6914 -0.0696",
      mid: "M 0.2 -0.7 c 0.8538 0.9835 2.7222 0.9497 2.613 2.289 c 0.2173 0.0232 0.4347 0.0463 0.652 0.0695 c -0.0272 -2.0257 -2.7132 -1.9897 -2.9482 -2.8035 c -0.1658 -0.0031 -0.8558 -0.466 -0.3466 0.47",
      top: "M 3.4215 -2.0527 c -0.9385 -2.3883 -4.2975 -0.9183 -3.4185 0.8862 c 0.1658 0.003 0.3315 0.006 0.4973 0.009 c -0.2945 -1.8502 2.2868 -1.7848 2.475 -0.6565 c 0.1537 -0.0061 0.5927 0.077 0.4417 -0.233",
      dash: "M -7.5087 -4.173 c 0.0488 5.413 -0.2925 9.022 0.6938 7.951 c 0.01 -0.287 0.2188 -8.006 0.2769 -7.7832 c 15.0844 -0.2978 18.4394 0.6702 18.3019 -0.4618 c -4.5412 -0.018 -14.3788 -0.073 -19.2425 -0.096"
    },
    background:"M 12.008 4.492 c 0.3475 0.126 0.595 -0.196 0.496 -0.4435 l 0.0245 -8.593 c -0.028 -0.1225 -0.0365 -0.4465 -0.531 -0.438 l -19.5025 -0.0075 a 0.5 0.5 90 0 0 -0.52 0.4955 l 0.025 8.5185 a 0.5 0.5 90 0 0 0.4705 0.52 l 19.5375 -0.046",
    oval: "M 1.375 -4.922 a 0.7813 0.75 90 0 0 0.75 9.375 a 0.7813 0.75 90 0 0 -0.75 -9.375 c 0 0 0 0 0 0.7813 a 0.7813 0.75 90 0 1 0.75 7.8125 a 0.7813 0.75 90 0 1 -0.75 -7.8125 c 0 -0.7813 0 -0.7813 0 -0.7813 "
  }


  //balance symbol
  //foundation & column4  <=> left bucket & right bucket
  //column2  <=> rod
  //roof <=> base of balance
  //ceiling <=> arm/fulcrum of balance
  var balance = {}



  //create account symbol: Windows user logo with plus sign
  var createAccount = {

  }

  //deposit symbol: safe with dial/lock


  //login symbol: Google's login symbol

  //roof <=> "middle triangle"
  var loginSymbol = {
    roof: 
      ["M 12.343 0.497 c 0.066 -0.108 0.162 -0.246 0.15 -0.214 l -0.027 -0.267 c 0.08 -0.027 0.08 -0.08 -0.133 -0.187 l -19.838 -4.819 a 0.5 0.5 90 0 0 -0.52 0.4955 l 0.025 8.5185 a 0.5 0.5 90 0 0 0.4705 0.52 l 19.8625 -4.048",
      "M 3.994 -0.011 c -1.236 -0.327 -2.459 -0.632 -3.796 -0.986 l -0.006 0.012 c 0.012 0.755 0.006 1.313 0.006 1.972 l 2.182 -0.581 a 1 1 0 0 0 0.036 -0.012 l 1.547 -0.39 a 1 1 0 0 0 0.029 -0.012"
      ],
    column1: "M -5.004 -0.992 c -1.673 0 -3.346 0 -5.019 0 c 0.023 0.664 0.023 1.325 0.023 1.986 c 3.4 0 4.606 0.006 5 0 c -0.001 -0.757 0.006 -1.46 0.006 -1.986",
    column2: "M 0.196 -0.989 c -3.3987 0 -4.396 -0.003 -5.196 0 c 0.0013 0.664 0.0027 1.328 0.004 1.992 c 1.73 -0.0073 3.46 -0.0147 5.19 -0.022 c 0 -0.6563 0 -1.3127 0 -1.969",
    column4: "M 8 -7 c 0 4.6743 0 9.3487 0 14.023 c 0.6707 0 1.3413 0 2.012 0 c 0 -4.6783 0 -9.3567 0 -14.035 c -0.6697 0 -1.3393 0 -2.009 0",
    floor:"M 8 7 c -2.6667 0 -5.3333 0 -8 0 c 0 0.6667 0 1.3333 0 2 c 2.6667 0 5.3333 0 8 0 c 1.1 0 2 -0.9 2.024 -1.997 c -0.6747 0 -1.3493 0 -2.024 0 ",
    ceiling:"M 10 -7 c 0 -1.1 -0.9 -2 -2 -2 c -2.6667 0 -5.3333 0 -8 0 c 0 0.6667 0 1.3333 0 2 c 2.6667 0 5.3333 0 8 0 c 0.669 0 1.338 0 2.007 0",
    foundation:"M 0.204 0.982 c -0.868 0.8727 -1.736 1.7453 -2.604 2.618 c 0.4667 0.4667 0.9333 0.9333 1.4 1.4 c 1.6653 -1.6693 3.3307 -3.3387 2.245 -2.255 c 0.9183 -0.9153 1.8367 -1.8307 2.755 -2.746 c -0.88 0.224 -2.5307 0.6497 -3.796 0.977",
    column3: "M -2.4 -3.6 l 2.6 2.6 l 3.8 0.994 l -5.008 -4.998 l -1.392 1.404 "
    

  }
  
// login symbol:
/*
M -1 -5 l -1.4 1.4 l 2.6 2.6 l 3.8 0.994 l -5.008 -4.998 M 0.196 -0.989 h -10.196 v 0.982 v 0.993 h 10.2 l -0.004 -1.979 M 0.204 0.982 l -2.604 2.618 l 1.4 1.4 l 4.996 -5.008 l -3.796 0.982 M 3.994 -0.011 c -1.236 -0.327 -2.459 -0.632 -3.796 -0.986 l -0.006 0.012 c 0.012 0.755 0.006 1.313 0.006 1.972 l 2.182 -0.581 a 1 1 0 0 0 0.036 -0.012 l 1.547 -0.39 a 1 1 0 0 0 0.029 -0.012 M 8 7 h -8 v 2 h 8 c 1.1 0 2 -0.9 2.024 -1.997 H 8 M 10.007 -7.022 c 0 -1.1 -0.9 -2 -2 -2 h -8 v 2 h 8 h 2.007 M 8.006 -7.02 v 7.038 h 2.012 v -7.04 h -2.009 M 8.007 0.016 v 6.973 h 2.01 v -6.975 h -2.003 v 0.008
*/



  return (
      <svg xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"  height="500px" viewBox="-20 -20 40 40" >

        

        <path id="roof" >
          <animate keyTimes="0; 0.25;0.26;  0.50; .55; 0.65; 1" attributeName="d" dur="4s" repeatCount="indefinite" values="
                M 10.643 -12.547 c -1.58 -0.817 -5.885 -2.997 -10.613 -5.429 l -0.065 -0.001 c -6.1 3.055 -10.414 5.212 -13.873 6.964 l 0 0 a 1 1 0 0 0 0.494 2.696 l 26.928 -0.046 a 1 1 0 0 0 0.474 -2.359 l -3.345 -1.825 ;
                M 10.643 -12.547 c -1.58 -0.817 -5.885 -2.997 -10.613 -5.429 l -0.065 -0.001 c -6.1 3.055 -10.414 5.212 -13.873 6.964 l 0 0 a 1 1 0 0 0 0.494 2.696 l 26.928 -0.046 a 1 1 0 0 0 0.474 -2.359 l -3.345 -1.825 ;
                M 10.643 -12.547 c -1.58 -0.817 -5.885 -2.997 -10.613 -5.429 l -0.065 -0.001 c -6.1 3.055 -10.414 5.212 -13.873 6.964 l 0 0 a 1 1 0 0 0 0.494 2.696 l 26.928 -0.046 a 1 1 0 0 0 0.474 -2.359 l -3.345 -1.825 ;
                M -1.333 3.636 c 0.379 -0.403 0.688 -0.711 2.333 -2.3095 l 0 -0.0615 c -1.479 -1.043 -2.072 -1.422 -3.115 -2.205 l -5.525 -4.173 a 0.5 0.5 90 0 0 -0.7195 0.452 l 0.0315 13.825 a 0.5 0.5 90 0 0 0.949 0.281 l 5.406 -5.263;
                M 12.008 4.492 c 0.3475 0.126 0.595 -0.196 0.496 -0.4435 l 0.0245 -8.593 c -0.028 -0.1225 -0.0365 -0.4465 -0.531 -0.438 l -19.5025 -0.0075 a 0.5 0.5 90 0 0 -0.52 0.4955 l 0.025 8.5185 a 0.5 0.5 90 0 0 0.4705 0.52 l 19.5375 -0.046;    
                M 12.343 0.497 c 0.066 -0.108 0.162 -0.246 0.15 -0.214 l -0.027 -0.267 c 0.08 -0.027 0.08 -0.08 -0.133 -0.187 l -19.838 -4.819 a 0.5 0.5 90 0 0 -0.52 0.4955 l 0.025 8.5185 a 0.5 0.5 90 0 0 0.4705 0.52 l 19.8625 -4.048;       
                M 3.994 -0.011 c -1.236 -0.327 -2.459 -0.632 -3.796 -0.986 l -0.006 0.012 c 0.012 0.755 0.006 1.313 0.006 1.972 l 2.182 -0.581 a 1 1 0 0 0 0.036 -0.012 l 1.547 -0.39 a 1 1 0 0 0 0.029 -0.012
          " />
          <animate fill="freeze" attributeName="fill" dur="2s"repeatCount="indefinite" values="black; green" />
        </path>
        <path id="foundation" >
            <animate keyTimes="0; 0.25; 0.75; 1" attributeName="d" dur="4s" repeatCount="indefinite" values="
            
                M -13.478 10.407 c -2.161 -0.266 -2.199 3.07 0 2.687 c 8.695 0.083 18.225 0.083 26.587 0.083 c 2.665 -0.116 2.394 -2.74 0 -2.742 c -3.697 0 -8.394 0 -13.091 0 c -4.7693 0.007 -9.5387 0.014 -13.478 -0.03;
                M -7.3875 3.933 c 0.3375 0.098 17.345 0.223 19.1125 0.091 c -0.1212 -5.606 -0.0525 -7.359 -0.03 -8.509 c 0.0238 0.347 -0.57 0.201 -0.89 0.328 c 0.0187 3.939 0 -0.215 0.1946 7.8383 c -8.9654 0.0023 -18.2946 -0.2173 -18.4534 -0.2553 ;
                M -7.3875 3.933 c 0.3375 0.098 17.345 0.223 19.1125 0.091 c -0.1212 -5.606 -0.0525 -7.359 -0.03 -8.509 c 0.0238 0.347 -0.57 0.201 -0.89 0.328 c 0.0187 3.939 0 -0.215 0.1946 7.8383 c -8.9654 0.0023 -18.2946 -0.2173 -18.4534 -0.2553 ;
                M -7.3875 3.933 c 0.3375 0.098 17.345 0.223 19.1125 0.091 c -0.1212 -5.606 -0.0525 -7.359 -0.03 -8.509 c 0.0238 0.347 -0.57 0.201 -0.89 0.328 c 0.0187 3.939 0 -0.215 0.1946 7.8383 c -8.9654 0.0023 -18.2946 -0.2173 -18.4534 -0.2553 
            
            
            "
         />
        </path>

        <path id="column1" > 
            <animate keyTimes="0;  1" attributeName="d" dur="4s" repeatCount="indefinite" values="
            
                M -9.25 6.737 c 0 -4.266 0 -8.52 0 -12.774 c -0.935 0 -1.87 0 -2.805 0 c -0.023 4.254 -0.023 8.508 -0.023 12.762 c 0.9427 0 1.8853 0 2.828 0 c 0 -12.254 0 -12.508 0 -12.762;
              
                M -6.8149 -4.0052 c 15.3613 -0.2978 18.7163 0.6702 18.5788 -0.4618 c -4.5412 -0.018 -14.3788 -0.018 -19.2425 -0.018 c 0 0.0497 0 2.751 0 8.271 c 0.3326 0 0.3926 0 0.6637 0 c 0 -0.295 0 -8.014 0 -7.7912
            "/>
        </path>
        <path id="column2" > 
          <animate keyTimes="0; 0.25; 0.5; 1" attributeName="d" dur="4s" repeatCount="indefinite" values="
                M -5.078 -6.037 c 0 4.254 0 8.508 0 12.762 c 0.9427 0 1.8853 0 2.828 0 c 0 -4.254 0 -8.508 0 -12.762 c -0.9427 0 -1.8853 0 -2.828 0;
                M -5.078 -6.037 c 0 4.254 0 8.508 0 12.762 c 0.9427 0 1.8853 0 2.828 0 c 0 -4.254 0 -8.508 0 -12.762 c -0.9427 0 -1.8853 0 -2.828 0;
                M -5.078 -6.037 c 0 4.254 0 8.508 0 12.762 c 0.9427 0 1.8853 0 2.828 0 c 0 -4.254 0 -8.508 0 -12.762 c -0.9427 0 -1.8853 0 -2.828 0;
                M 1.4513 -3.9255 c 0 2.5747 0 5.1493 0 7.724 c 0.0918 0 0.1837 0 0.2755 0 c 0 -2.5744 0 -5.1489 0 -7.7233 c -0.0921 -0.0014 -0.1841 -0.0029 -0.2762 -0.0043 
          
          "/>
          
        </path>
        <path id="column3" > 
          <animate keyTimes="0; 0.25; 0.75; 1" attributeName="d" dur="4s" repeatCount="indefinite" values="
                M 9.078 -6.037 c 0 4.254 0 8.508 0 12.762 c 0.9427 -0 1.8853 -0 2.828 0 c 0 -4.254 0 -8.508 0 -12.762 c -0.9427 0 -1.8853 0 -2.828 0;
                M 0.2 -0.7 c 0.8538 0.9835 2.7222 0.9497 2.613 2.289 c 0.2173 0.0232 0.4347 0.0463 0.652 0.0695 c -0.0272 -2.0257 -2.7132 -1.9897 -2.9482 -2.8035 c -0.1658 -0.0031 -0.8558 -0.466 -0.3466 0.47 ;
                M 0.2 -0.7 c 0.8538 0.9835 2.7222 0.9497 2.613 2.289 c 0.2173 0.0232 0.4347 0.0463 0.652 0.0695 c -0.0272 -2.0257 -2.7132 -1.9897 -2.9482 -2.8035 c -0.1658 -0.0031 -0.8558 -0.466 -0.3466 0.47 ;
                M 0.2 -0.7 c 0.8538 0.9835 2.7222 0.9497 2.613 2.289 c 0.2173 0.0232 0.4347 0.0463 0.652 0.0695 c -0.0272 -2.0257 -2.7132 -1.9897 -2.9482 -2.8035 c -0.1658 -0.0031 -0.8558 -0.466 -0.3466 0.47 
          " />
        </path>
        <path id="column4"> 

          <animate keyTimes="0;0.75; 1" attributeName="d" dur="4s" repeatCount="indefinite" values="
                M 9.078 -6.037 c 0 4.254 0 8.508 0 12.762 c 0.9427 -0 1.8853 -0 2.828 0 c 0 -4.254 0 -8.508 0 -12.762 c -0.9427 0 -1.8853 0 -2.828 0;
                M 3.4215 -2.0527 c -0.9385 -2.3883 -4.2975 -0.9183 -3.4185 0.8862 c 0.1658 0.003 0.3315 0.006 0.4973 0.009 c -0.2945 -1.8502 2.2868 -1.7848 2.475 -0.6565 c 0.1537 -0.0061 0.5927 0.077 0.4417 -0.233;
                M 3.4215 -2.0527 c -0.9385 -2.3883 -4.2975 -0.9183 -3.4185 0.8862 c 0.1658 0.003 0.3315 0.006 0.4973 0.009 c -0.2945 -1.8502 2.2868 -1.7848 2.475 -0.6565 c 0.1537 -0.0061 0.5927 0.077 0.4417 -0.233
        " />

      
        </path>

        <path id="floor" > 
          <animate keyTimes="0; 0.25; 1" attributeName="d" dur="4s" repeatCount="indefinite" values="
   
                M -12.503 9.477 c 8.395 0 11.06 0 12.5 0 c 8.61 0 4.329 0 12.889 0 c 1.845 -0.065 1.782 -2.792 0 -2.78 c -4.585 0.032 -16.377 0.032 -25.363 0.038 c -1.841 -0.044 -2.031 2.683 -0.026 2.742;
                M -0.2 1.3567 c 0.771 3.0853 3.987 1.3943 3.6168 0.317 c -0.2111 -0.0211 -0.4221 -0.0422 -0.6332 -0.0633 c -0.0537 0.99 -1.7178 1.3833 -2.2582 0.1087 c -0.012 -0.0965 -0.024 -0.193 -0.036 -0.2895 c -0.2305 -0.0232 -0.4609 -0.0464 -0.6914 -0.0696;
                M -0.2 1.3567 c 0.771 3.0853 3.987 1.3943 3.6168 0.317 c -0.2111 -0.0211 -0.4221 -0.0422 -0.6332 -0.0633 c -0.0537 0.99 -1.7178 1.3833 -2.2582 0.1087 c -0.012 -0.0965 -0.024 -0.193 -0.036 -0.2895 c -0.2305 -0.0232 -0.4609 -0.0464 -0.6914 -0.0696
          "/>
           
        </path>
        
        <path id="ceiling">
          <animate keyTimes="0; 0.25; 0.5; 0.75; 1" attributeName="d" dur="4s" repeatCount="indefinite" values="
                M -11.996 -6.026 a 1 0 0 0 0 24.056 -0.022 a 1 1 0 0 0 -0.154 0.014 c 1.396 0.048 1.339 -1.54 -0.067 -1.464 a 1 0 0 0 1 -24.252 -0.058 a 1 0 0 0 1 0.002 0.001 c -1.337 -0.031 -1.227 1.659 0.26 1.533;
                M -11.996 -6.026 a 1 0 0 0 0 24.056 -0.022 a 1 1 0 0 0 -0.154 0.014 c 1.396 0.048 1.339 -1.54 -0.067 -1.464 a 1 0 0 0 1 -24.252 -0.058 a 1 0 0 0 1 0.002 0.001 c -1.337 -0.031 -1.227 1.659 0.26 1.533;
                M -11.996 -6.026 a 1 0 0 0 0 24.056 -0.022 a 1 1 0 0 0 -0.154 0.014 c 1.396 0.048 1.339 -1.54 -0.067 -1.464 a 1 0 0 0 1 -24.252 -0.058 a 1 0 0 0 1 0.002 0.001 c -1.337 -0.031 -1.227 1.659 0.26 1.533;
                M -0.5 -6.125 a 1 1 0 0 0 1 12 a 1 1 0 0 0 -1 -12 c 0 0 0 0 0 1 a 1 1 0 0 1 1 10 a 1 1 0 0 1 -1 -10 c 0 -1 0 -1 0 -1;
                M 1.375 -4.922 a 0.7813 0.75 90 0 0 0.75 9.375 a 0.7813 0.75 90 0 0 -0.75 -9.375 c 0 0 0 0 0 0.7813 a 0.7813 0.75 90 0 1 0.75 7.8125 a 0.7813 0.75 90 0 1 -0.75 -7.8125 c 0 -0.7813 0 -0.7813 0 -0.7813 
           
          "/>

        </path>
</svg>


  )
}



 

 
 


