import React from "react";
import "./style.scss"; 

export default function HeaderAnimation() {
  const elemMoveOn = (e) => {
    // Cloud Left logic move
    const xCloudLeft = (e.clientX * 7) / e.screenX + "%";
    const CloudLeft = document.getElementById("Nuage_Gauche");
    CloudLeft.style.transition = "0.5s";
    CloudLeft.style.transform = `translateX(${xCloudLeft})`;

    // Cloud Right Logic Move
    const xCloudRight = ((e.clientX * 10) / e.screenX) * -1 + "%";
    const CloudRight = document.getElementById("Nuage_Droite");
    CloudRight.style.transition = "0.5s";
    CloudRight.style.transform = `translateX(${xCloudRight})`;

    //Sunshine logic Aniamtion
    const ySun = ((e.clientY * 35) / e.screenY) * -1 + "%";
    const Sun = document.getElementById("Soleil");
    Sun.style.transition = "0.5s";
    Sun.style.transform = `translateY(${ySun})`;
    Sun.style.filter = " brightness(1.2)"

    //Mountain Right logic Aniamtion
    const MountainRight = document.getElementById("Montagne_Droite")
    MountainRight.style.transition ="1s"
    MountainRight.style.filter="brightness(1.3) drop-shadow(-5px -3px 5px #e5b845)"
   
     //Mountain Center logic Aniamtion
    const MountainCenter = document.getElementById("Montagne_Centre")
    MountainCenter.style.transition ="1s"
    MountainCenter.style.filter="brightness(1.3)"

     //Mountain Left logic Aniamtion
    const MountainLeft = document.getElementById("Montagne_Gauche")
    MountainLeft.style.transition ="1s"
    MountainLeft.style.filter="brightness(1.3) drop-shadow( 5px -3px 5px #e5b845)"
  };

  const elemMoveOut = (e) => {
    // Cloud Left reset logic move
    const CloudLeft = document.getElementById("Nuage_Gauche");
    CloudLeft.style.transition = "0.7s";
    CloudLeft.style.transform = `translateX(0%)`;

    // Cloud Rightreset logic move
    const CloudRight = document.getElementById("Nuage_Droite");
    CloudRight.style.transition = "0.7s";
    CloudRight.style.transform = `translateX(0%)`;

    //Sun reset logi animation
    const Sun = document.getElementById("Soleil");
    Sun.style.transition = "0.7s";
    Sun.style.transform = `translateY(0%)`;
    Sun.style.filter = "brightness(1)"

    //MountainRight reset logic animation
    const MountainRight = document.getElementById("Montagne_Droite")
    MountainRight.style.transition ="0.7s"
    MountainRight.style.filter="brightness(1) drop-shadow(0px 0px 0px #0a1a4c)"

    //MountainCenter reset logic animation
      const MountainCenter = document.getElementById("Montagne_Centre")
      MountainCenter.style.transition ="0.7s"
      MountainCenter.style.filter="brightness(1) "

   //MountainLeftreset logic animation
      const MountainLeft = document.getElementById("Montagne_Gauche")
      MountainLeft.style.transition ="1s"
      MountainLeft.style.filter="brightness(1) drop-shadow(0px 0px 0px #0a1a4c)"
  };

  return (
    <div className="svg-box" onMouseMove={elemMoveOn} onMouseOut={elemMoveOut}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -150 1026 530"
      >
        <g id="Soleil" style={{ fill: "#e5b845" }}>
          <path
            id="Soleil-2"
            data-name="Soleil"
            d="m672.25,136.04h-.75v-7.77h-7.51v-15.04h-7.53v-15.06h-7.53v-15.06h-7.53v-15.04h-7.53v-7.53h-7.51v-15.06h-7.53v-7.53h-15.06v-7.51h-7.53v-7.53h-15.04v-7.53h-15.06v-7.53h-15.06V.28h-67.75v7.53h-22.58v7.53h-15.06v7.53h-15.04v7.53h-7.53v7.51h-7.53v7.53h-7.53v7.53h-7.53v15.06h-7.53v15.04h-7.51v15.06h-7.53v15.06h-7.53v15.04h-7.53v15.06h.4v25.71h.1v14.81h7.51v15.04h7.53v15.06h7.53v15.06h7.53v15.04h7.53v7.53h7.51v15.06h7.53v7.53h15.06v7.51h7.53v7.53h15.04v7.53h15.06v7.53h15.06v7.53h67.75v-7.53h22.58v-7.53h15.06v-7.53h15.04v-7.53h7.53v-7.51h7.53v-7.53h7.53v-7.53h7.53v-15.06h7.53v-15.04h7.51v-15.06h7.53v-15.06h7.53v-15.04h7.53v-14.81h.25v-33Zm-256.22,123.09v-.76c.22.25.44.51.66.76h-.66Zm7.53,7.53v-.42c.14.14.29.28.44.42h-.44Zm97.88,37.64h-7.53v-.1c1.25.03,2.5.09,3.76.09s2.52-.06,3.77-.1v.1Zm97.38-251.31v.76c-.22-.25-.44-.51-.66-.76h.66Zm-7.53-7.53v.42c-.14-.14-.29-.28-.44-.42h.44Zm-97.88-37.64h7.53v.1c-1.25-.03-2.5-.09-3.76-.09s-2.52.06-3.77.1v-.1Z"
          />
        </g>
        <g id="Montagne_Droite">
          <polygon
            points="698.45 216.13 698.45 208.26 706.32 208.26 706.32 200.39 714.19 200.39 714.19 192.52 722.06 192.52 722.06 184.65 722.06 176.8 722.06 168.94 729.92 168.94 729.92 161.07 737.77 161.07 737.77 153.2 737.77 145.33 729.92 145.33 722.06 145.33 714.19 145.33 706.32 145.33 698.45 145.33 698.45 137.48 690.58 137.48 690.58 129.61 682.73 129.61 682.73 121.74 674.86 121.74 674.86 113.88 682.73 113.88 690.58 113.88 698.45 113.88 706.32 113.88 706.32 121.74 714.19 121.74 722.06 121.74 722.06 113.88 722.06 106.01 714.19 106.01 714.19 98.16 714.19 90.29 706.32 90.29 706.32 82.42 698.45 82.42 698.45 74.55 690.58 74.55 690.58 66.68 682.73 66.68 682.73 58.84 674.86 58.84 674.86 66.68 667 66.68 667 74.55 667 82.42 659.13 82.42 659.13 90.29 651.26 90.29 651.26 98.16 651.26 106.01 643.41 106.01 643.41 113.88 643.41 121.74 635.54 121.74 635.54 129.61 635.54 137.48 627.67 137.48 627.67 145.33 619.8 145.33 619.8 153.2 611.94 153.2 611.94 161.07 604.09 161.07 604.09 168.94 604.09 176.8 596.22 176.8 596.22 184.65 596.22 192.52 588.35 192.52 588.35 200.39 588.35 208.26 588.35 216.13 588.35 224 580.48 224 580.48 231.84 572.61 231.84 572.61 239.71 572.61 245.16 569.02 245.16 569.02 248.92 565.25 248.92 565.25 252.68 561.5 252.68 561.5 256.45 561.5 260.22 557.73 260.22 557.73 263.98 557.73 267.74 553.97 267.74 553.97 271.5 553.97 275.27 550.2 275.27 550.2 279.04 553.97 279.04 557.73 279.04 561.5 279.04 565.25 279.04 569.02 279.04 572.61 279.04 572.79 279.04 576.55 279.04 580.32 279.04 580.48 279.04 584.07 279.04 587.84 279.04 588.35 279.04 591.61 279.04 595.37 279.04 596.22 279.04 599.14 279.04 602.89 279.04 604.09 279.04 611.94 279.04 619.8 279.04 627.67 279.04 635.54 279.04 643.41 279.04 651.26 279.04 659.13 279.04 659.13 271.17 659.13 263.32 667 263.32 667 255.45 667 247.58 674.86 247.58 682.73 247.58 682.73 239.71 690.58 239.71 690.58 231.84 690.58 224 698.45 224 698.45 216.13"
            style={{ fill: "#425899" }}
          />
          <path
            d="m1022.5,275.27v-3.77h-3.77v-11.29h-3.77v-3.77h-3.77v-3.77h-3.27v-7.3h-4.25v-.22h-1.36v-5.38h-5.61v-22.45h-5.61v-11.21h-5.61v-11.22h-5.6v-5.61h-5.61v-5.61h-5.61v-5.6h-5.61v-11.22h-5.61v-11.22h-5.6v-11.21h-5.61v-5.61h-5.61v-11.22h-5.61v-5.6h-5.61v5.6h-5.6v5.61h-5.61v5.61h-5.61v5.61h-5.61v11.21h-5.61v11.22h11.22v-5.61h22.43v5.61h-5.61v5.61h-5.6v5.61h-5.61v5.6h-28.05v11.22h5.6v5.61h5.61v16.82h5.61v5.61h5.61v5.61h5.61v11.22h5.61v11.21h5.6v5.61h11.22v11.22h5.61v3.34h-11.82v-7.85h-15.74v-7.87h-7.87v-7.87h-7.87v-7.87h-1.59v-11.16h-5.61v-5.61h-5.6v-16.82h-5.61v-22.45h-11.22v-5.6h-11.21v-5.61h-16.84v4.34h-5.23v-7.87h-7.87v-7.87h-7.87v-7.87h-7.87v-7.87h-7.85v-7.85h-7.87v-7.87h-23.61v7.87h-15.72v7.85h-15.74v31.47h-7.87v23.59h-7.85v7.87h-7.87v31.45h-7.87v7.87h-7.87v23.59h-7.87v7.87h40.24s5.61,0,5.61,0h173.89s.49,0,.49,0h27.56s5.61,0,5.61,0h56.09s3.27,0,3.27,0h15.05v-3.77h-3.76Zm-190.34-63.55h18.71v-5.6h5.61v11.21h-5.61v5.61h-10.84v-6.82h-7.87v-4.41Zm1.89-22.43h-5.61v5.61h-5.61v5.61h-5.61v5.61h-.79v-5.73h-23.59v-7.87h-7.87v-15.72h7.87v7.85h41.21v4.64Z"
            style={{ fill: "#425899" }}
          />
          <polygon
            points="940.62 267.83 940.62 262.21 940.62 256.6 935 256.6 929.39 256.6 929.39 250.99 923.79 250.99 923.79 245.38 923.79 239.78 918.18 239.78 918.18 234.17 918.18 228.56 912.57 228.56 912.57 222.95 906.96 222.95 906.96 217.33 901.35 217.33 901.35 211.72 901.35 206.12 901.35 200.51 895.73 200.51 895.73 194.9 890.14 194.9 890.14 189.29 890.14 183.68 895.73 183.68 901.35 183.68 906.96 183.68 912.57 183.68 918.18 183.68 918.18 178.08 923.79 178.08 923.79 172.47 929.39 172.47 929.39 166.85 935 166.85 935 161.24 929.39 161.24 923.79 161.24 918.18 161.24 912.57 161.24 912.57 166.85 906.96 166.85 901.35 166.85 895.73 166.85 895.73 172.47 890.14 172.47 890.14 178.08 884.52 178.08 884.52 183.68 884.52 189.29 884.52 194.9 884.52 200.51 884.52 206.12 890.14 206.12 890.14 211.72 890.14 217.33 890.14 222.95 895.73 222.95 895.73 228.56 901.35 228.56 901.35 234.17 901.35 239.78 901.35 245.38 901.35 250.99 906.96 250.99 906.96 256.6 912.57 256.6 912.57 262.21 912.57 267.83 912.57 273.42 918.18 273.42 918.18 279.04 923.79 279.04 929.39 279.04 935 279.04 940.62 279.04 946.23 279.04 946.23 273.42 946.23 267.83 940.62 267.83"
            style={{ fill: "#2c3a66" }}
          />
          <polygon
            points="737.77 129.61 729.92 129.61 729.92 121.74 722.06 121.74 714.19 121.74 706.32 121.74 706.32 113.88 698.45 113.88 690.58 113.88 682.73 113.88 674.86 113.88 674.86 121.74 682.73 121.74 682.73 129.61 690.58 129.61 690.58 137.48 698.45 137.48 698.45 145.33 706.32 145.33 714.19 145.33 722.06 145.33 729.92 145.33 737.77 145.33 737.77 153.2 737.77 161.07 729.92 161.07 729.92 168.94 722.06 168.94 722.06 176.8 722.06 184.65 722.06 192.52 714.19 192.52 714.19 200.39 706.32 200.39 706.32 208.26 698.45 208.26 698.45 216.13 698.45 224 690.58 224 690.58 231.84 690.58 239.71 682.73 239.71 682.73 247.58 674.86 247.58 667 247.58 667 255.45 667 263.32 659.13 263.32 659.13 271.17 659.13 279.04 667 279.04 674.86 279.04 682.73 279.04 690.58 279.04 698.45 279.04 698.45 271.17 706.32 271.17 706.32 263.32 706.32 255.45 706.32 247.58 714.19 247.58 714.19 239.71 722.06 239.71 722.06 231.84 722.06 224 722.06 216.13 722.06 208.26 729.92 208.26 729.92 200.39 737.77 200.39 737.77 192.52 737.77 184.65 737.77 176.8 745.64 176.8 745.64 168.94 745.64 161.07 745.64 153.2 745.64 145.33 745.64 137.48 737.77 137.48 737.77 129.61"
            style={{ fill: "#2c3a66" }}
          />
          <polygon
            points="871.48 192.52 863.61 192.52 855.74 192.52 847.89 192.52 840.02 192.52 840.02 184.65 832.16 184.65 824.29 184.65 816.42 184.65 808.57 184.65 800.7 184.65 792.83 184.65 792.83 176.8 784.96 176.8 784.96 184.65 784.96 192.52 792.83 192.52 792.83 200.39 800.7 200.39 808.57 200.39 816.42 200.39 816.42 208.26 824.29 208.26 832.16 208.26 832.16 211.72 828.43 211.72 822.82 211.72 817.21 211.72 817.21 217.33 811.6 217.33 806 217.33 800.39 217.33 794.78 217.33 794.78 222.95 789.16 222.95 789.16 228.56 789.16 234.17 794.78 234.17 800.39 234.17 800.39 239.78 806 239.78 811.6 239.78 817.21 239.78 817.21 234.17 822.82 234.17 822.82 228.56 828.43 228.56 834.05 228.56 834.05 222.95 839.64 222.95 840.02 222.95 840.02 224 847.89 224 855.74 224 863.61 224 863.61 216.13 871.48 216.13 879.35 216.13 879.35 208.26 879.35 200.39 871.48 200.39 871.48 192.52"
            style={{ fill: "#2c3a66" }}
          />
        </g>
        <g id="Montagne_Centre">
          <path
            d="m558.47,261.97v-15.74h-7.87v-7.87h-7.87v-31.45h-7.87v-7.87h-7.85v-23.59h-7.87v-31.47h-15.74v-7.85h-15.72v-7.87h-23.61v7.87h-7.87v7.85h-7.85v7.87h-7.87v7.87h-7.87v7.87h-7.87v7.87h-5.23v-4.34h-16.84v5.61h-11.21v5.6h-11.22v22.45h-5.61v16.82h-5.6v5.61h-5.61v11.16h-7.59v7.87h-1.87v7.87h-7.87v7.87h-15.74v7.85h-11.82v-3.34h5.61v-11.22h11.22v-5.61h5.6v-11.21h5.61v-11.22h5.61v-5.61h5.61v-5.61h5.61v-16.82h5.61v-5.61h5.6v-11.22h-28.05v-5.6h-5.61v-5.61h-5.6v-5.61h-5.61v-5.61h22.43v5.61h11.22v-11.22h-5.61v-11.21h-5.61v-5.61h-5.61v-5.61h-5.61v-5.61h-5.6v-5.6h-5.61v5.6h-5.61v11.22h-5.61v5.61h-5.61v11.21h-5.6v11.22h-5.61v11.22h-5.61v5.6h-5.61v5.61h-5.61v5.61h-5.6v11.22h-5.61v11.21h-5.61v22.45h-5.61v5.38h-1.36v.22h-4.25v7.3h-3.27v3.77h-3.77v3.77h-3.77v11.29h-3.77v3.77h-3.76v3.77h18.32s5.61,0,5.61,0h56.09s3.97,0,3.97,0h24.07s5.61,0,5.61,0h173.89s.91,0,.91,0h39.32v-7.87h-7.87v-7.85Zm-144.55-57.19v5.6h18.71v4.41h-7.87v6.82h-10.84v-5.61h-5.61v-11.21h5.61Zm34.45-21.47h23.59v-7.85h7.87v15.72h-7.87v7.87h-23.59v5.73h-.79v-5.61h-5.61v-5.61h-5.61v-5.61h-5.61v-4.64h17.63Z"
            style={{ fill: "#5e71a8" }}
          />
          <polygon
            points="710.82 273.93 710.82 270.16 710.82 266.39 707.05 266.39 707.05 262.64 707.05 258.87 703.29 258.87 703.29 255.11 703.29 251.34 699.53 251.34 699.53 247.57 695.76 247.57 695.76 243.82 692.17 243.82 692.17 238.37 692.17 230.5 684.3 230.5 684.3 222.65 676.43 222.65 676.43 214.78 676.43 206.91 676.43 199.05 676.43 191.18 668.57 191.18 668.57 183.31 668.57 175.46 660.7 175.46 660.7 167.59 660.7 159.72 652.85 159.72 652.85 151.85 644.98 151.85 644.98 143.99 637.11 143.99 637.11 136.14 629.24 136.14 629.24 128.27 629.24 120.4 621.37 120.4 621.37 112.53 621.37 104.66 613.53 104.66 613.53 96.81 613.53 88.95 605.66 88.95 605.66 81.08 597.79 81.08 597.79 73.21 597.79 65.34 589.92 65.34 589.92 57.49 582.05 57.49 582.05 65.34 574.2 65.34 574.2 73.21 566.33 73.21 566.33 81.08 558.47 81.08 558.47 88.95 550.6 88.95 550.6 96.81 550.6 104.66 542.73 104.66 542.73 112.53 542.73 120.4 550.6 120.4 558.47 120.4 558.47 112.53 566.33 112.53 574.2 112.53 582.05 112.53 589.92 112.53 589.92 120.4 582.05 120.4 582.05 128.27 574.2 128.27 574.2 136.14 566.33 136.14 566.33 143.99 558.47 143.99 550.6 143.99 542.73 143.99 534.86 143.99 527.01 143.99 527.01 151.85 527.01 159.72 534.86 159.72 534.86 167.59 542.73 167.59 542.73 175.46 542.73 183.31 542.73 191.18 550.6 191.18 550.6 199.05 558.47 199.05 558.47 206.91 566.33 206.91 566.33 214.78 566.33 222.65 574.2 222.65 574.2 230.5 574.2 238.37 582.05 238.37 582.05 246.24 589.92 246.24 597.79 246.24 597.79 254.11 597.79 261.97 605.66 261.97 605.66 269.82 605.66 277.69 613.53 277.69 621.37 277.69 629.24 277.69 637.11 277.69 644.98 277.69 652.85 277.69 660.7 277.69 661.89 277.69 665.65 277.69 668.57 277.69 669.41 277.69 673.18 277.69 676.43 277.69 676.94 277.69 680.71 277.69 684.3 277.69 684.47 277.69 688.23 277.69 692 277.69 692.17 277.69 695.76 277.69 699.53 277.69 703.29 277.69 707.05 277.69 710.82 277.69 714.58 277.69 714.58 273.93 710.82 273.93"
            style={{ fill: "#5e71a8" }}
          />
          <polygon
            points="374.65 171.12 369.05 171.12 369.05 165.51 363.44 165.51 357.83 165.51 352.21 165.51 352.21 159.9 346.6 159.9 340.99 159.9 335.39 159.9 329.78 159.9 329.78 165.51 335.39 165.51 335.39 171.12 340.99 171.12 340.99 176.73 346.6 176.73 346.6 182.33 352.21 182.33 357.83 182.33 363.44 182.33 369.05 182.33 374.65 182.33 374.65 187.94 374.65 193.56 369.05 193.56 369.05 199.17 363.44 199.17 363.44 204.78 363.44 210.38 363.44 215.99 357.83 215.99 357.83 221.6 352.21 221.6 352.21 227.21 346.6 227.21 346.6 232.83 346.6 238.44 340.99 238.44 340.99 244.03 340.99 249.65 335.39 249.65 335.39 255.26 329.78 255.26 324.17 255.26 324.17 260.87 324.17 266.48 318.56 266.48 318.56 272.08 318.56 277.69 324.17 277.69 329.78 277.69 335.39 277.69 340.99 277.69 346.6 277.69 346.6 272.08 352.21 272.08 352.21 266.48 352.21 260.87 352.21 255.26 357.83 255.26 357.83 249.65 363.44 249.65 363.44 244.03 363.44 238.44 363.44 232.83 363.44 227.21 369.05 227.21 369.05 221.6 374.65 221.6 374.65 215.99 374.65 210.38 374.65 204.78 380.26 204.78 380.26 199.17 380.26 193.56 380.26 187.94 380.26 182.33 380.26 176.73 374.65 176.73 374.65 171.12"
            style={{ fill: "#425899" }}
          />
          <polygon
            points="597.79 261.97 597.79 254.11 597.79 246.24 589.92 246.24 582.05 246.24 582.05 238.37 574.2 238.37 574.2 230.5 574.2 222.65 566.33 222.65 566.33 214.78 566.33 206.91 558.47 206.91 558.47 199.05 550.6 199.05 550.6 191.18 542.73 191.18 542.73 183.31 542.73 175.46 542.73 167.59 534.86 167.59 534.86 159.72 527.01 159.72 527.01 151.85 527.01 143.99 534.86 143.99 542.73 143.99 550.6 143.99 558.47 143.99 566.33 143.99 566.33 136.14 574.2 136.14 574.2 128.27 582.05 128.27 582.05 120.4 589.92 120.4 589.92 112.53 582.05 112.53 574.2 112.53 566.33 112.53 558.47 112.53 558.47 120.4 550.6 120.4 542.73 120.4 534.86 120.4 534.86 128.27 527.01 128.27 527.01 136.14 519.14 136.14 519.14 143.99 519.14 151.85 519.14 159.72 519.14 167.59 519.14 175.46 527.01 175.46 527.01 183.31 527.01 191.18 527.01 199.05 534.86 199.05 534.86 206.91 542.73 206.91 542.73 214.78 542.73 222.65 542.73 230.5 542.73 238.37 550.6 238.37 550.6 246.24 558.47 246.24 558.47 254.11 558.47 261.97 558.47 269.82 566.33 269.82 566.33 277.69 574.2 277.69 582.05 277.69 589.92 277.69 597.79 277.69 605.66 277.69 605.66 269.82 605.66 261.97 597.79 261.97"
            style={{ fill: "#425899" }}
          />
          <polygon
            points="471.95 183.31 464.08 183.31 456.21 183.31 448.37 183.31 440.5 183.31 432.63 183.31 424.76 183.31 424.76 191.18 416.89 191.18 409.04 191.18 401.17 191.18 393.31 191.18 393.31 199.05 385.44 199.05 385.44 206.91 385.44 214.78 393.31 214.78 401.17 214.78 401.17 222.65 409.04 222.65 416.89 222.65 424.76 222.65 424.76 221.6 425.14 221.6 430.74 221.6 430.74 227.21 436.35 227.21 441.96 227.21 441.96 232.83 447.57 232.83 447.57 238.44 453.19 238.44 458.78 238.44 464.4 238.44 464.4 232.83 470.01 232.83 475.62 232.83 475.62 227.21 475.62 221.6 470.01 221.6 470.01 215.99 464.4 215.99 458.78 215.99 453.19 215.99 447.57 215.99 447.57 210.38 441.96 210.38 436.35 210.38 432.63 210.38 432.63 206.91 440.5 206.91 448.37 206.91 448.37 199.05 456.21 199.05 464.08 199.05 471.95 199.05 471.95 191.18 479.82 191.18 479.82 183.31 479.82 175.46 471.95 175.46 471.95 183.31"
            style={{ fill: "#425899" }}
          />
        </g>
        <g id="Montagne_Gauche">
          <polygon
            points="233.37 262.65 233.37 255.12 233.37 247.58 225.84 247.58 225.84 240.05 218.31 240.05 218.31 232.52 218.31 225.01 218.31 217.48 218.31 209.94 210.78 209.94 210.78 202.41 203.26 202.41 203.26 194.88 203.26 187.35 203.26 179.84 195.73 179.84 195.73 172.3 195.73 164.77 195.73 157.24 195.73 149.71 188.2 149.71 180.67 149.71 180.67 142.2 173.14 142.2 165.62 142.2 165.62 134.66 158.09 134.66 150.56 134.66 143.03 134.66 143.03 142.2 135.5 142.2 135.5 149.71 127.98 149.71 127.98 157.24 120.45 157.24 120.45 164.77 112.92 164.77 112.92 172.3 105.39 172.3 105.39 179.84 97.86 179.84 90.34 179.84 90.34 187.35 82.81 187.35 82.81 194.88 90.34 194.88 97.86 194.88 105.39 194.88 105.39 187.35 112.92 187.35 120.45 187.35 127.98 187.35 135.5 187.35 143.03 187.35 150.56 187.35 150.56 179.84 158.09 179.84 158.09 187.35 158.09 194.88 150.56 194.88 150.56 202.41 143.03 202.41 135.5 202.41 127.98 202.41 127.98 209.94 120.45 209.94 112.92 209.94 112.92 217.48 105.39 217.48 105.39 225.01 97.86 225.01 90.34 225.01 82.81 225.01 82.81 217.48 75.28 217.48 67.75 217.48 67.75 225.01 60.22 225.01 60.22 232.52 52.68 232.52 52.68 240.05 45.17 240.05 45.17 247.58 37.64 247.58 37.64 255.12 30.11 255.12 30.11 262.65 22.58 262.65 15.04 262.65 15.04 270.16 7.53 270.16 0 270.16 0 277.69 7.53 277.69 15.04 277.69 22.58 277.69 30.11 277.69 37.64 277.69 45.17 277.69 52.68 277.69 60.22 277.69 67.75 277.69 75.28 277.69 82.81 277.69 90.34 277.69 97.86 277.69 105.39 277.69 112.92 277.69 120.45 277.69 127.98 277.69 135.5 277.69 143.03 277.69 150.56 277.69 158.09 277.69 165.62 277.69 173.14 277.69 180.67 277.69 188.2 277.69 195.73 277.69 203.26 277.69 210.78 277.69 218.31 277.69 225.84 277.69 233.37 277.69 240.9 277.69 240.9 270.16 233.37 270.16 233.37 262.65"
            style={{ fill: "#425899" }}
          />
          <path
            d="m432.86,262.84v-15.04h-7.53v-15.06h-7.51v-7.53h-7.53v-15.04h-7.53v-7.53h-7.53v-7.53h-7.53v-7.53h-15.04v-7.53h-15.06v23.16h-7.52v6.97h-3.76v-15.28h-7.53v-15.04h-7.53v-15.06h-7.51v-7.53h-7.53v-7.53h-7.53v-7.51h-7.53v-15.06h-7.53v-15.06h-7.51v-15.04h-7.53v-7.53h-7.53v-15.06h-7.53v-7.51h-7.53v7.51h-7.51v7.53h-7.53v7.53h-7.53v7.53h-7.53v15.04h-7.53v15.06h15.06v-7.53h30.11v7.53h-7.53v7.53h-7.51v7.53h-7.53v7.51h-37.64v15.06h7.51v7.53h7.53v22.58h7.53v7.53h7.53v7.53h7.53v15.06h7.53v15.04h7.51v7.53h15.06v15.06h7.53v15.04h18.82v.22h60.22v-.22h3.78v-44.95h3.76v7.53h7.53s7.5,0,7.5,0h0s-7.5,0-7.5,0v15.04h7.51s7.52,0,7.52,0h0s-7.52,0-7.52,0v7.52h0v7.53h7.53v7.53h52.7v-15.06h-7.53Zm-75.27-37.63v7.31h-3.76v-7.51h-7.53v-7.34h11.28v7.53h15.06s-7.52,0-7.52,0h-7.53Z"
            style={{ fill: "#425899" }}
          />
          <polygon
            points="380.15 270.38 380.15 262.84 380.15 255.31 372.64 255.31 372.64 247.8 372.64 240.27 365.11 240.27 365.11 232.74 357.58 232.74 357.58 225.2 357.58 217.67 350.05 217.67 342.51 217.67 342.51 225.2 350.05 225.2 350.05 232.74 350.05 240.27 357.58 240.27 357.58 247.8 357.58 255.31 365.11 255.31 365.11 262.84 372.64 262.84 372.64 270.38 372.64 277.91 380.15 277.91 387.69 277.91 387.69 270.38 380.15 270.38"
            style={{ fill: "#0a1a4c8" }}
          />
          <polygon
            points="271.01 255.12 271.01 247.58 263.48 247.58 255.95 247.58 255.95 240.05 248.44 240.05 248.44 232.52 248.44 225.01 240.9 225.01 240.9 217.48 240.9 209.94 233.37 209.94 233.37 202.41 225.84 202.41 225.84 194.88 218.31 194.88 218.31 187.35 218.31 179.84 218.31 172.3 210.78 172.3 210.78 164.77 203.26 164.77 203.26 157.24 203.26 149.71 210.78 149.71 218.31 149.71 225.84 149.71 233.37 149.71 240.9 149.71 240.9 142.2 248.44 142.2 248.44 134.66 255.95 134.66 255.95 127.13 263.48 127.13 263.48 119.6 255.95 119.6 248.44 119.6 240.9 119.6 233.37 119.6 233.37 127.13 225.84 127.13 218.31 127.13 210.78 127.13 210.78 134.66 203.26 134.66 203.26 142.2 195.73 142.2 195.73 149.71 195.73 157.24 195.73 164.77 195.73 172.3 195.73 179.84 203.26 179.84 203.26 187.35 203.26 194.88 203.26 202.41 210.78 202.41 210.78 209.94 218.31 209.94 218.31 217.48 218.31 225.01 218.31 232.52 218.31 240.05 225.84 240.05 225.84 247.58 233.37 247.58 233.37 255.12 233.37 262.65 233.37 270.16 240.9 270.16 240.9 277.69 248.44 277.69 255.95 277.69 263.48 277.69 271.01 277.69 278.54 277.69 278.54 270.16 278.54 262.65 271.01 262.65 271.01 255.12"
            style={{ fill: "#2c3a66" }}
          />
          <polygon
            points="150.56 187.35 143.03 187.35 135.5 187.35 127.98 187.35 120.45 187.35 112.92 187.35 105.39 187.35 105.39 194.88 97.86 194.88 90.34 194.88 82.81 194.88 75.28 194.88 75.28 202.41 67.75 202.41 67.75 209.94 67.75 217.48 75.28 217.48 82.81 217.48 82.81 225.01 90.34 225.01 97.86 225.01 105.39 225.01 105.39 217.48 112.92 217.48 112.92 209.94 120.45 209.94 127.98 209.94 127.98 202.41 135.5 202.41 143.03 202.41 150.56 202.41 150.56 194.88 158.09 194.88 158.09 187.35 158.09 179.84 150.56 179.84 150.56 187.35"
            style={{ fill: "#2c3a66" }}
          />
          <polygon
            points="440.39 255.31 440.39 247.8 440.39 240.27 432.86 240.27 432.86 232.74 432.86 225.2 425.33 225.2 425.33 217.67 417.81 217.67 417.81 210.16 417.81 202.63 410.28 202.63 410.28 195.1 402.75 195.1 402.75 187.56 395.22 187.56 395.22 180.03 387.69 180.03 380.15 180.03 380.15 172.52 372.64 172.52 372.64 164.99 365.11 164.99 365.11 172.52 365.11 180.03 372.64 180.03 372.64 187.56 380.15 187.56 387.69 187.56 387.69 195.1 395.22 195.1 395.22 202.63 402.75 202.63 402.75 210.16 410.28 210.16 410.28 217.67 410.28 225.2 417.81 225.2 417.81 232.74 425.33 232.74 425.33 240.27 425.33 247.8 432.86 247.8 432.86 255.31 432.86 262.84 440.39 262.84 440.39 270.38 440.39 277.91 447.92 277.91 447.92 270.38 447.92 262.84 447.92 255.31 440.39 255.31"
            style={{ fill: "#2c3a66" }}
          />
          <polygon
            points="365.11 255.31 357.58 255.31 357.58 247.8 357.58 240.27 350.05 240.27 350.05 232.74 350.05 225.2 342.51 225.2 342.51 217.67 335 217.67 335 225.2 327.47 225.2 327.47 232.74 327.47 240.27 335 240.27 335 247.8 342.51 247.8 342.51 255.31 342.51 262.84 350.05 262.84 350.05 270.38 357.58 270.38 357.58 277.91 365.11 277.91 372.64 277.91 372.64 270.38 372.64 262.84 365.11 262.84 365.11 255.31"
            style={{ fill: "#2c3a66" }}
          />
        </g>
        <g id="Socle">
          <g id="BAS">
            <rect
              x="1.25"
              y="267.04"
              width="1022"
              height="13"
              style={{ fill: "#d06ca0" }}
            />
            <rect
              x="96.25"
              y="279.54"
              width="857"
              height="13"
              style={{ fill: "#c62c7b" }}
            />
            <rect
              x="161.25"
              y="292.04"
              width="727"
              height="13"
              style={{ fill: "#94215c" }}
            />
            <rect
              x="214.25"
              y="305.04"
              width="621"
              height="13"
              style={{ fill: "#d06ca0" }}
            />
            <rect
              x="271.25"
              y="317.04"
              width="507"
              height="13"
              style={{ fill: "#94215c" }}
            />
            <rect
              x="393.25"
              y="289.04"
              width="135"
              height="6"
              style={{ fill: "#c62c7b" }}
            />
            <rect
              x="395.25"
              y="293.04"
              width="131"
              height="6"
              style={{ fill: "#c62c7b" }}
            />
          </g>
        </g>
        <g id="Nuage_Gauche" style={{ position: "relative" }}>
          <polygon
            points="351.29 80.18 351.29 91.69 339.78 91.69 339.78 103.19 339.78 114.66 351.29 114.66 351.29 103.19 362.79 103.19 362.79 91.69 362.79 80.18 351.29 80.18"
            style={{ fill: "#c62c7b" }}
          />
          <polygon
            points="270.8 68.68 259.32 68.68 259.32 80.18 247.82 80.18 247.82 91.69 236.32 91.69 236.32 103.19 247.82 103.19 259.32 103.19 259.32 91.69 270.8 91.69 270.8 80.18 282.3 80.18 282.3 68.68 282.3 57.18 270.8 57.18 270.8 68.68"
            style={{ fill: "#c62c7b" }}
          />
          <polygon
            points="443.28 103.19 443.28 91.69 443.28 80.18 431.77 80.18 431.77 68.68 420.27 68.68 420.27 57.18 408.77 57.18 397.27 57.18 397.27 68.68 385.79 68.68 385.79 80.18 374.29 80.18 374.29 91.69 362.79 91.69 362.79 103.19 351.29 103.19 351.29 114.66 339.78 114.66 339.78 103.19 339.78 91.69 351.29 91.69 351.29 80.18 351.29 68.68 339.78 68.68 339.78 57.18 328.31 57.18 316.81 57.18 305.31 57.18 305.31 68.68 293.8 68.68 282.3 68.68 282.3 80.18 270.8 80.18 270.8 91.69 259.32 91.69 259.32 103.19 247.82 103.19 236.32 103.19 236.32 91.69 247.82 91.69 247.82 80.18 259.32 80.18 259.32 68.68 270.8 68.68 270.8 57.18 270.8 45.7 259.32 45.7 259.32 34.2 247.82 34.2 236.32 34.2 224.82 34.2 213.31 34.2 201.84 34.2 201.84 45.7 190.34 45.7 190.34 57.18 178.84 57.18 178.84 68.68 167.33 68.68 167.33 80.18 167.33 91.69 155.83 91.69 155.83 103.19 144.36 103.19 144.36 114.66 132.86 114.66 132.86 126.16 144.36 126.16 155.83 126.16 167.33 126.16 178.84 126.16 178.84 114.66 190.34 114.66 201.84 114.66 213.31 114.66 224.82 114.66 236.32 114.66 236.32 126.16 247.82 126.16 259.32 126.16 270.8 126.16 282.3 126.16 293.8 126.16 293.8 114.66 305.31 114.66 316.81 114.66 328.31 114.66 328.31 126.16 339.78 126.16 351.29 126.16 362.79 126.16 374.29 126.16 385.79 126.16 397.27 126.16 408.77 126.16 408.77 114.66 420.27 114.66 431.77 114.66 443.28 114.66 454.75 114.66 454.75 103.19 443.28 103.19"
            style={{ fill: "#d06ca0" }}
          />
          <polygon
            points="454.75 126.16 454.75 114.66 443.28 114.66 431.77 114.66 420.27 114.66 408.77 114.66 408.77 126.16 397.27 126.16 385.79 126.16 374.29 126.16 362.79 126.16 351.29 126.16 339.78 126.16 328.31 126.16 328.31 114.66 316.81 114.66 305.31 114.66 293.8 114.66 293.8 126.16 282.3 126.16 270.8 126.16 259.32 126.16 247.82 126.16 236.32 126.16 236.32 114.66 224.82 114.66 213.31 114.66 201.84 114.66 190.34 114.66 178.84 114.66 178.84 126.16 167.33 126.16 155.83 126.16 144.36 126.16 132.86 126.16 121.35 126.16 121.35 137.67 132.86 137.67 144.36 137.67 155.83 137.67 167.33 137.67 178.84 137.67 190.34 137.67 201.84 137.67 213.31 137.67 224.82 137.67 236.32 137.67 247.82 137.67 259.32 137.67 270.8 137.67 282.3 137.67 293.8 137.67 305.31 137.67 316.81 137.67 328.31 137.67 339.78 137.67 351.29 137.67 362.79 137.67 374.29 137.67 385.79 137.67 397.27 137.67 408.77 137.67 420.27 137.67 431.77 137.67 443.28 137.67 454.75 137.67 466.25 137.67 466.25 126.16 454.75 126.16"
            style={{ fill: "#94215c" }}
          />
        </g>
        <g id="Nuage_Droite">
          <polygon
            points="598.32 29.18 591.02 29.18 591.02 36.48 591.02 43.78 598.32 43.78 598.32 51.07 605.62 51.07 605.62 43.78 605.62 36.48 598.32 36.48 598.32 29.18"
            style={{ fill: "#c62c7b" }}
          />
          <polygon
            points="663.99 36.48 663.99 29.18 656.69 29.18 656.69 21.88 649.4 21.88 649.4 14.58 642.1 14.58 642.1 21.88 642.1 29.18 649.4 29.18 649.4 36.48 656.69 36.48 656.69 43.78 663.99 43.78 671.29 43.78 671.29 36.48 663.99 36.48"
            style={{ fill: "#c62c7b" }}
          />
          <polygon
            points="729.65 51.07 729.65 43.78 722.37 43.78 722.37 36.48 715.07 36.48 715.07 29.18 715.07 21.88 707.77 21.88 707.77 14.58 700.47 14.58 700.47 7.3 693.17 7.3 693.17 0 685.89 0 678.59 0 671.29 0 663.99 0 656.69 0 656.69 7.3 649.4 7.3 649.4 14.58 649.4 21.88 656.69 21.88 656.69 29.18 663.99 29.18 663.99 36.48 671.29 36.48 671.29 43.78 663.99 43.78 656.69 43.78 656.69 36.48 649.4 36.48 649.4 29.18 642.1 29.18 642.1 21.88 634.8 21.88 627.5 21.88 627.5 14.58 620.2 14.58 612.9 14.58 605.62 14.58 605.62 21.88 598.32 21.88 598.32 29.18 598.32 36.48 605.62 36.48 605.62 43.78 605.62 51.07 598.32 51.07 598.32 43.78 591.02 43.78 591.02 36.48 583.72 36.48 583.72 29.18 576.42 29.18 576.42 21.88 569.14 21.88 569.14 14.58 561.84 14.58 554.54 14.58 554.54 21.88 547.24 21.88 547.24 29.18 539.93 29.18 539.93 36.48 539.93 43.78 532.65 43.78 532.65 51.07 539.93 51.07 547.24 51.07 554.54 51.07 561.84 51.07 561.84 58.37 569.14 58.37 576.42 58.37 583.72 58.37 591.02 58.37 598.32 58.37 605.62 58.37 612.9 58.37 612.9 51.07 620.2 51.07 627.5 51.07 634.8 51.07 634.8 58.37 642.1 58.37 649.4 58.37 656.69 58.37 663.99 58.37 671.29 58.37 671.29 51.07 678.59 51.07 685.89 51.07 693.17 51.07 700.47 51.07 707.77 51.07 707.77 58.37 715.07 58.37 722.37 58.37 729.65 58.37 736.95 58.37 736.95 51.07 729.65 51.07"
            style={{ fill: "#d06ca0" }}
          />
          <polygon
            points="736.95 58.37 729.65 58.37 722.37 58.37 715.07 58.37 707.77 58.37 707.77 51.07 700.47 51.07 693.17 51.07 685.89 51.07 678.59 51.07 671.29 51.07 671.29 58.37 663.99 58.37 656.69 58.37 649.4 58.37 642.1 58.37 634.8 58.37 634.8 51.07 627.5 51.07 620.2 51.07 612.9 51.07 612.9 58.37 605.62 58.37 598.32 58.37 591.02 58.37 583.72 58.37 576.42 58.37 569.14 58.37 561.84 58.37 561.84 51.07 554.54 51.07 547.24 51.07 539.93 51.07 532.65 51.07 532.65 58.37 525.35 58.37 525.35 65.67 532.65 65.67 539.93 65.67 547.24 65.67 554.54 65.67 561.84 65.67 569.14 65.67 576.42 65.67 583.72 65.67 591.02 65.67 598.32 65.67 605.62 65.67 612.9 65.67 620.2 65.67 627.5 65.67 634.8 65.67 642.1 65.67 649.4 65.67 656.69 65.67 663.99 65.67 671.29 65.67 678.59 65.67 685.89 65.67 693.17 65.67 700.47 65.67 707.77 65.67 715.07 65.67 722.37 65.67 729.65 65.67 736.95 65.67 744.25 65.67 744.25 58.37 736.95 58.37"
            style={{ fill: "#94215c" }}
          />
        </g>
      </svg>
    </div>
  );
}
